'use client';

import { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  src: string;
  title: string;
  description?: string;
  className?: string;
}

export default function AudioPlayer({ src, title, description, className = '' }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        if (progressInterval.current) {
          clearInterval(progressInterval.current);
        }
      } else {
        audioRef.current.play();
        progressInterval.current = setInterval(() => {
          if (audioRef.current) {
            const percentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(percentage);
          }
        }, 100);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
  };

  return (
    <div className={`bg-white rounded-2xl p-8 shadow-lg ${className}`}>
      <audio
        ref={audioRef}
        src={src}
        onEnded={handleEnded}
        className="hidden"
      />
      
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-[#171c3f] mb-2">{title}</h3>
        {description && (
          <p className="text-[#171c3f]/80">{description}</p>
        )}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={handlePlayPause}
          className="w-12 h-12 bg-[#fa6565] rounded-full flex items-center justify-center hover:bg-[#fa6565]/90 transition-colors"
        >
          {isPlaying ? (
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>

        <div className="flex-1">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#fa6565] transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 