// src/components/Navigation.jsx
import { motion } from 'framer-motion'
import { pages } from '../data/pages'

// Desktop: cascading width per bookmark
// Each bookmark is 8px wider than the previous
const BASE_WIDTH   = 88   // px — narrowest bookmark
const CASCADE_STEP = 10   // px — added per index

export default function Navigation({ currentPage, onNavigate }) {
  return (
    <>
      {/* ─── DESKTOP: top-right vertical stack ─────────────────── */}
      <nav className="
        hidden md:flex
        fixed right-0 top-1/2 -translate-y-1/2
        flex-col items-end
        z-40 gap-[3px]
      ">
        {pages.map((page, index) => {
          const isActive = currentPage === page.id
          // Cascading width: first tab is narrowest, last is widest
          const width = BASE_WIDTH + index * CASCADE_STEP

          return (
            <button
              key={page.id}
              onClick={() => onNavigate(page.id)}
              style={{ width: `${width}px` }}
              className={`
                relative h-9
                flex items-center justify-end pr-3
                text-xs font-semibold tracking-wide
                rounded-l-md
                transition-all duration-200
                select-none
                ${isActive
                  ? `${page.color} text-white shadow-lg`
                  : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border-l-2 border-t border-b border-gray-200 dark:border-gray-700'
                }
              `}
            >
              {/* Active left-edge accent bar */}
              {isActive && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-white/40 rounded-l-md" />
              )}

              {/* Active dot indicator */}
              {isActive && (
                <span className="mr-2 w-1.5 h-1.5 rounded-full bg-white inline-block" />
              )}

              {page.label}
            </button>
          )
        })}
      </nav>

      {/* ─── MOBILE: bottom horizontal pill bar ─────────────────── */}
      <nav className="
        flex md:hidden
        fixed bottom-4 left-1/2 -translate-x-1/2
        flex-row items-center
        z-40 gap-1
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        rounded-full px-2 py-1.5
        shadow-xl
      ">
        {pages.map((page) => {
          const isActive = currentPage === page.id

          return (
            <button
              key={page.id}
              onClick={() => onNavigate(page.id)}
              className={`
                relative px-3 py-1 rounded-full
                text-xs font-semibold
                transition-all duration-200
                select-none
                ${isActive
                  ? `${page.color} text-white`
                  : 'text-gray-500 dark:text-gray-400'
                }
              `}
            >
              {page.label}

              {/* Active underline pill — slides between tabs */}
              {isActive && (
                <motion.span
                  layoutId="mobile-active-pill"
                  className={`
                    absolute inset-0 rounded-full -z-10
                    ${page.color}
                  `}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          )
        })}
      </nav>
    </>
  )
}