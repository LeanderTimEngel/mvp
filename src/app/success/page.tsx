'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export const dynamic = 'force-dynamic'; // Prevent static generation

function SuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams?.get('session_id') || null;

  useEffect(() => {
    // Redirect if sessionId is missing, potentially indicating direct access without payment
    if (!sessionId) {
      console.warn('No session ID found, redirecting to home.');
      router.replace('/'); // Use replace to avoid adding the success page to history without a session
    }
    // Optional: You could add logic here to verify the session ID with your backend
    // if (sessionId) { verifySession(sessionId); }
  }, [sessionId, router]);

  // Don't render the main content if we're about to redirect
  if (!sessionId) {
    return null; 
  }

  return (
    <>
      <div className="mb-6">
        <span className="text-6xl">🎉</span>
      </div>
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
        Payment Successful!
      </h1>
      <p className="text-gray-600 mb-6">
        Thank you for your purchase! Your personalized story is being created and will be sent to your email shortly.
      </p>
      <button
        onClick={() => router.push('/')}
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform hover:scale-105 transition-all duration-300"
      >
        Return Home
      </button>
    </>
  );
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 via-pink-50 to-indigo-50">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-purple-100 text-center">
          <Suspense fallback={<div className="text-center text-gray-600">Loading confirmation...</div>}>
            <SuccessContent />
          </Suspense>
        </div>
      </div>
    </div>
  );
} 