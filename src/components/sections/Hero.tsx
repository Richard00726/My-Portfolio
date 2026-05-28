import { ArrowRight, ChevronDown } from 'lucide-react'
import heroBg from '../../assets/hero-bg.jpg'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Hero Background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-purple-950/30 to-black" />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              Hi, I'm{' '}
              <span className="text-gradient glow">Infant Richart</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200">
              Full Stack Developer
            </h2>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            I build secure, scalable web apps using Java, React.js, Node.js and MongoDB, focused on clean code and real-world impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects" className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2">
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="text-purple-400" size={32} />
      </div>
    </section>
  )
}