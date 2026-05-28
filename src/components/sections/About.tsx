import { Award, Briefcase, Users } from 'lucide-react'
import profileImg from '../../assets/img-2.jpeg'

export default function About() {
  const stats = [
    { icon: Briefcase, label: 'Internships Completed', value: '3' },
    { icon: Award, label: 'Projects Built', value: '3+' },
    { icon: Users, label: 'Graduating Year', value: '2026' },
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
                  alt="Infant Richart"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-[50%_0%] border-4 border-purple-500/50"
                />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-justify">
              I'm Infant Richart, an entry-level Full Stack Developer skilled in Java and MERN Stack development. I build secure, scalable web applications using React.js, Node.js, Express.js, and MongoDB, with a strong foundation in MVC architecture and role-based access control.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify">
              I've completed internships at Gradtwin (Java Full Stack) and Jadayau Software Technology, gaining real-world experience in end-to-end application development, debugging, and software workflows.
              I've completed my B.Tech in Information Technology at Anjalai Ammal Mahalingam Engineering College with a CGPA of 7.85, and currently pursuing intensive MERN Stack training at CodeTech Technology Institute, Chennai.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify">
              I'm a continuous learner who enjoys solving real-world problems through clean, maintainable code. My interests also extend into AI, Machine Learning, and Cyber Security.
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