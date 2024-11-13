"use client"

import { useState } from 'react'
import { 
  Album, 
  CheckSquare, 
  Settings, 
  Home,
  Music,
  Calendar,
  Bell,
  Sun,
  Moon,
  Cloud,
  MessageSquare
} from 'lucide-react'

interface DashboardItem {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const dashboardItems: DashboardItem[] = [
  {
    icon: <Album className="w-6 h-6" />,
    title: "Photo Albums",
    description: "View and manage your memories",
    color: "bg-purple-500"
  },
  {
    icon: <CheckSquare className="w-6 h-6" />,
    title: "Todo List",
    description: "Stay organized and productive",
    color: "bg-blue-500"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Calendar",
    description: "Manage your schedule",
    color: "bg-green-500"
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: "Music",
    description: "Control your music playback",
    color: "bg-pink-500"
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Weather",
    description: "Check the forecast",
    color: "bg-cyan-500"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Settings",
    description: "Customize your experience",
    color: "bg-gray-500"
  }
]

export function Dashboard() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {dashboardItems.map((item, index) => (
        <button
          key={index}
          className="group p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="flex items-center space-x-4">
            <div className={`${item.color} p-3 rounded-xl text-white`}>
              {item.icon}
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold dark:text-white text-gray-800 group-hover:text-blue-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}