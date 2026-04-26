// src/components/DarkModeToggle.jsx
import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  // On first load: read OS preference and apply immediately
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(prefersDark)
    document.documentElement.classList.toggle('dark', prefersDark)
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    // This is the line that makes Tailwind dark: variants activate
    document.documentElement.classList.toggle('dark', next)
  }

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.8, rotate: 30 }}
      whileHover={{ scale: 1.1 }}
      className="fixed top-5 left-5 z-50 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-yellow-400 transition-colors duration-300"
      aria-label="Toggle dark mode"
    >
      {isDark ? <FiSun size={17} /> : <FiMoon size={17} />}
    </motion.button>
  )
}