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
export const DEMO_VIDEO_URL = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0'; 