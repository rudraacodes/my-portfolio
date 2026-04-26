// src/data/projects.js
// This is NOT a component — it's pure JavaScript data.
// Think of it like a struct array in C, or an ArrayList<Project> in Java.

export const projects = [
  {
    id: 1,
    title: 'Local Services Discovery',
    language: 'Python · Streamlit',
    type: 'Full-Stack / Web',
    description:
      'A deployed web app for discovering local businesses with multi-filter search (name, category, location, rating). FastAPI + SQLite backend in progress.',
    highlights: ['Streamlit', 'Multi-filter UI', 'FastAPI (WIP)', 'SQLite'],
    github: 'https://github.com/yourusername/lsd-app',   // ✏️ REPLACE
    live: 'https://rudraacodestest.streamlit.app',        // ✏️ REPLACE
    image: '/src/assets/projects/lsd-app.png',
  },
  {
    id: 2,
    title: 'Library Management System',
    language: 'C',
    type: 'Systems / DSA',
    description:
      'Terminal-based system using linked lists and file I/O to manage book records, issue tracking, and member databases. Built as part of MAKAUT DSA coursework.',
    highlights: ['Linked Lists', 'File Handling', 'Struct Modeling'],
    github: 'https://github.com/yourusername/library-mgmt',  // ✏️ REPLACE
    live: null,  // no live URL for terminal projects — that's fine
    image: '/src/assets/projects/library-mgmt.png',
  },
  // ✏️ ADD MORE: copy one object above, change the values, done.
]