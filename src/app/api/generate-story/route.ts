import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { Resend } from 'resend';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const resend = new Resend(process.env.RESEND_API_KEY);

const STORY_LENGTH_WORDS = {
  short: 200,
  medium: 400,
  long: 600,
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      childName,
      childAge: age,
      favoriteCharacter,
      hobby: favoriteHobby,
      storyCategory,
      storyLength,
      parentEmail,
    } = body;

    // Generate story using OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a children's story writer specializing in ${storyCategory} stories. 
          Create an engaging story for a ${age}-year-old child named ${childName}. 
          The story should be age-appropriate, positive, and include their favorite character (${favoriteCharacter}) and hobby (${favoriteHobby}).
          Keep the story around ${STORY_LENGTH_WORDS[storyLength as keyof typeof STORY_LENGTH_WORDS]} words.
          Make sure to include the child's name naturally throughout the story.
          The story should have a clear beginning, middle, and end with a positive message.`
        }
      ],
    });

    const story = completion.choices[0].message.content;

    // Generate audio using OpenAI's text-to-speech
    const audioResponse = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: story!,
    });

    const audioBuffer = Buffer.from(await audioResponse.arrayBuffer());

    // Send email with story and audio using Resend
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: parentEmail,
      subject: `Your Personalized ${storyCategory} Story for ${childName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #4F46E5;">Your Magical Story is Ready!</h1>
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

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, story });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate story' },
      { status: 500 }
    );
  }
} 