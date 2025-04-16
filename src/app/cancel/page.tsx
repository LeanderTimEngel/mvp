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
          <p className="text-lg text-[#171c3f]/80">
            We&apos;re sorry to see you go! Your subscription has been cancelled and you&apos;ll continue to have access until the end of your billing period.
          </p>
        </div>
      </div>
    </div>
  );
} 