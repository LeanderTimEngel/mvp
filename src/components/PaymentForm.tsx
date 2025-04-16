'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import type { Stripe } from '@stripe/stripe-js';

interface StoryFormData {
  childName: string;
  childAge: number;
  favoriteCharacter: string;
  hobby: string;
  storyCategory: string;
  storyLength: 'short' | 'medium' | 'long';
  parentEmail: string;
}

let stripePromise: Promise<Stripe | null> | null = null;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

interface PaymentFormProps {
  formData: StoryFormData;
  onCancel: () => void;
}

export default function PaymentForm({ formData, onCancel }: PaymentFormProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    try {
      setIsProcessing(true);
      
      // Create a payment session
      const response = await fetch('/api/create-payment-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          amount: 499, // $4.99 in cents
          currency: 'usd',
        }),
      });

      const { sessionId } = await response.json();
      
      // Redirect to Stripe Checkout
      const stripe = await getStripe();
      if (!stripe) {
        throw new Error('Failed to load Stripe');
      }
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          Complete Your Purchase
        </h2>
        <p className="mt-2 text-gray-600">
          Your personalized story is ready to be created!
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-purple-100">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700">Story Price</span>
          <span className="text-xl font-bold text-purple-600">$4.99</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700">Story Type</span>
          <span className="text-gray-900">{formData.storyCategory}</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-700">Length</span>
          <span className="text-gray-900">
            {formData.storyLength === 'short' ? 'Short (2-3 min)' :
             formData.storyLength === 'medium' ? 'Medium (4-5 min)' : 'Long (6-7 min)'}
          </span>
        </div>
        <div className="space-y-4">
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300"
          >
            {isProcessing ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              <span className="flex items-center">
                <span className="mr-2">💳</span>
                Pay $4.99
              </span>
            )}
          </button>
          <button
            onClick={onCancel}
            className="w-full py-3 px-4 border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
} 