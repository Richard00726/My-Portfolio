import { url } from 'inspector/promises'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'virtual-airline-nexus',
      description:
        'Virtual Airline Nexus is a web-based airline management system designed to simulate the operations of an airline. The project allows users to view flights, manage bookings, and track airline data in a user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=800&h=500&fit=crop',
      tags: ['TypeScript', 'React.js', 'Tailwind CSS', 'Vite', 'MongoDB', 'GitHub'],
      github: 'https://github.com/Richard00726/virtual-airline-nexus.git',
      demo: 'https://github.com/Richard00726/virtual-airline-nexus.git',
    },
    {
      title: '3D Portfolio Website - Interactive & Animated',
      description:
        'A luxury engaging portfolio website featuring interactive 3D graphics with smooth animations powered by React Three Fiber, Framer Motion and Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&h=500&fit=crop',
      tags: ['React', 'GSAP', 'Tailwind CSS'],
      github: '#',
      demo: '#',
    },
    {
      title: '3D Website Landing Page',
      description:
        'A modern 3D landing page built with sleek design, HTML5, CSS3, and advanced JavaScript. Includes a contact form, elegant layout for an engaging and responsive user experience.',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop',
      tags: ['HTML', 'CSS', 'React'],
      github: '#',
      demo: '#',
    },

  ]

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-purple-950/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400">
            A curated collection of full stack projects demonstrating my expertise in building
            modern, scalable web applications — from intuitive frontends to robust backend
            systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:card-glow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-200 group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-purple-400 transition-colors"
                  >
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
