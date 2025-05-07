import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { Resend } from 'resend';
import { z } from 'zod';
import { STORY_CATEGORIES, STORY_LENGTH_WORDS, COLORS } from '@/lib/constants';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory store for tracking story counts per email
// Note: This will reset when the server restarts. For production, use a database.
const storyCounts = new Map<string, number>();
const MAX_STORIES_PER_EMAIL = 1;

const STORY_LENGTH_KEYS = ['short', 'medium', 'long'] as const;

const StoryRequestSchema = z.object({
  childName: z.string().min(1, "Child's name is required").max(50),
  childAge: z.number().min(4, "Child must be at least 4").max(10, "Child must be 10 or younger").int(),
  favoriteCharacter: z.string().min(1, "Favorite character is required").max(50),
  hobby: z.string().min(1, "Hobby is required").max(50),
  storyCategory: z.enum(STORY_CATEGORIES, { message: "Invalid story category" }),
  storyLength: z.enum(STORY_LENGTH_KEYS, { message: "Invalid story length" }),
  parentEmail: z.string().email("Invalid email address").max(100),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validationResult = StoryRequestSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Invalid input", details: validationResult.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const {
      childName,
      childAge,
      favoriteCharacter,
      hobby,
      storyCategory,
      storyLength,
      parentEmail,
    } = validationResult.data;

    // Check if the email has reached its story limit
    const currentCount = storyCounts.get(parentEmail) || 0;
    if (currentCount >= MAX_STORIES_PER_EMAIL) {
      return NextResponse.json(
        { error: "You have reached the maximum number of stories allowed per email address." },
        { status: 403 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a children's story writer specializing in ${storyCategory} stories. 
          Create an engaging story for a ${childAge}-year-old child named ${childName}. 
          The story should be age-appropriate, positive, and include their favorite character (${favoriteCharacter}) and hobby (${hobby}).
          Keep the story around ${STORY_LENGTH_WORDS[storyLength]} words.
          Make sure to include the child's name naturally throughout the story.
          The story should have a clear beginning, middle, and end with a positive message.`
        }
      ],
    });

    const story = completion.choices[0].message.content;

    if (!story) {
      console.error('OpenAI returned an empty story content.');
      return NextResponse.json({ error: 'Failed to generate story content' }, { status: 500 });
    }

    const audioResponse = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: story,
    });

    const audioBuffer = Buffer.from(await audioResponse.arrayBuffer());

    const { error: emailError } = await resend.emails.send({
      from: 'Magical Stories <hello@magical-stories.fun>',
      to: parentEmail,
      subject: `Your Personalized ${storyCategory} Story for ${childName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: ${COLORS.primary};">Your Magical Story is Ready!</h1>
          <p>Dear Parent,</p>
          <p>Here's your personalized ${storyCategory.toLowerCase()} story for ${childName}!</p>
          <div style="background-color: #F9FAFB; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="white-space: pre-wrap;">${story}</p>
          </div>
          <p>We've also attached an audio version of the story for your convenience.</p>
          <p>Enjoy the magical journey!</p>
          <p>Best regards,<br>The Story Team</p>
        </div>
      `,
      attachments: [
        {
          filename: `${childName}-${storyCategory.toLowerCase()}-story.mp3`,
          content: audioBuffer,
        },
      ],
    });

    if (emailError) {
      console.error('Error sending email:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Increment the story count for this email
    storyCounts.set(parentEmail, currentCount + 1);

    return NextResponse.json({ success: true, story });

  } catch (error) {
    console.error('Error in /api/generate-story:', error);
    if (error instanceof OpenAI.APIError) {
      return NextResponse.json({ error: `OpenAI Error: ${error.message}` }, { status: error.status || 500 });
    }
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
} 