'use client';

import { useState } from 'react';
import { useForm, UseFormRegister, FieldError } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import { COLORS, STORY_CATEGORIES, STORY_LENGTHS } from '@/lib/constants';

const formSchema = z.object({
  childName: z.string().min(1, "Child's name is required").max(50, 'Name is too long'),
  childAge: z.number().min(4, "Child must be at least 4").max(10, "Child must be 10 or younger").int('Age must be a whole number'),
  favoriteCharacter: z.string().min(1, "Favorite character is required").max(50, 'Character name is too long'),
  hobby: z.string().min(1, "Hobby is required").max(50, 'Hobby description is too long'),
  storyCategory: z.enum(STORY_CATEGORIES, { errorMap: () => ({ message: 'Please select a story category' }) }),
  storyLength: z.enum(['short', 'medium', 'long'] as const, { errorMap: () => ({ message: 'Please select a story length' }) }),
  parentEmail: z.string().email('Please enter a valid email address').max(100, 'Email is too long'),
});

type FormData = z.infer<typeof formSchema>;

interface FormFieldProps {
  id: keyof FormData;
  label: string;
  type: 'text' | 'number' | 'email' | 'select';
  icon: string;
  iconColor: string;
  borderColor: string;
  focusColor: string;
  placeholder: string;
  register: UseFormRegister<FormData>;
  error?: FieldError;
  options?: Array<{ value: string; label: string }>;
  attrs?: Record<string, string | number | boolean>;
  valueAsNumber?: boolean;
}

