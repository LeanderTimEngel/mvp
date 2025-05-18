import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET() {
  try {
    // Generate the sample story text
    const storyText = `Once upon a time, in a cozy little house at the edge of a magical forest, lived a bright and curious 6-year-old girl named Emma. Emma loved nothing more than playing with her favorite toy unicorn, Sparkle, and dreaming of magical adventures.

One night, as Emma was getting ready for bed, she noticed something extraordinary. Her toy unicorn, Sparkle, began to glow with a soft, rainbow light. Before Emma could blink, Sparkle had grown to life-size, with a flowing rainbow mane and a horn that sparkled like stars!

"Would you like to go on a magical adventure?" Sparkle asked in a gentle, musical voice. Emma's eyes widened with excitement as she nodded eagerly. Together, they would discover the wonders of the magical forest and learn that the greatest magic of all is the power of friendship and imagination.

As they stepped into the forest, the trees seemed to dance in the moonlight, and fireflies twinkled like tiny stars. Sparkle's horn cast a gentle glow, lighting their path through the magical woods. They met friendly forest creatures who were amazed to see a real unicorn and a brave little girl exploring their home.

Emma and Sparkle helped a lost baby rabbit find its way home, shared stories with wise old owls, and even danced with playful fairies under the moonlit sky. Through their adventure, Emma learned that being kind and helping others was the most magical thing of all.

When it was time to return home, Sparkle promised that this wouldn't be their last adventure together. "The magic of friendship and imagination," Sparkle said, "means we can have wonderful adventures whenever we want!"

Emma hugged her magical friend, knowing that this was just the beginning of many more magical stories to come. And as she drifted off to sleep that night, her dreams were filled with the promise of new adventures with her very own unicorn friend.`;

    // Generate audio using OpenAI TTS
    const audioResponse = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: storyText,
    });

    // Convert the audio to a buffer
    const audioBuffer = await audioResponse.arrayBuffer();

    // Return the audio file
    return new NextResponse(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Disposition': 'attachment; filename="sample-story.mp3"',
      },
    });
  } catch (error) {
    console.error('Error generating sample story:', error);
    return NextResponse.json(
      { error: 'Failed to generate sample story' },
      { status: 500 }
    );
  }
} 