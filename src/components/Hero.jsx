// src/components/Hero.jsx
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">

      <motion.p
        className="text-indigo-400 text-sm font-mono tracking-widest mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hey, I am
      </motion.p>

      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Rudraksh <span className="text-indigo-400">Pradhan</span>
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl text-gray-400 font-medium mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Full-Stack Developer in Progress {' · '} BCA @ Inspiria
      </motion.h2>

      <motion.p
        className="max-w-xl text-gray-500 text-base leading-relaxed mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        I build things for the web — from C-based systems to Python automation
        and React interfaces. Currently seeking opportunities to ship real
        products and grow fast.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-4 justify-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <button
          onClick={scrollToProjects}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors duration-200"
        >
          View My Projects
        </button>

        <a
          href="/resume.pdf"
          download
          className="border border-gray-600 hover:border-indigo-400 text-gray-300 hover:text-indigo-400 px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-colors duration-200"
        >
          <FiDownload size={16} />
          Download CV
        </a>
      </motion.div>

      <motion.div
        className="flex gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.75 }}
      >
        <SocialLink href="https://github.com/yourusername" icon={<FiGithub size={20} />} />
        <SocialLink href="https://linkedin.com/in/yourusername" icon={<FiLinkedin size={20} />} />
      </motion.div>

    </section>
  )
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-gray-500 hover:text-indigo-400 transition-colors duration-200 p-2 border border-gray-800 hover:border-indigo-500 rounded-lg"
    >
      {icon}
    </a>
  )
}