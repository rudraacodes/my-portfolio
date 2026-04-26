// src/components/Bookmark.jsx
import { motion } from 'framer-motion'

export default function Bookmark({ label, color, isActive, onClick, index, width = 80 }) {
  return (
    <motion.button
      onClick={onClick}
      initial={false}
      animate={{
        x: isActive ? -10 : 0,
        opacity: isActive ? 1 : 0.7,
      }}
      whileHover={{ x: -14, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      className={`
        relative flex items-center justify-end
        h-9 pr-4
        ${color}
        text-white text-xs font-bold tracking-wide
        shadow-md cursor-pointer rounded-l-lg
        select-none transition-shadow duration-200
        hover:shadow-lg
      `}
      style={{ width: `${width}px`, marginTop: index === 0 ? 0 : '-1px' }}
    >
      {/* Active indicator dot */}
      {isActive && (
        <motion.span
          layoutId="bookmark-dot"
          className="absolute left-3 w-1.5 h-1.5 rounded-full bg-white shadow"
        />
      )}
      {label}
    </motion.button>
  )
}