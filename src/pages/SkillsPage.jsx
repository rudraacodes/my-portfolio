// src/pages/SkillsPage.jsx

const skillData = [
  {
    category: 'Languages',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50 dark:bg-indigo-900/20',
    skills: ['JavaScript (ES6+)', 'Python', 'Java', 'C', 'HTML5', 'CSS3'],
  },
  {
    category: 'Tools & Frameworks',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    skills: ['React', 'Vite', 'Tailwind CSS', 'Streamlit', 'Git', 'VS Code'],
  },
  {
    category: 'Academic / CS Core',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50 dark:bg-cyan-900/20',
    skills: ['Data Structures', 'DBMS', 'OOP', 'JSP / JDBC', 'SQL', 'OS Fundamentals'],
  },
]

export default function SkillsPage() {
  return (
    <div className="w-full h-full flex items-center justify-center px-10 bg-white dark:bg-gray-900">
      <div className="w-full max-w-2xl">
        <p className="text-blue-500 text-xs font-mono tracking-widest uppercase mb-2">Page 03</p>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Skills</h2>

        <div className="space-y-6">
          {skillData.map((group) => (
            <div key={group.category}>
              <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${group.color}`}>
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`${group.bg} text-gray-700 dark:text-gray-200 text-xs font-medium px-3 py-1.5 rounded-lg`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
