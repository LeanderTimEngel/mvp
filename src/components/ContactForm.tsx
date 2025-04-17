'use client';

import { useState } from 'react';
import { COLORS } from '@/lib/constants';

// Simple Accordion Component for FAQs (moved here as it uses useState)
const AccordionItem = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-md font-medium text-gray-800">{title}</span>
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
  const [error, setError] = useState('');
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setIsSubmitting(true); // Start submitting visual state
    setError('');

    // **Placeholder:** Replace with your actual form submission logic (e.g., API call)
    try {
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus("success");
    } catch (error) {
      // You might want to log the error to an error reporting service
      // console.error(error);
      setError('Something went wrong. Please try again later.');
      setStatus("error");
    } finally {
      setIsSubmitting(false); // End submitting visual state regardless of outcome
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
      {/* Contact Form Section */}
      <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
        {submitted ? (
          <div className="text-center py-12 space-y-4 flex flex-col items-center justify-center min-h-[400px]">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-[${COLORS.success}]/10 mb-4 animate-pulse`}>
              <svg className={`w-8 h-8 text-[${COLORS.success}]`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className={`text-2xl font-bold text-[${COLORS.dark}]`}>Thanks for reaching out!</h3>
            <p className="text-gray-600 max-w-md">
              We&apos;ve received your message and will get back to you as soon as possible.
            </p>
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
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[${COLORS.primary}]/20 focus:border-[${COLORS.primary}] transition duration-150`}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[${COLORS.primary}]/20 focus:border-[${COLORS.primary}] transition duration-150`}
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[${COLORS.primary}]/20 focus:border-[${COLORS.primary}] transition duration-150 bg-white appearance-none`}
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Billing Question">Billing Question</option>
                <option value="Feedback">Feedback</option>
                <option value="Partnership">Partnership</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[${COLORS.primary}]/20 focus:border-[${COLORS.primary}] transition duration-150`}
                placeholder="How can we help you?"
              ></textarea>
            </div>
            {error && (
              <div className={`p-3 bg-[${COLORS.error}]/10 border border-[${COLORS.error}]/20 text-[${COLORS.error}] rounded-lg text-sm`}>
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] text-white py-3 px-6 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold text-lg disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  <span>Sending...</span>
                </div>
              ) : 'Send Message'}
            </button>
          </form>
        )}
      </div>

      {/* Contact Info & FAQ Section */}
      <div className="space-y-8">
        {/* Contact Information Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 className={`text-xl font-semibold text-[${COLORS.dark}] mb-5`}>Contact Information</h3>
          <div className="space-y-5">
            {[ // Array for contact info items
              {
                icon: <svg className={`w-5 h-5 text-[${COLORS.primary}]`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                title: "Email",
                content: <a href="mailto:hello@magicalstories.com" className={`text-[${COLORS.primary}] hover:underline break-all`}>hello@magicalstories.com</a>
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