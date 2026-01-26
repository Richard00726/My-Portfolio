import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { supabase, ContactMessage } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'
import emailjs from '@emailjs/browser'



export default function Contact() {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .send(
        'service_i8fsolt',
        'template_842qbs8',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        'w9YKv_at1Gr-1LHjs'
      )
      .then(
        () => {
          alert('Message sent successfully!')
          setFormData({ name: '', email: '', message: '' })
          setIsSubmitting(false)
        },
        (error) => {
          alert('Failed to send message')
          console.error(error)
          setIsSubmitting(false)
        }
      )
  }


  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'infantrichart06@gmail.com',
      href: 'mailto:infantrichart06@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8610038830',
      href: 'tel:+918610038830',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Thanjavur, Tamil Nadu, India',
      href: 'https://www.google.com/maps/place/Thanjavur,+Tamil+Nadu,+India',
    },
  ]

  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400">
            Have a project in mind or just want to say hello? Drop me a message and let's
            create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-xl p-8 border border-purple-500/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required


                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-200 placeholder-gray-500 transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required


                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-200 placeholder-gray-500 transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about Something..."
                  rows={5}
                  required


                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-gray-200 placeholder-gray-500 transition-colors resize-none disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed">
              I’m a fresher who enjoys learning new technologies and building simple, effective web applications. I’m open to opportunities, internships, and collaborations. Feel free to reach out—I’d be happy to connect.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all group"
                  >
                    <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg group-hover:scale-110 transition-transform">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <div className="font-medium text-gray-200">{info.value}</div>
                    </div>
                  </a>
                )
              })}
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-3 mt-4">
                {[
                  { name: "GitHub", url: "https://github.com/Richard00726" },
                  { name: "LinkedIn", url: "https://linkedin.com/in/infant-richart-l-207" },
                ].map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-purple-500/50"
                  >
                    <span className="text-sm font-semibold">
                      {platform.name[0]}
                    </span>
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
