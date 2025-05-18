'use client';

import { useState } from 'react';
import { useForm, UseFormRegister, FieldError } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import { STORY_CATEGORIES, STORY_LENGTHS, COLORS } from '@/lib/constants';

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
  focusColor: string;
  placeholder: string;
  register: UseFormRegister<FormData>;
  error?: FieldError;
  options?: Array<{ value: string; label: string }>;
  attrs?: Record<string, string | number | boolean>;
  valueAsNumber?: boolean;
}

const FormField = ({ 
  id, label, type, icon, iconColor, focusColor, 
  placeholder, register, error, options = [], attrs = {}, valueAsNumber = false
}: FormFieldProps) => {
  
  const baseInputClasses = `block w-full pl-10 pr-3 py-2.5 border rounded-xl bg-white/50 text-[${COLORS.dark}] placeholder-[${COLORS.dark}]/40 transition duration-150 ease-in-out`;
  const errorBorder = error ? `border-[${COLORS.error}]` : 'border-gray-200/10';
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
      {error && <p className={`text-sm text-[${COLORS.error}] mt-1.5`}>{error.message}</p>}
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

  // Loading State UI (Optional - Can be enhanced)
  if (isSubmitting) {
    return (
      <div className="text-center py-12 px-4 space-y-4 flex flex-col items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[${COLORS.primary}]"></div>
        <h2 className={`text-xl font-semibold text-[${COLORS.dark}]`}>Crafting your masterpiece...</h2>
        <p className={`text-[${COLORS.dark}]/70 max-w-xs`}>
          Our storytellers are hard at work. This might take a moment, please wait!
        </p>
      </div>
    );
  }

  // Form field configuration using constants and types
  // We define the configuration here, but the actual register function is passed down
  const formFields: Omit<FormFieldProps, 'register' | 'error'>[] = [
    { id: 'childName', label: "Child's Name", type: 'text', icon: '👶', iconColor: `text-[${COLORS.secondary}]`, focusColor: `focus:ring-[${COLORS.primary}]/20 focus:border-[${COLORS.primary}]`, placeholder: "E.g., Lily" },
    { id: 'childAge', label: "Child's Age", type: 'number', icon: '🎂', iconColor: `text-[${COLORS.success}]`, focusColor: `focus:ring-[${COLORS.success}]/20 focus:border-[${COLORS.success}]`, placeholder: "4-10", attrs: { min: 4, max: 10 }, valueAsNumber: true },
    { id: 'favoriteCharacter', label: "Favorite Character", type: 'text', icon: '🌟', iconColor: `text-[${COLORS.primary}]`, focusColor: `focus:ring-[${COLORS.primary}]/20 focus:border-[${COLORS.primary}]`, placeholder: "E.g., Sparkle the Unicorn" },
    { id: 'hobby', label: "Favorite Hobby", type: 'text', icon: '🎨', iconColor: `text-[${COLORS.secondary}]`, focusColor: `focus:ring-[${COLORS.secondary}]/20 focus:border-[${COLORS.secondary}]`, placeholder: "E.g., Painting rainbows" },
    { id: 'storyCategory', label: "Story Category", type: 'select', icon: '📚', iconColor: `text-[${COLORS.success}]`, focusColor: `focus:ring-[${COLORS.success}]/20 focus:border-[${COLORS.success}]`, options: STORY_CATEGORIES.map(c => ({ value: c, label: c })), placeholder: "Select a category" },
    // Correcting the type for STORY_LENGTHS options
    { id: 'storyLength', label: "Story Length", type: 'select', icon: '⏱️', iconColor: `text-[${COLORS.primary}]`, focusColor: `focus:ring-[${COLORS.primary}]/20 focus:border-[${COLORS.primary}]`, options: STORY_LENGTHS.map(l => ({ value: l.value, label: l.label })), placeholder: "Select length" },
    { id: 'parentEmail', label: "Parent's Email", type: 'email', icon: '✉️', iconColor: `text-[${COLORS.secondary}]`, focusColor: `focus:ring-[${COLORS.secondary}]/20 focus:border-[${COLORS.secondary}]`, placeholder: "Where should we send the story?" },
  ];

  return (
    <div id="story-form" className="relative bg-gradient-to-br from-[#fae9f2] via-[#fdf3e1] to-[#f0f5fd] p-6 sm:p-10 rounded-3xl shadow-2xl border border-white/50 backdrop-blur-lg overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-r from-[${COLORS.primary}]/30 to-[${COLORS.secondary}]/30 rounded-full filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute -bottom-16 -right-10 w-56 h-56 bg-gradient-to-r from-[${COLORS.secondary}]/30 to-[${COLORS.primary}]/30 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[${COLORS.primary}]/10 to-[${COLORS.secondary}]/10 rounded-full filter blur-2xl opacity-40 animate-blob animation-delay-4000"></div>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <h2 className={`text-3xl sm:text-4xl font-bold text-[${COLORS.dark}] mb-3`}>Create Your Child&apos;s Magical Story</h2>
          <p className={`text-[${COLORS.dark}]/70 max-w-lg mx-auto text-sm sm:text-base`}>
            Fill in the details below, and we&apos;ll craft a unique audio story, voiced by AI, and send it straight to your email!
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {formFields.slice(0, 6).map((field) => (
              <FormField key={field.id} {...field} register={register} error={errors[field.id]} />
            ))}
          </div>
          {formFields[6] && (
            <FormField key={formFields[6].id} {...formFields[6]} register={register} error={errors[formFields[6].id]} />
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] text-white px-6 py-3.5 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-base sm:text-lg disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]`}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                Crafting Story...
              </>
            ) : (
              <>
                <span className="text-xl">✨</span> Generate My Magical Story
              </>
            )}
          </button>
        </form>

        <p className={`mt-6 text-xs text-center text-[${COLORS.dark}]/60`}>
          By creating a story, you agree to our Terms of Service. Story generation is free for a limited time.
        </p>
      </div>
    </div>
  );
} 