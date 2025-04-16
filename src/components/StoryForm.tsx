'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const STORY_CATEGORIES = [
  'Adventure',
  'Fantasy',
  'Animals',
  'Space',
  'Superheroes',
  'Princesses',
  'Dinosaurs',
  'Pirates',
] as const;

const STORY_LENGTHS = [
  { value: 'short', label: 'Short (5-10 minutes)' },
  { value: 'medium', label: 'Medium (10-15 minutes)' },
  { value: 'long', label: 'Long (15-20 minutes)' },
] as const;

const formSchema = z.object({
  childName: z.string()
    .min(1, 'Please enter your child&apos;s name')
    .max(50, 'Name is too long'),
  childAge: z.number()
    .min(4, 'Child must be at least 4 years old')
    .max(10, 'Child must be 10 years old or younger')
    .int('Age must be a whole number'),
  favoriteCharacter: z.string()
    .min(1, 'Please enter a favorite character')
    .max(50, 'Character name is too long'),
  hobby: z.string()
    .min(1, 'Please enter a hobby')
    .max(50, 'Hobby description is too long'),
  storyCategory: z.enum(STORY_CATEGORIES, {
    errorMap: () => ({ message: 'Please select a story category' })
  }),
  storyLength: z.enum(['short', 'medium', 'long'] as const, {
    errorMap: () => ({ message: 'Please select a story length' })
  }),
  parentEmail: z.string()
    .email('Please enter a valid email address')
    .max(100, 'Email is too long'),
});

type FormData = z.infer<typeof formSchema>;

export default function StoryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/generate-story', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to generate story');
      }

      const result = await response.json();
      console.log('Story generated:', result);
      alert('Story generated successfully! Check your email for the story.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[#171c3f]">Create a Magical Story</h2>
        <p className="text-[#171c3f]/80">Fill in the details to create a personalized story for your child.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="childName" className="block text-sm font-medium text-[#171c3f]">
            Child&apos;s Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-[#f2c955]">👶</span>
            </div>
            <input
              type="text"
              id="childName"
              {...register('childName')}
              className={`block w-full pl-10 pr-3 py-2 border rounded-xl bg-white/50 focus:ring-2 focus:ring-[#fa6565]/20 focus:border-[#fa6565] text-[#171c3f] placeholder-[#171c3f]/40 ${
                errors.childName ? 'border-[#FF6B6B]' : 'border-[#f2c955]/20'
              }`}
              placeholder="Enter your child's name"
            />
          </div>
          {errors.childName && (
            <p className="text-sm text-[#FF6B6B] flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.childName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="childAge" className="block text-sm font-medium text-[#171c3f]">
            Child&apos;s Age
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-[#1da448]">🎂</span>
            </div>
            <input
              type="number"
              id="childAge"
              {...register('childAge', { valueAsNumber: true })}
              className={`block w-full pl-10 pr-3 py-2 border rounded-xl bg-white/50 focus:ring-2 focus:ring-[#1da448]/20 focus:border-[#1da448] text-[#171c3f] placeholder-[#171c3f]/40 ${
                errors.childAge ? 'border-[#FF6B6B]' : 'border-[#1da448]/20'
              }`}
              placeholder="Enter age (4-10)"
              min={4}
              max={10}
            />
          </div>
          {errors.childAge && (
            <p className="text-sm text-[#FF6B6B] flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.childAge.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="favoriteCharacter" className="block text-sm font-medium text-[#171c3f]">
            Favorite Character
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-[#fa6565]">🌟</span>
            </div>
            <input
              type="text"
              id="favoriteCharacter"
              {...register('favoriteCharacter')}
              className={`block w-full pl-10 pr-3 py-2 border rounded-xl bg-white/50 focus:ring-2 focus:ring-[#fa6565]/20 focus:border-[#fa6565] text-[#171c3f] placeholder-[#171c3f]/40 ${
                errors.favoriteCharacter ? 'border-[#FF6B6B]' : 'border-[#fa6565]/20'
              }`}
              placeholder="Who&apos;s their favorite character?"
            />
          </div>
          {errors.favoriteCharacter && (
            <p className="text-sm text-[#FF6B6B] flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.favoriteCharacter.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="hobby" className="block text-sm font-medium text-[#171c3f]">
            Favorite Hobby
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-[#f2c955]">🎨</span>
            </div>
            <input
              type="text"
              id="hobby"
              {...register('hobby')}
              className={`block w-full pl-10 pr-3 py-2 border rounded-xl bg-white/50 focus:ring-2 focus:ring-[#f2c955]/20 focus:border-[#f2c955] text-[#171c3f] placeholder-[#171c3f]/40 ${
                errors.hobby ? 'border-[#FF6B6B]' : 'border-[#f2c955]/20'
              }`}
              placeholder="What do they love to do?"
            />
          </div>
          {errors.hobby && (
            <p className="text-sm text-[#FF6B6B] flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.hobby.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="storyCategory" className="block text-sm font-medium text-[#171c3f]">
            Story Category
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-[#1da448]">📚</span>
            </div>
            <select
              id="storyCategory"
              {...register('storyCategory')}
              className={`block w-full pl-10 pr-3 py-2 border rounded-xl bg-white/50 focus:ring-2 focus:ring-[#1da448]/20 focus:border-[#1da448] text-[#171c3f] appearance-none ${
                errors.storyCategory ? 'border-[#FF6B6B]' : 'border-[#1da448]/20'
              }`}
            >
              <option value="">Select a category</option>
              {STORY_CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          {errors.storyCategory && (
            <p className="text-sm text-[#FF6B6B] flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.storyCategory.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="storyLength" className="block text-sm font-medium text-[#171c3f]">
            Story Length
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-[#fa6565]">⏱️</span>
            </div>
            <select
              id="storyLength"
              {...register('storyLength')}
              className={`block w-full pl-10 pr-3 py-2 border rounded-xl bg-white/50 focus:ring-2 focus:ring-[#fa6565]/20 focus:border-[#fa6565] text-[#171c3f] appearance-none ${
                errors.storyLength ? 'border-[#FF6B6B]' : 'border-[#fa6565]/20'
              }`}
            >
              <option value="">Select length</option>
              {STORY_LENGTHS.map((length) => (
                <option key={length.value} value={length.value}>
                  {length.label}
                </option>
              ))}
            </select>
          </div>
          {errors.storyLength && (
            <p className="text-sm text-[#FF6B6B] flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.storyLength.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2 space-y-2">
          <label htmlFor="parentEmail" className="block text-sm font-medium text-[#171c3f]">
            Parent's Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-[#f2c955]">✉️</span>
            </div>
            <input
              type="email"
              id="parentEmail"
              {...register('parentEmail')}
              className={`block w-full pl-10 pr-3 py-2 border rounded-xl bg-white/50 focus:ring-2 focus:ring-[#f2c955]/20 focus:border-[#f2c955] text-[#171c3f] placeholder-[#171c3f]/40 ${
                errors.parentEmail ? 'border-[#FF6B6B]' : 'border-[#f2c955]/20'
              }`}
              placeholder="Where should we send the story?"
            />
          </div>
          {errors.parentEmail && (
            <p className="text-sm text-[#FF6B6B] flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.parentEmail.message}
            </p>
          )}
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-[#FF6B6B]/10 border border-[#FF6B6B]/20">
          <p className="text-sm text-[#FF6B6B] flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed relative"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            <span>Creating your story...</span>
          </div>
        ) : (
          'Create Magical Story'
        )}
      </button>
    </form>
  );
} 