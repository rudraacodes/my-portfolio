// src/pages/ProjectsPage.jsx

const projects = [
  {
    title: 'Local Services Discovery',
    lang: 'Python · Streamlit',
    type: 'Full-Stack / Web',
    desc: 'Deployed web app for discovering local businesses with multi-filter search. FastAPI + SQLite backend in progress.',
    tags: ['Streamlit', 'FastAPI', 'SQLite'],
    github: 'https://github.com/yourusername/lsd-app',
    live: 'https://rudraacodestest.streamlit.app',
    color: 'border-cyan-500',
  },
  {
    title: 'Library Management System',
    lang: 'C',
    type: 'Systems / DSA',
    desc: 'Terminal app using linked lists and file I/O for book records, issue tracking, and member management.',
    tags: ['Linked Lists', 'File I/O', 'Structs'],
    github: 'https://github.com/yourusername/library-mgmt',
    live: null,
    color: 'border-indigo-500',
  },
  {
    title: 'Student Result Processor',
    lang: 'Python',
    type: 'Automation',
    desc: 'CLI tool that reads CSV mark sheets and calculates SGPA/CGPA — built around the MAKAUT grading system.',
    tags: ['CSV Parsing', 'OOP', 'CLI'],
    github: 'https://github.com/yourusername/result-processor',
    live: null,
    color: 'border-violet-500',
  },
  // REPLACE or ADD more projects here
]

export default function ProjectsPage() {
  return (
    <div className="w-full h-full overflow-y-auto px-10 py-10 bg-white dark:bg-gray-900">
      <p className="text-cyan-600 text-xs font-mono tracking-widest uppercase mb-2">Page 04</p>
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <div
            key={p.title}
            className={`border-l-4 ${p.color} bg-gray-50 dark:bg-gray-800 rounded-xl p-5 flex flex-col gap-3`}
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">
                {p.title}
              </h3>
              <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
                {p.lang}
              </span>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{p.desc}</p>

            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((tag) => (
                <span key={tag} className="text-xs bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto pt-2 border-t border-gray-200 dark:border-gray-700">
              <a href={p.github} target="_blank" rel="noreferrer" className="text-xs text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 font-medium transition-colors">
                GitHub
              </a>
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="text-xs text-indigo-500 hover:text-indigo-400 font-medium transition-colors">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
