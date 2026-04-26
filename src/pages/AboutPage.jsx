// src/pages/AboutPage.jsx
export default function AboutPage() {
  return (
    <div className="w-full h-full flex items-center justify-center px-10 bg-white dark:bg-gray-900">
      <div className="max-w-lg w-full">
        <p className="text-violet-500 text-xs font-mono tracking-widest uppercase mb-2">Page 02</p>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">About Me</h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
          <p>
            {/* REPLACE: your own bio */}
            3rd year BCA student at Inspiria Knowledge Campus, Siliguri — under MAKAUT.
            I build full-stack web applications, organize technical events, and write code
            that actually ships.
          </p>
          <p>
            My academic work spans Data Structures, DBMS, and Systems Programming. Outside
            the classroom I have completed a web developer internship at TIEEDI and led
            events like BugHunter and Dataviz for Insvaganza 2026.
          </p>
          <p>
            Currently focused on landing a web developer role while building my open-source
            portfolio.
          </p>
        </div>

        {/* Quick facts */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          {[
            { label: 'Degree',    value: 'BCA (Final Year)' },
            { label: 'Institute', value: 'Inspiria, Siliguri' },
            { label: 'University', value: 'MAKAUT' },
            { label: 'Open To',   value: 'Internships / Full-Time' },
          ].map((item) => (
            <div key={item.label} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <p className="text-xs text-gray-400 dark:text-gray-500 mb-1">{item.label}</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}