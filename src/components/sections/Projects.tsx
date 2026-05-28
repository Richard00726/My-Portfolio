import { ExternalLink, Github } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Virtual Airline Nexus',
    description: 'A web-based airline management system that simulates real airline operations. Users can view available flights, manage bookings, track airline data, and navigate through a clean and responsive interface. Built with a scalable MERN stack architecture and version controlled via GitHub.',
    image: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=800&h=500&fit=crop',
    tags: ['TypeScript', 'React.js', 'Tailwind CSS', 'Vite', 'MongoDB', 'GitHub'],
    github: 'https://github.com/Richard00726/virtual-airline-nexus.git',
    demo: 'https://github.com/Richard00726/virtual-airline-nexus.git',
    badge: null,
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A personal portfolio website built using React, TypeScript and Tailwind CSS, featuring smooth animations, a fully responsive layout, and dedicated sections for projects, skills, qualifications, and contact information. Deployed live on Vercel.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Email.js', 'Git', 'GitHub'],
    github: 'https://github.com/Richard00726/My-Portfolio',
    demo: 'https://my-portfolio-ayim.vercel.app/',
    badge: null,
  },
  {
    title: 'Automobile Production Data Security and Workflow Optimization System',
    description: 'A scalable MVC-based web application to automate manufacturing workflows and improve operational efficiency, with role-based access control and secure data management.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop',
    tags: ['Java', 'JSP', 'Servlets', 'HTML5', 'CSS3', 'Bootstrap', 'MySQL'],
    github: '#',
    demo: '#',
    /* badge: 'Work in Progress', */
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-purple-950/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400">
            Projects I've built using Java and MERN Stack, focused on solving real-world problems with clean architecture.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.title} className="group flex flex-col bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:card-glow">
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {project.badge && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 text-xs font-semibold bg-pink-600/80 text-white rounded-full backdrop-blur-sm">
                      {project.badge}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1 space-y-4">
                <h3 className="text-xl font-bold text-gray-200 group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4 mt-auto">
                  <a href={project.github} className="flex items-center gap-2 text-sm text-gray-300 hover:text-purple-400 transition-colors">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm text-gray-300 hover:text-purple-400 transition-colors">
                    <ExternalLink size={18} />
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}