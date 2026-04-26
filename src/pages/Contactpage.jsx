// src/pages/ContactPage.jsx
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const links = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'rudraksh.p.0223@gmail.com',
    href: 'mailto:rudraksh.p.0223@gmail.com',
    color: 'text-indigo-500',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/rudraacodese',
    href: 'https://github.com/rudraacodes',
    color: 'text-gray-700 dark:text-gray-300',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/RudrakshPradhan',
    href: 'https://linkedin.com/in/RudrakshPradhan',
    color: 'text-blue-600',
  },
]

export default function ContactPage() {
  return (
    <div className="w-full h-full flex items-center justify-center px-10 bg-white dark:bg-gray-900">
      <div className="w-full max-w-md">
        <p className="text-teal-500 text-xs font-mono tracking-widest uppercase mb-2">Page 05</p>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
          Get In Touch
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-10 leading-relaxed">
          Open to internships, full-time roles, and project collabs. Reach out on any platform.
        </p>

        {/* Social links */}
        <div className="space-y-4 mb-10">
          {links.map(({ icon: Icon, label, value, href, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
            >
              <Icon size={20} className={`${color} shrink-0`} />
              <div>
                <p className="text-xs text-gray-400 dark:text-gray-500">{label}</p>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-indigo-500 transition-colors">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Availability badge */}
        <div className="flex items-center gap-2 text-xs text-teal-600 dark:text-teal-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          Available for opportunities — Siliguri / Remote
        </div>
      </div>
    </div>
  )
}