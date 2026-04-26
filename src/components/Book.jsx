// src/components/Book.jsx
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
  enter: (direction) => ({
    rotateY: direction > 0 ? -90 : 90,
    opacity: 0,
    transformOrigin: direction > 0 ? 'left center' : 'right center',
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    transformOrigin: 'center center',
    transition: {
      rotateY: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
      opacity:  { duration: 0.15 },
    },
  },
  exit: (direction) => ({
    rotateY: direction > 0 ? 90 : -90,
    opacity: 0,
    transformOrigin: direction > 0 ? 'right center' : 'left center',
    transition: {
      rotateY: { duration: 0.45, ease: [0.4, 0, 1, 1] },
      opacity:  { duration: 0.1, delay: 0.25 },
    },
  }),
}

export default function Book({ currentPage, direction, children }) {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: '1200px' }}
    >
      {/* Ambient shadow beneath the book */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-black/20 dark:bg-black/50 blur-2xl rounded-full" />

      {/* Book body */}
      <div
        className="relative w-full max-w-4xl h-full bg-white dark:bg-gray-900 shadow-2xl rounded-2xl overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Spine line — decorative left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 z-10" />

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full overflow-y-auto"
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}