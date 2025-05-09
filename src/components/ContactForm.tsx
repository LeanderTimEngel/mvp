'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { COLORS } from '@/lib/constants';

// Simple Accordion Component for FAQs
const AccordionItem = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[${COLORS.primary}]/50 rounded-md p-1 -m-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-md font-medium text-[${COLORS.dark}]`}>{title}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600 text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
        body: JSON.stringify(formData) 
      });
      
      // Check if the request was successful
      if (response.ok) {
        setSubmitted(true); // Show success screen
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        toast.success("Message sent successfully!");
      } else {
        // Handle errors from the API
        const errorData = await response.json();
        console.error("API Error:", errorData);
        toast.error(errorData.message || 'Failed to send message. Please try again.');
      }

    } catch (err) {
      // Handle network errors or other unexpected issues during fetch
      console.error("Contact form submission failed:", err);
      toast.error('Something went wrong. Please check your connection or try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
      {/* Contact Form Section */}
      <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
        {submitted ? (
          <div className="text-center py-12 space-y-4 flex flex-col items-center justify-center min-h-[400px]">
            {/* Success Icon using COLORS.success */}
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-[${COLORS.success}]/10 mb-4`}>
              <svg className={`w-8 h-8 text-[${COLORS.success}]`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className={`text-2xl font-bold text-[${COLORS.dark}]`}>Thanks for reaching out!</h3>
            <p className="text-gray-600 max-w-md">
              We&apos;ve received your message and will get back to you as soon as possible.
            </p>
            {/* Button using COLORS.primary */}
            <button
              onClick={() => setSubmitted(false)}
              className={`mt-6 inline-block bg-[${COLORS.primary}]/10 text-[${COLORS.primary}] px-6 py-2 rounded-xl hover:bg-[${COLORS.primary}]/20 transition-colors duration-300 font-medium`}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className={`text-2xl font-semibold text-[${COLORS.dark}] mb-5`}>Send us a message</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                {/* Input using COLORS.primary for focus */}
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[${COLORS.primary}]/30 focus:border-[${COLORS.primary}] transition duration-150 placeholder:text-gray-500 text-gray-900`}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                {/* Input using COLORS.primary for focus */}
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[${COLORS.primary}]/30 focus:border-[${COLORS.primary}] transition duration-150 placeholder:text-gray-500 text-gray-900`}
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              {/* Select using COLORS.primary for focus */}
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[${COLORS.primary}]/30 focus:border-[${COLORS.primary}] transition duration-150 bg-white appearance-none ${formData.subject ? 'text-gray-900' : 'text-gray-500'}`}
              >
                <option value="" className="text-gray-500">Select a subject</option>
                <option value="General Inquiry" className="text-gray-900">General Inquiry</option>
                <option value="Technical Support" className="text-gray-900">Technical Support</option>
                <option value="Billing Question" className="text-gray-900">Billing Question</option>
                <option value="Feedback" className="text-gray-900">Feedback</option>
                <option value="Partnership" className="text-gray-900">Partnership</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              {/* Textarea using COLORS.primary for focus */}
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[${COLORS.primary}]/30 focus:border-[${COLORS.primary}] transition duration-150 placeholder:text-gray-500 text-gray-900`}
                placeholder="How can we help you?"
              ></textarea>
            </div>
            {/* Submit Button using primary gradient */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] text-white px-6 py-3 rounded-xl font-semibold text-lg hover:opacity-95 active:opacity-100 transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed relative shadow-md hover:shadow-lg active:shadow-sm`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending...</span>
                </>
              ) : 'Send Message'}
            </button>
          </form>
        )}
      </div>

      {/* Contact Info & FAQ Section */}
      <div className="space-y-8">
        {/* Contact Information Card - using COLORS.primary */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 className={`text-xl font-semibold text-[${COLORS.dark}] mb-5`}>Contact Information</h3>
          <div className="space-y-5">
            {[ 
              {
                icon: <svg className={`w-5 h-5 text-[${COLORS.primary}]`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                title: "Email",
                content: <a href="mailto:hello@magical-stories.fun" className={`text-[${COLORS.primary}] hover:underline break-all`}>hello@magical-stories.fun</a>
              },
              {
                icon: <svg className={`w-5 h-5 text-[${COLORS.primary}]`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                title: "Address",
                content: <p className="text-gray-600">123 Story Lane, Imagination City</p>
              },
              {
                icon: <svg className={`w-5 h-5 text-[${COLORS.primary}]`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                title: "Response Time",
                content: <p className="text-gray-600">Usually within 24 hours</p>
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                {/* Icon background using COLORS.primary */}
                <div className={`flex-shrink-0 bg-[${COLORS.primary}]/10 p-2.5 rounded-lg mr-4 mt-0.5`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-0.5">{item.title}</h4>
                  <div className="text-sm">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 className={`text-xl font-semibold text-[${COLORS.dark}] mb-2`}>Quick Answers</h3>
            <AccordionItem title="How quickly will I receive my story?">
              Stories are typically delivered to your email within 5-10 minutes after generation.
            </AccordionItem>
            <AccordionItem title="Can I request changes to my story?">
              At this time, each story is uniquely generated. If you&apos;re not satisfied, you can create a new one with different details for a new magical adventure!
            </AccordionItem>
            <AccordionItem title="How do I cancel my subscription?">
              You can cancel your subscription at any time from your account dashboard (if applicable) or by contacting our support team via this form or email.
            </AccordionItem>
        </div>
      </div>
    </div>
  );
}