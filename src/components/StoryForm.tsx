'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { COLORS, STORY_CATEGORIES, STORY_LENGTHS } from '@/lib/constants';

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

// Reusable error message component
const ErrorMessage = ({ message }: { message: string }) => (
  <p className={`text-sm text-[${COLORS.error}] flex items-center`}>
    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    {message}
  </p>
);

export default function StoryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [childName, setChildName] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);
    setChildName(data.childName);

    try {
      const response = await fetch('/api/generate-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate story');
      }

      const result = await response.json();
      setSuccess(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-8 space-y-6 animate-fade-in">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-[${COLORS.success}]/20 mb-4 animate-bounce`}>
          <svg className={`w-8 h-8 text-[${COLORS.success}]`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7"
              className="animate-draw"
              style={{
                strokeDasharray: 50,
                strokeDashoffset: 0,
                animation: 'draw 1s ease forwards',
              }}
            />
          </svg>
        </div>
        <style jsx>{`
          @keyframes draw {
            0% { stroke-dashoffset: 50; }
            100% { stroke-dashoffset: 0; }
          }
        `}</style>
        <h2 className={`text-2xl font-bold text-[${COLORS.dark}]`}>✨ Your Magical Story is on its Way! ✨</h2>
        <p className={`text-[${COLORS.dark}]/80 text-lg`}>
          We've sent {childName}'s personalized story to your email. Check your inbox in the next few minutes!
        </p>
        <div className="flex flex-col space-y-4 mt-6">
          <p className={`text-[${COLORS.dark}]/60`}>Didn't receive an email? Check your spam folder or try again.</p>
          <button
            onClick={() => setSuccess(false)}
            className={`mx-auto px-6 py-2 bg-[${COLORS.primary}]/10 text-[${COLORS.primary}] rounded-xl hover:bg-[${COLORS.primary}]/20 transition-colors duration-300`}
          >
            Create Another Story
          </button>
        </div>
      </div>
    );
  }

  // Form field configuration to reduce repetition
  const formFields = [
    {
      id: 'childName',
      label: "Child's Name",
      type: 'text',
      icon: '👶',
      iconColor: `text-[${COLORS.secondary}]`,
      borderColor: `border-[${COLORS.secondary}]/20`,
      focusColor: `focus:ring-[${COLORS.primary}]/20 focus:border-[${COLORS.primary}]`,
      placeholder: "Enter your child's name",
      register: register('childName'),
      error: errors.childName,
      colSpan: 1
    },
    {
      id: 'childAge',
      label: "Child's Age",
      type: 'number',
      icon: '🎂',
      iconColor: `text-[${COLORS.success}]`,
      borderColor: `border-[${COLORS.success}]/20`,
      focusColor: `focus:ring-[${COLORS.success}]/20 focus:border-[${COLORS.success}]`,
      placeholder: "Enter age (4-10)",
      register: register('childAge', { valueAsNumber: true }),
      error: errors.childAge,
      attrs: { min: 4, max: 10 },
      colSpan: 1
    },
    {
      id: 'favoriteCharacter',
      label: "Favorite Character",
      type: 'text',
      icon: '🌟',
      iconColor: `text-[${COLORS.primary}]`,
      borderColor: `border-[${COLORS.primary}]/20`,
      focusColor: `focus:ring-[${COLORS.primary}]/20 focus:border-[${COLORS.primary}]`,
      placeholder: "Who's their favorite character?",
      register: register('favoriteCharacter'),
      error: errors.favoriteCharacter,
      colSpan: 1
    },
    {
      id: 'hobby',
      label: "Favorite Hobby",
      type: 'text',
      icon: '🎨',
      iconColor: `text-[${COLORS.secondary}]`,
      borderColor: `border-[${COLORS.secondary}]/20`,
      focusColor: `focus:ring-[${COLORS.secondary}]/20 focus:border-[${COLORS.secondary}]`,
      placeholder: "What do they love to do?",
      register: register('hobby'),
      error: errors.hobby,
      colSpan: 1
    },
    {
      id: 'parentEmail',
      label: "Parent's Email",
      type: 'email',
      icon: '✉️',
      iconColor: `text-[${COLORS.secondary}]`,
      borderColor: `border-[${COLORS.secondary}]/20`,
      focusColor: `focus:ring-[${COLORS.secondary}]/20 focus:border-[${COLORS.secondary}]`,
      placeholder: "Where should we send the story?",
      register: register('parentEmail'),
      error: errors.parentEmail,
      colSpan: 2
    }
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <h2 className={`text-2xl font-bold text-[${COLORS.dark}]`}>Create a Magical Story</h2>
        <p className={`text-[${COLORS.dark}]/80`}>Fill in the details to create a personalized story for your child.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Text and number input fields */}
        {formFields.map(field => (
          field.type !== 'select' && (
            <div key={field.id} className={`space-y-2 ${field.colSpan === 2 ? 'md:col-span-2' : ''}`}>
              <label htmlFor={field.id} className={`block text-sm font-medium text-[${COLORS.dark}]`}>
                {field.label}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className={field.iconColor}>{field.icon}</span>
                </div>
                <input
                  type={field.type}
                  id={field.id}
                  {...field.register}
                  {...(field.attrs || {})}
                  className={`block w-full pl-10 pr-3 py-2 border rounded-xl bg-white/50 ${field.focusColor} text-[${COLORS.dark}] placeholder-[${COLORS.dark}]/40 ${
                    field.error ? `border-[${COLORS.error}]` : field.borderColor
                  }`}
                  placeholder={field.placeholder}
                />
              </div>
              {field.error && <ErrorMessage message={field.error.message || ''} />}
            </div>
          )
        ))}

        {/* Story Category */}
        <div className="space-y-2">
          <label htmlFor="storyCategory" className={`block text-sm font-medium text-[${COLORS.dark}]`}>
            Story Category
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className={`text-[${COLORS.success}]`}>📚</span>
            </div>
            <select
              id="storyCategory"
              {...register('storyCategory')}
              className={`block w-full pl-10 pr-3 py-2 border rounded-xl bg-white/50 focus:ring-2 focus:ring-[${COLORS.success}]/20 focus:border-[${COLORS.success}] text-[${COLORS.dark}] appearance-none ${
                errors.storyCategory ? `border-[${COLORS.error}]` : `border-[${COLORS.success}]/20`
              }`}
            >
              <option value="">Select a category</option>
              {STORY_CATEGORIES.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          {errors.storyCategory && <ErrorMessage message={errors.storyCategory.message || ''} />}
        </div>

        {/* Story Length */}
        <div className="space-y-2">
          <label htmlFor="storyLength" className={`block text-sm font-medium text-[${COLORS.dark}]`}>
            Story Length
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className={`text-[${COLORS.primary}]`}>⏱️</span>
            </div>
            <select
              id="storyLength"
              {...register('storyLength')}
              className={`block w-full pl-10 pr-3 py-2 border rounded-xl bg-white/50 focus:ring-2 focus:ring-[${COLORS.primary}]/20 focus:border-[${COLORS.primary}] text-[${COLORS.dark}] appearance-none ${
                errors.storyLength ? `border-[${COLORS.error}]` : `border-[${COLORS.primary}]/20`
              }`}
            >
              <option value="">Select length</option>
              {STORY_LENGTHS.map((length) => (
                <option key={length.value} value={length.value}>{length.label}</option>
              ))}
            </select>
          </div>
          {errors.storyLength && <ErrorMessage message={errors.storyLength.message || ''} />}
        </div>
      </div>

      {error && (
        <div className={`p-4 rounded-xl bg-[${COLORS.error}]/10 border border-[${COLORS.error}]/20`}>
          <ErrorMessage message={error} />
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] text-white px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed relative`}
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