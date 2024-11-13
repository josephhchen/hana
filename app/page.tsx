"use client"

import { useState } from 'react'
import { ThemeToggle } from "@/components/theme-toggle"
import { TypeAnimation } from "@/components/TypeAnimation"
import { Dashboard } from "@/components/Dashboard"
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false)

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="fixed top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      {!showDashboard ? (
        <div 
          className="flex min-h-screen flex-col items-center justify-center p-24 cursor-pointer"
          onClick={() => setShowDashboard(true)}
        >
          <TypeAnimation />
          <div className="mt-8 flex items-center text-gray-500 dark:text-gray-400">
            <span className="mr-2">Tap anywhere to continue</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      ) : (
        <div className="min-h-screen pt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold dark:text-white text-black">
                Welcome Home
              </h1>
              <button
                onClick={() => setShowDashboard(false)}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              >
                Back to Home
              </button>
            </div>
            <Dashboard />
          </div>
        </div>
      )}
    </main>
  )
}