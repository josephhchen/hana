"use client"

import { useState, useEffect } from 'react'
import { ThemeToggle } from "@/components/theme-toggle"
import { TypeAnimation } from "@/components/TypeAnimation"
import { Dashboard } from "@/components/Dashboard"
import { Setup } from "@/components/Setup"
import { ArrowRight } from 'lucide-react'
import { localStore } from '@/services/localStore'

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<'intro' | 'setup' | 'dashboard'>('intro')
  const [userData, setUserData] = useState(localStore.getData())

  useEffect(() => {
    const data = localStore.getData();
    setUserData(data);
  }, []);

  const handleSetupComplete = () => {
    setCurrentScreen('dashboard');
    setUserData(localStore.getData());
  };

  if (currentScreen === 'setup') {
    return <Setup onComplete={handleSetupComplete} />;
  }

  if (currentScreen === 'dashboard') {
    return (
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="fixed top-4 right-4 z-10">
          <ThemeToggle />
        </div>
        <div className="min-h-screen pt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold dark:text-white text-black">
                Welcome to Hana
              </h1>
              <button
                onClick={() => setCurrentScreen('intro')}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              >
                Back to Home
              </button>
            </div>
            <Dashboard userData={userData} onDataChange={(newData) => {
              localStore.setData(newData);
              setUserData(newData);
            }} />
          </div>
        </div>
      </main>
    );
  }

  // Intro screen (default)
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="fixed top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      <div 
        className="flex min-h-screen flex-col items-center justify-center p-24 cursor-pointer"
        onClick={() => setCurrentScreen('setup')}
      >
        <TypeAnimation />
        <div className="mt-8 flex items-center text-gray-500 dark:text-gray-400">
          <span className="mr-2">Tap anywhere to continue</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </main>
  );
}