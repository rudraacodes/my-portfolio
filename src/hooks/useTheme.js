// src/hooks/useTheme.js
import { useState, useEffect } from 'react'

export function useTheme() {
  // Initialize from localStorage, fall back to OS preference
  const [isDark, setIsDark] = useState(() => {
    // This function runs ONCE — avoids theme flash on reload
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])  // re-runs every time isDark changes

  return { isDark, toggle: () => setIsDark(prev => !prev) }
}