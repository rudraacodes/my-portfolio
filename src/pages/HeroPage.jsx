// src/pages/HeroPage.jsx
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'

export default function HeroPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-8 bg-white dark:bg-gray-900">
      <motion.p
        className="text-indigo-500 text-xs font-mono tracking-widest mb-3 uppercase"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Hey, I am
      </motion.p>

      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-3 leading-tight"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Rudraksh <span className="text-indigo-500">Pradhan</span>
      </motion.h1>

      <motion.p
        className="text-gray-500 dark:text-gray-400 text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Full-Stack Developer in Progress {' · '} BCA @ Inspiria
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-3 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
        >
          <FiDownload size={15} /> Download CV
        </a>
        <a
          href="https://github.com/rudraacodes"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-400 hover:text-indigo-500 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
        >
          <FiGithub size={15} /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/RudrakshPradhan"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-400 hover:text-indigo-500 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
        >
          <FiLinkedin size={15} /> LinkedIn
        </a>
      </motion.div>
    </div>
  )
}