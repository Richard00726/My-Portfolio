import { Code2, Database, Layers, Wrench } from 'lucide-react'

export default function Skills() {
  const skills = [
    { name: 'HTML5/CSS3', level: 99, icon: Code2 },
    { name: 'JavaScript', level: 95, icon: Code2 },
    { name: 'TypeScript', level: 70, icon: Code2 },
    { name: 'Java', level: 80, icon: Code2 },
    { name: 'Python', level: 80, icon: Code2 },
    { name: 'Node.js/Express.js', level: 85, icon: Code2 },
    { name: 'Git', level: 90, icon: Wrench },
    { name: 'GitHub', level: 95, icon: Wrench },
    { name: 'React/Redux', level: 70, icon: Layers },
    { name: 'MongoDB', level: 90, icon: Database },
    { name: 'PostgreSQL', level: 50, icon: Database },
    { name: 'MySQL', level: 87, icon: Database },
  
  ]

  return (
    <section id="skills" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:card-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-center text-gray-200">{skill.name}</h3>
                  <div className="w-full">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Proficiency</span>
                      <span className="text-purple-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
