'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CancelPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 via-pink-50 to-indigo-50">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-purple-100 text-center">
          <div className="mb-6">
            <span className="text-6xl">😢</span>
          </div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Payment Cancelled
          </h1>
          <p className="text-gray-600 mb-6">
            Your payment was cancelled. You&apos;ll be redirected to the home page in a few seconds.
          </p>
        </div>
      </div>
    </div>
  );
} 