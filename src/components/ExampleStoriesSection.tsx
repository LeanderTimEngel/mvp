'use client';

import { useState, useRef, useEffect } from 'react';

// Example stories data with titles, descriptions, and audio sources
const exampleStories = [
  {
    id: 1,
    title: 'Tom and the Cosmic Adventure',
    description: 'Join Tom as he embarks on a magical journey through the stars, meeting friendly aliens and discovering the wonders of the universe.',
    audioSrc: '/audio/Tom-adventure-story.mp3',
  },
  {
    id: 2,
    title: 'Jonas and the Brave Little Dragon',
    description: 'Follow Jonas and Ember, a tiny dragon who learns that true courage comes from the heart as they protect forest friends from danger.',
    audioSrc: '/audio/Jonas-adventure-story.mp3',
  },
  {
    id: 3,
    title: 'Lilly Princesses',
    description: 'Join Lilly as she discovers a magical kingdom of princesses and helps a lost royal find her way back to the enchanted castle.',
    audioSrc: '/audio/Lily-princesses-story.mp3',
  }
];

export default function ExampleStoriesSection() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [progress, setProgress] = useState<{[key: number]: number}>({});
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});
  const progressIntervals = useRef<{[key: number]: NodeJS.Timeout | null}>({});
  
  // Reset playing state when audio ends
  const handleAudioEnd = () => {
    setPlayingId(null);
    if (playingId !== null) {
      clearInterval(progressIntervals.current[playingId] || undefined);
      setProgress(prev => ({...prev, [playingId]: 0}));
    }
  };
  
  // Stop any playing audio when component unmounts
  useEffect(() => {
    return () => {
      Object.values(audioRefs.current).forEach(audio => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
      
      // Clear all intervals
      Object.values(progressIntervals.current).forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);
  
  // Update progress bar
  const updateProgress = (storyId: number) => {
    const audio = audioRefs.current[storyId];
    if (audio) {
      const percentage = (audio.currentTime / audio.duration) * 100;
      setProgress(prev => ({...prev, [storyId]: percentage}));
    }
  };
  
  // Handle play/pause toggling
  const togglePlay = (storyId: number) => {
    const audio = audioRefs.current[storyId];
    
    // Pause currently playing audio if any
    if (playingId !== null && playingId !== storyId) {
      const currentlyPlaying = audioRefs.current[playingId];
      if (currentlyPlaying) {
        currentlyPlaying.pause();
      }
      if (progressIntervals.current[playingId]) {
        clearInterval(progressIntervals.current[playingId] || undefined);
      }
    }
    
    // Toggle play/pause for selected audio
    if (audio) {
      if (playingId === storyId) {
        audio.pause();
        if (progressIntervals.current[storyId]) {
          clearInterval(progressIntervals.current[storyId] || undefined);
        }
        setPlayingId(null);
      } else {
        audio.play().catch(error => {
          console.error('Audio playback failed:', error);
          alert('Audio playback failed. Please try again later.');
        });
        setPlayingId(storyId);
        
        // Set up progress interval
        progressIntervals.current[storyId] = setInterval(() => updateProgress(storyId), 100);
      }
    }
  };

  // Format time in mm:ss
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Listen to Example Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the magic of our AI-generated stories. Press play to listen to a sample of what your child could enjoy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exampleStories.map(story => {
            const isPlaying = playingId === story.id;
            const currentProgress = progress[story.id] || 0;
            const audio = audioRefs.current[story.id];
            
            return (
              <div key={story.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-indigo-100 transition-all duration-300 hover:shadow-xl hover:border-indigo-200 flex flex-col h-full">
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{story.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{story.description}</p>
                  
                  <div className="mt-auto w-full">
                    {/* Audio controls */}
                    <div className="flex flex-col space-y-3">
                      {/* Progress bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-100 ease-in-out ${isPlaying ? 'bg-indigo-600' : 'bg-indigo-400'}`}
                          style={{ width: `${currentProgress}%` }}
                        ></div>
                      </div>
                      
                      {/* Controls and time */}
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => togglePlay(story.id)}
                          className={`flex items-center justify-center w-10 h-10 rounded-full text-white shadow-sm transition-all ${isPlaying ? 'bg-indigo-700 scale-105' : 'bg-indigo-500 hover:bg-indigo-600'}`}
                          aria-label={isPlaying ? "Pause story" : "Play story"}
                        >
                          {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="6" y="4" width="4" height="16"></rect>
                              <rect x="14" y="4" width="4" height="16"></rect>
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                          )}
                        </button>
                        
                        <div className="text-xs text-gray-500 font-medium tabular-nums">
                          {audio ? formatTime(audio.currentTime) : '0:00'} / {audio && !isNaN(audio.duration) ? formatTime(audio.duration) : '0:00'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <audio 
                  ref={(el) => { audioRefs.current[story.id] = el; }}
                  src={story.audioSrc}
                  onEnded={handleAudioEnd}
                  onLoadedMetadata={() => setProgress(prev => ({...prev, [story.id]: 0}))}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 