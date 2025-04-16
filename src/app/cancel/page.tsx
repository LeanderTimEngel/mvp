'use client';

import { useRouter } from 'next/navigation';

export default function CancelPage() {
  const router = useRouter();

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
            Your payment was cancelled. Don't worry, you can try again whenever you're ready!
          </p>
          <button
            onClick={() => router.push('/')}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform hover:scale-105 transition-all duration-300"
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
} 