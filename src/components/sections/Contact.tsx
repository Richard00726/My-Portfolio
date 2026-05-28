import { useState } from 'react'
import { Mail, MapPin, Send, Github, Linkedin, Briefcase } from 'lucide-react'
import emailjs from '@emailjs/browser'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'infantrichart06@gmail.com',
    href: 'mailto:infantrichart06@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Thanjavur, Tamil Nadu, India',
    href: 'https://www.google.com/maps/place/Thanjavur,+Tamil+Nadu,+India',
  },
]

const subjects = [
  'Job Opportunity',
  'Internship Offer',
  'Freelance Project',
  'Collaboration',
  'Just saying hi',
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    emailjs.send(
      'service_i8fsolt',
      'template_842qbs8',
      { name: formData.name, email: formData.email, subject: formData.subject, message: formData.message },
      'w9YKv_at1Gr-1LHjs'
    ).then(
      () => {
        alert('Message sent successfully!')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setIsSubmitting(false)
      },
      (error) => {
        alert('Failed to send message')
        console.error(error)
        setIsSubmitting(false)
      }
    )
  }

  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Open to <span className="text-gradient">Opportunities</span>
          </h2>
          <p className="text-gray-400">
            "I'm actively looking for my first full-time role as a Full Stack Developer. Open to collaborations, opportunities, or just to say hi — I'd love to connect."
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left — Let's Connect */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-xl p-6 border border-purple-500/20 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Let's Connect</h3>
              <p className="text-gray-400 text-sm leading-relaxed text-justify">
                I'm a Full Stack Developer with internship experience at Gradtwin and Jadayau Software Technology, actively looking for full-time roles. I respond to all messages within 24 hours.
              </p>
            </div>

            {/* Currently Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
              <span className="text-green-400 text-xs font-medium">Currently available for full-time roles</span>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <a key={index} href={info.href} className="flex items-center gap-4 p-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all group">
                    <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg group-hover:scale-110 transition-transform">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">{info.label}</div>
                      <div className="font-medium text-gray-200 text-sm">{info.value}</div>
                    </div>
                  </a>
                )
              })}
              <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
                  <Briefcase size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Status</div>
                  <div className="font-medium text-gray-200 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                    Open to opportunities
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Connect with me</h4>
              <div className="flex gap-3">
                <a href="https://github.com/Richard00726" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600 rounded-lg transition-all text-sm text-gray-300 hover:text-white">
                  <Github size={16} />
                  GitHub
                </a>
                <a href="https://linkedin.com/in/infant-richart-l-207" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600 rounded-lg transition-all text-sm text-gray-300 hover:text-white">
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold mb-2">Drop Me a Message</h3>
            <p className="text-gray-400 text-sm mb-6">I'd love to hear about job opportunities or collaborations.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Please enter your name" required className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-200 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Please enter your email address" required className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-200 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-200 text-sm">
                  <option value="" disabled>What's this about?</option>
                  {subjects.map((s, i) => (
                    <option key={i} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={3} required placeholder="Kindly share your message here..." className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-200 resize-none text-sm" />
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 text-sm">
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}