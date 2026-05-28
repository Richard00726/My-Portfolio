import { useState } from 'react'
import { Mail, MapPin, Send, Github, Linkedin, Briefcase, X } from 'lucide-react'
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

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [senderName, setSenderName] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    emailjs.send(
      'service_i8fsolt',
      'template_842qbs8',
      { name: formData.name, email: formData.email, subject: formData.subject, message: formData.message },
      'w9YKv_at1Gr-1LHjs'
    ).then(
      () => {
        setSenderName(formData.name)
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      },
      (error) => {
        console.error(error)
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    )
  }

  return (
    <section id="contact" className="relative pt-24 pb-10 md:py-24 bg-black">

      {/* Success Modal */}
      {status === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative bg-[#0f0a1e] border border-purple-500/30 rounded-2xl p-10 max-w-md w-full text-center animate-modal">

            {/* Close Button */}
            <button onClick={() => setStatus('idle')} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
              <X size={18} />
            </button>

            {/* Animated Check */}
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center z-10">
                <svg className="w-9 h-9" viewBox="0 0 36 36">
                  <path
                    d="M8 18 L15 25 L28 11"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    className="animate-check"
                  />
                </svg>
              </div>
            </div>

            {/* Text */}
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Thank you for taking the time to fill up the message,{' '}
              <span className="text-white font-semibold">{senderName}</span>!<br />
              Your message means a lot to me, and I will reply to you soon.
            </p>

            {/* Button */}
            <button
              onClick={() => setStatus('idle')}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Back to Portfolio
            </button>
          </div>
        </div>
      )}

      {/* Error Toast */}
      {status === 'error' && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 bg-gray-900 border border-red-500/40 rounded-xl shadow-xl">
          <span className="text-red-400 text-sm font-semibold">Failed to send. Please try again.</span>
        </div>
      )}

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

          {/* Left */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-xl p-6 border border-purple-500/20 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Let's Connect</h3>
              <p className="text-gray-400 text-sm leading-relaxed text-justify">
                I'm a Full Stack Developer with internship experience at Gradtwin and Jadayau Software Technology, actively looking for full-time roles. I respond to all messages within 24 hours.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
              <span className="text-green-400 text-xs font-medium">Currently available for full-time roles</span>
            </div>
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
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Connect with me</h4>
              <div className="flex gap-3">
                <a href="https://github.com/Richard00726" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600 rounded-lg transition-all text-sm text-gray-300 hover:text-white">
                  <Github size={16} />GitHub
                </a>
                <a href="https://linkedin.com/in/infant-richart-l-207" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600 rounded-lg transition-all text-sm text-gray-300 hover:text-white">
                  <Linkedin size={16} />LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
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
                  {subjects.map((s, i) => <option key={i} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={3} required placeholder="Kindly share your message here..." className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-200 resize-none text-sm" />
              </div>
              <button type="submit" disabled={status === 'submitting'} className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 text-sm">
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <> Send Message <Send size={16} /> </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}