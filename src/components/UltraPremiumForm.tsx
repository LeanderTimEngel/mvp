'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { COLORS } from '@/lib/constants';

export default function UltraPremiumForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    narrator: 'both-parents', // Default value
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call the actual API endpoint
      const response = await fetch('/api/contact', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject: 'Ultra Premium Voice Request'
        }) 
      });
      
      // Check if the request was successful
      if (response.ok) {
        setSubmitted(true); // Show success screen
        setFormData({
          name: '',
          email: '',
          phone: '',
          childName: '',
          childAge: '',
          narrator: 'both-parents',
          additionalInfo: ''
        }); // Clear form
        toast.success("Request submitted successfully!");
      } else {
        // Handle errors from the API
        const errorData = await response.json();
        console.error("API Error:", errorData);
        toast.error(errorData.message || 'Failed to submit request. Please try again.');
      }

    } catch (err) {
      // Handle network errors or other unexpected issues during fetch
      console.error("Ultra Premium form submission failed:", err);
      toast.error('Something went wrong. Please check your connection or try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {submitted ? (
        <div className="text-center py-12 space-y-5 flex flex-col items-center justify-center animate-fadeIn">
          {/* Success Icon */}
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[${COLORS.success}]/20 to-[${COLORS.success}]/10 mb-6 shadow-lg shadow-[${COLORS.success}]/5 animate-pulse`}>
            <svg className={`w-8 h-8 text-[${COLORS.success}]`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className={`text-2xl font-bold text-[${COLORS.dark}] mb-4`}>Your Request is Received!</h3>
          <p className="text-gray-600 max-w-md">
            Thank you for your interest in our Ultra Premium service. Our team will contact you within 24 hours to discuss voice recording and story options.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className={`mt-8 inline-block bg-[${COLORS.primary}]/10 text-[${COLORS.primary}] px-6 py-2.5 rounded-xl hover:bg-[${COLORS.primary}]/20 transition-all duration-300 font-medium hover:scale-105 hover:shadow-md`}
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name*
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[${COLORS.primary}]/40 focus:border-[${COLORS.primary}] hover:border-gray-400 transition-all duration-200 placeholder:text-gray-400 text-gray-900 bg-white bg-opacity-90 shadow-sm hover:shadow`}
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[${COLORS.primary}]/40 focus:border-[${COLORS.primary}] hover:border-gray-400 transition-all duration-200 placeholder:text-gray-400 text-gray-900 bg-white bg-opacity-90 shadow-sm hover:shadow`}
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[${COLORS.primary}]/40 focus:border-[${COLORS.primary}] hover:border-gray-400 transition-all duration-200 placeholder:text-gray-400 text-gray-900 bg-white bg-opacity-90 shadow-sm hover:shadow`}
              placeholder="For scheduling calls (optional)"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1">
                Child&apos;s Name*
              </label>
              <input
                id="childName"
                name="childName"
                type="text"
                required
                value={formData.childName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[${COLORS.primary}]/40 focus:border-[${COLORS.primary}] hover:border-gray-400 transition-all duration-200 placeholder:text-gray-400 text-gray-900 bg-white bg-opacity-90 shadow-sm hover:shadow`}
                placeholder="Who will hear the stories"
              />
            </div>
            <div>
              <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">
                Child&apos;s Age*
              </label>
              <input
                id="childAge"
                name="childAge"
                type="text"
                required
                value={formData.childAge}
                onChange={handleChange}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[${COLORS.primary}]/40 focus:border-[${COLORS.primary}] hover:border-gray-400 transition-all duration-200 placeholder:text-gray-400 text-gray-900 bg-white bg-opacity-90 shadow-sm hover:shadow`}
                placeholder="To customize content"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="narrator" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-[${COLORS.primary}]`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </span>
              Whose Voice?*
            </label>
            <div className="relative">
              <select
                id="narrator"
                name="narrator"
                required
                value={formData.narrator}
                onChange={handleChange}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[${COLORS.primary}]/40 focus:border-[${COLORS.primary}] hover:border-gray-400 transition-all duration-200 bg-white text-gray-900 appearance-none shadow-sm hover:shadow pr-10`}
              >
                <option value="both-parents">Both Parents</option>
                <option value="mother">Mother Only</option>
                <option value="father">Father Only</option>
                <option value="other-family-member">Other Family Member</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={4}
              value={formData.additionalInfo}
              onChange={handleChange}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[${COLORS.primary}]/40 focus:border-[${COLORS.primary}] hover:border-gray-400 transition-all duration-200 placeholder:text-gray-400 text-gray-900 bg-white bg-opacity-90 shadow-sm hover:shadow resize-none`}
              placeholder="Tell us about your child&apos;s interests, favorite stories, your schedule availability for voice recording, etc."
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] text-white px-8 py-3.5 rounded-xl font-semibold text-lg hover:opacity-95 active:opacity-100 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed relative shadow-md hover:shadow-xl active:shadow-sm`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span className="mr-2">✨</span>
                <span>Submit Ultra Premium Request</span>
              </>
            )}
          </button>
          
          <p className="text-xs text-gray-500 text-center mt-4 italic">
            * Required fields. By submitting this form, you agree to be contacted about our Ultra Premium voice narration service.
          </p>
        </form>
      )}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
} 