"use client"

import { useState, useEffect } from 'react'

const commands = [
  'hey hana, what\'s the weather like?',
  'hey hana, add groceries to my todo list',
  'hey hana, show my photo albums',
  'hey hana, set a reminder for tomorrow',
  'hey hana, play some music',
]

export function TypeAnimation() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (charIndex < commands[currentIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + commands[currentIndex][charIndex])
        setCharIndex(prev => prev + 1)
      }, 50)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentText('')
        setCharIndex(0)
        setCurrentIndex(prev => (prev + 1) % commands.length)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, currentIndex]) 

  return (
    <div className="min-w-[500px] text-center">
      <span className="text-4xl font-bold dark:text-white text-black">
        {currentText}
      </span>
      <span className="animate-pulse text-4xl font-bold dark:text-white text-black">|</span>
    </div>
  )
}