// src/components/Projects.jsx
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      {/* Section header */}
      <div className="text-center mb-14">
        <p className="text-indigo-400 text-sm font-mono tracking-widest mb-2">
          what I've built
        </p>
        <h2 className="text-4xl font-bold text-white">Projects</h2>
      </div>

      {/* Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          // Each ProjectCard receives one project object as a prop
          // index is used to stagger the animation delay
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}      // animates when scrolled into view
            viewport={{ once: true }}                // only animate once
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

    </section>
  )
}