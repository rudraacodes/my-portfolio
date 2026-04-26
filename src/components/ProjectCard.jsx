// src/components/ProjectCard.jsx
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden flex flex-col hover:border-indigo-500 hover:shadow-xl transition-all duration-300 h-full">

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-44 object-cover"
        onError={(e) => { e.target.style.display = 'none' }}
      />

      <div className="p-5 flex flex-col gap-3 flex-1">

        <div className="flex items-start justify-between gap-2">
          <h3 className="text-white font-bold text-lg leading-tight">
            {project.title}
          </h3>
          <span className="text-xs bg-indigo-600 text-white px-2 py-1 rounded-full whitespace-nowrap shrink-0">
            {project.language}
          </span>
        </div>

        <p className="text-xs text-gray-600 font-mono">{project.type}</p>

        <p className="text-gray-400 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.highlights.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2 mt-auto border-t border-gray-800">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors pt-3"
          >
            <FiGithub size={15} />
            GitHub
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-200 transition-colors pt-3"
            >
              <FiExternalLink size={15} />
              Live Demo
            </a>
          )}
        </div>

      </div>
    </div>
  )
}