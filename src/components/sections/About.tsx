import { Award, Briefcase, Users } from 'lucide-react'
import profileImg from '../../assets/profile.jpg'

export default function About() {
  const stats = [
    { icon: Briefcase, label: 'Technologies worked with', value: '10+' },
    { icon: Award, label: 'Projects Completed', value: '3+' },
    { icon: Users, label: 'Development Experience', value: '+2' },
  ]

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black to-purple-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-50" />
                <img
                  src={profileImg}
                  alt="Profile"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-purple-500/50"
                />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I’m Infant Richart, a passionate Full-Stack Developer with hands-on experience in building scalable, user-centric web applications using React, TypeScript, Node.js, and modern UI frameworks. I enjoy transforming complex ideas into clean, efficient, and visually engaging digital solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a strong foundation in MERN stack development, databases like PostgreSQL and MongoDB, and growing expertise in cloud technologies (AWS, Docker), I focus on writing maintainable code and delivering real-world impact. My interests also extend into AI, Machine Learning, and Cyber Security, where I actively explore secure and intelligent system design.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I’m a continuous learner who thrives on problem-solving, collaboration, and building technology that makes a difference.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="text-center p-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all"
                  >
                    <Icon className="mx-auto mb-2 text-purple-400" size={24} />
                    <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
