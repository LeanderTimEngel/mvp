// Theme Colors
export const COLORS = {
  primary: '#fa6565',
  secondary: '#f2c955',
  dark: '#171c3f',
  success: '#1da448',
  error: '#FF6B6B',
};

// Story Categories 
export const STORY_CATEGORIES = [
  'Adventure',
  'Fantasy',
  'Animals',
  'Space',
  'Superheroes',
  'Princesses',
  'Dinosaurs',
  'Pirates',
] as const;

// Story Lengths
export const STORY_LENGTHS = [
  { value: 'short', label: 'Short (5-10 minutes)' },
  { value: 'medium', label: 'Medium (10-15 minutes)' },
  { value: 'long', label: 'Long (15-20 minutes)' },
] as const;

export const STORY_LENGTH_WORDS = {
  short: 200,
  medium: 400,
  long: 600,
};

// Demo Video URL
export const DEMO_VIDEO_URL = 'https://www.loom.com/share/b0f9157b0ee04dbabc66bbbc4d0aefe7?sid=afdbb7c2-3dd1-420a-b286-5e074d4da96b';

// Landing Page - How It Works Section
export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

export const LANDING_HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: "1",
    title: "Tell Us About Your Child",
    description: "Share your child&apos;s name, age, favorite character, and interests. We&apos;ll use these to create a story they&apos;ll love."
  },
  {
    step: "2",
    title: "We Create a Magical Story",
    description: "Our story experts craft a unique adventure that&apos;s perfect for your child&apos;s age and interests, making them the hero of their own tale."
  },
  {
    step: "3",
    title: "Enjoy Together",
    description: "Get your story delivered to your email with professional narration, ready for bedtime, car rides, or any time they need a magical adventure."
  }
];

// Add other constants for landing page content here (Features, Testimonials etc.) 