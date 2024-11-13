"use client"

import { useTheme } from 'next-themes'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className='rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800'
        >
            {theme === "dark" ? (
                <FaSun className='h-5 w-5' />
            ) : (
                <FaMoon className='h-5 w-5' />
            )}
        </button>
    )
}