const FormField = ({ 
  id, label, type, icon, iconColor, borderColor, focusColor, 
  placeholder, register, error, options = [], attrs = {}, valueAsNumber = false
}: FormFieldProps) => {
  
  const baseInputClasses = `block w-full pl-10 pr-3 py-2.5 border rounded-xl bg-white/50 text-[${COLORS.dark}] placeholder-[${COLORS.dark}]/40 transition duration-150 ease-in-out`;
  const errorBorder = error ? `border-[${COLORS.error}]` : borderColor;
  const registerOptions = valueAsNumber ? { valueAsNumber: true } : {};

  return (
    <div className="space-y-1">
      <label htmlFor={id} className={`block text-sm font-medium text-[${COLORS.dark}]`}>
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
          <span className={iconColor}>{icon}</span>
        </div>
        {type === 'select' ? (
          <select
            id={id}
            {...register(id, registerOptions)}
            className={`${baseInputClasses} ${focusColor} ${errorBorder} appearance-none pr-8 cursor-pointer`}
            defaultValue="" // Important for placeholder option
            aria-invalid={error ? "true" : "false"}
          >
            <option value="" disabled>{placeholder}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            id={id}
            {...register(id, registerOptions)}
            {...attrs}
            className={`${baseInputClasses} ${focusColor} ${errorBorder}`}
            placeholder={placeholder}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${id}-error` : undefined}
          />
        )}
      </div>
      {error && <p className={`text-sm text-red-700 mt-1.5`}>{error.message}</p>}
    </div>
  );
};

export default function StoryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      childName: '', favoriteCharacter: '', hobby: '', parentEmail: '',
      childAge: undefined, // Use undefined for number inputs initially
      storyCategory: undefined,
      storyLength: undefined,
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmittedData(data); // Store submitted data for success message

    try {
      const response = await fetch('/api/generate-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const specificError = errorData.details ? 
          Object.values(errorData.details).flat().join(', ') : 
          errorData.error;
        throw new Error(specificError || 'Failed to generate story. Please check input.');
      }

      setSuccess(true);
      reset(); // Reset form fields to defaults
    } catch (err) {
      // Log the actual error for debugging, but show a generic message to the user
      console.error("Story generation failed:", err);
      toast.error("Sorry, we couldn't create your story right now. Please double-check your details and try again. If the problem persists, please contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success State UI
  if (success && submittedData) {
    return (
      <div className="text-center py-8 px-4 space-y-5 animate-fade-in flex flex-col items-center justify-center min-h-[300px]">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-[${COLORS.success}]/10 mb-3 animate-bounce`}>
          <svg className={`w-8 h-8 text-[${COLORS.success}]`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path 
              strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M5 13l4 4L19 7"
              style={{ strokeDasharray: 50, strokeDashoffset: 50, animation: 'draw 0.8s ease forwards 0.2s' }}
            />
          </svg>
        </div>
        <style jsx>{`@keyframes draw { to { stroke-dashoffset: 0; } }`}</style>
        <h2 className={`text-2xl font-bold text-[${COLORS.dark}]`}>✨ Story Sent! ✨</h2>
        <p className={`text-[${COLORS.dark}]/80 text-base max-w-sm`}>
          We&apos;ve emailed the magical tale for {submittedData.childName} to <span className="font-medium">{submittedData.parentEmail}</span>. Check your inbox (and spam folder) soon!
        </p>
        <button
          onClick={() => { setSuccess(false); setSubmittedData(null); }} // Reset state
          className={`mt-4 px-6 py-2 bg-[${COLORS.primary}]/10 text-[${COLORS.primary}] rounded-xl hover:bg-[${COLORS.primary}]/20 transition-colors duration-300 font-medium`}
        >
          Create Another Story
        </button>
      </div>
    );
  }

  // Form field configuration using constants and types
  // We define the configuration here, but the actual register function is passed down
  const formFields: Omit<FormFieldProps, 'register' | 'error'>[] = [
    { id: 'childName', label: "Child's Name", type: 'text', icon: '👶', iconColor: `text-[${COLORS.secondary}]`, borderColor: `border-[${COLORS.secondary}]/20`, focusColor: `focus:ring-[${COLORS.primary}]/20 focus:border-[${COLORS.primary}]`, placeholder: "E.g., Lily" },
    { id: 'childAge', label: "Child's Age", type: 'number', icon: '🎂', iconColor: `text-[${COLORS.success}]`, borderColor: `border-[${COLORS.success}]/20`, focusColor: `focus:ring-[${COLORS.success}]/20 focus:border-[${COLORS.success}]`, placeholder: "4-10", attrs: { min: 4, max: 10 }, valueAsNumber: true },
    { id: 'favoriteCharacter', label: "Favorite Character", type: 'text', icon: '🌟', iconColor: `text-[${COLORS.primary}]`, borderColor: `border-[${COLORS.primary}]/20`, focusColor: `focus:ring-[${COLORS.primary}]/20 focus:border-[${COLORS.primary}]`, placeholder: "E.g., Sparkle the Unicorn" },
    { id: 'hobby', label: "Favorite Hobby", type: 'text', icon: '🎨', iconColor: `text-[${COLORS.secondary}]`, borderColor: `border-[${COLORS.secondary}]/20`, focusColor: `focus:ring-[${COLORS.secondary}]/20 focus:border-[${COLORS.secondary}]`, placeholder: "E.g., Painting rainbows" },
    { id: 'storyCategory', label: "Story Category", type: 'select', icon: '📚', iconColor: `text-[${COLORS.success}]`, borderColor: `border-[${COLORS.success}]/20`, focusColor: `focus:ring-[${COLORS.success}]/20 focus:border-[${COLORS.success}]`, options: STORY_CATEGORIES.map(c => ({ value: c, label: c })), placeholder: "Select a category" },
    // Correcting the type for STORY_LENGTHS options
    { id: 'storyLength', label: "Story Length", type: 'select', icon: '⏱️', iconColor: `text-[${COLORS.primary}]`, borderColor: `border-[${COLORS.primary}]/20`, focusColor: `focus:ring-[${COLORS.primary}]/20 focus:border-[${COLORS.primary}]`, options: STORY_LENGTHS.map(l => ({ value: l.value, label: l.label })), placeholder: "Select length" },
    { id: 'parentEmail', label: "Parent's Email", type: 'email', icon: '✉️', iconColor: `text-[${COLORS.secondary}]`, borderColor: `border-[${COLORS.secondary}]/20`, focusColor: `focus:ring-[${COLORS.secondary}]/20 focus:border-[${COLORS.secondary}]`, placeholder: "Where should we send the story?" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Form Header */}
      <div className="space-y-1.5">
        <h2 className={`text-2xl font-bold text-[${COLORS.dark}]`}>Create a Magical Story</h2>
        <p className={`text-[${COLORS.dark}]/80`}>Fill in the details below to generate a unique audio story for your child.</p>
      </div>

      {/* Render Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        {formFields.map(field => (
          <div key={field.id} className={field.id === 'parentEmail' ? 'md:col-span-2' : ''}>
            <FormField
              {...field} 
              register={register} 
              error={errors[field.id]}
            />
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] text-white px-6 py-3.5 rounded-xl font-semibold text-lg hover:opacity-95 active:opacity-100 transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed relative shadow-md hover:shadow-lg active:shadow-sm`}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Creating your story...</span>
          </>
        ) : (
          'Create Magical Story'
        )}
      </button>
    </form>
  );
} 