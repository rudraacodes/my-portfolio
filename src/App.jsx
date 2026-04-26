// src/App.jsx
import { useState, useRef, useEffect } from 'react'
import Book from './components/Book'
import Bookmark from './components/Bookmark'
import DarkModeToggle from './components/DarkModeToggle'
import { pages } from './data/pages'
import HeroPage from './pages/HeroPage'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

const PAGE_COMPONENTS = {
  hero: HeroPage,
  about: AboutPage,
  skills: SkillsPage,
  projects: ProjectsPage,
  contact: ContactPage,
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('hero')
  const [direction, setDirection] = useState(1)
  const pageIndexRef = useRef(0)

  // Touch swipe tracking
  const touchStartX = useRef(null)

  const navigateTo = (pageId) => {
    if (pageId === currentPage) return
    const newIndex = pages.findIndex((p) => p.id === pageId)
    setDirection(newIndex > pageIndexRef.current ? 1 : -1)
    pageIndexRef.current = newIndex
    setCurrentPage(pageId)
  }

  const navigateByDelta = (delta) => {
    const newIndex = Math.max(0, Math.min(pages.length - 1, pageIndexRef.current + delta))
    if (newIndex === pageIndexRef.current) return
    navigateTo(pages[newIndex].id)
  }

  // Swipe gesture handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      navigateByDelta(diff > 0 ? 1 : -1)
    }
    touchStartX.current = null
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') navigateByDelta(1)
      if (e.key === 'ArrowLeft') navigateByDelta(-1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [currentPage])

  const CurrentPageComponent = PAGE_COMPONENTS[currentPage]

  return (
    <div
      className="w-screen h-screen overflow-hidden bg-gray-200 dark:bg-gray-950 transition-colors duration-500 flex items-center justify-center p-4 md:p-10"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Dark mode toggle — top left */}
      <DarkModeToggle />

      {/* DESKTOP: bookmark rail top-right */}
      <div className="hidden md:flex fixed top-6 right-0 flex-col items-end z-40 gap-1">
        {pages.map((page, index) => (
          <Bookmark
            key={page.id}
            label={page.label}
            color={page.color}
            isActive={currentPage === page.id}
            onClick={() => navigateTo(page.id)}
            index={index}
            // Cascading width: each bookmark wider than the last
            width={72 + index * 10}
          />
        ))}
      </div>

      {/* MOBILE: fixed bottom nav bar */}
      <div className="flex md:hidden fixed bottom-0 left-0 right-0 z-50 h-14 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-xl">
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => navigateTo(page.id)}
            className={`
              flex-1 flex flex-col items-center justify-center gap-0.5
              text-xs font-semibold transition-colors duration-200
              ${currentPage === page.id
                ? 'text-indigo-500 border-t-2 border-indigo-500'
                : 'text-gray-400 dark:text-gray-500'}
            `}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${currentPage === page.id ? page.color : 'bg-transparent'}`} />
            {page.label}
          </button>
        ))}
      </div>

      {/* Book — shrink bottom on mobile to make room for nav bar */}
      <div className="w-full h-full pb-14 md:pb-0">
        <Book currentPage={currentPage} direction={direction}>
          <CurrentPageComponent />
        </Book>
      </div>
    </div>
  )
}