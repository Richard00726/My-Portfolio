import { Github, Linkedin } from 'lucide-react';
 
export default function Footer() {
  const currentYear = new Date().getFullYear();
 
  const quickLinks = [
    { name: 'Home', href: '#home', external: false },
    { name: 'About', href: '#about', external: false },
    { name: 'Skills', href: '#skills', external: false },
    { name: 'Projects', href: '#projects', external: false },
    { name: 'Contact', href: '#contact', external: false },
    { name: 'Resume', href: '/Infant_Richart_Resume.pdf', external: true },
  ];
 
  return (
    <footer className="relative bg-gradient-to-b from-black to-purple-950/20 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 md:gap-16 mb-8 items-stretch">
 
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-2">Infant Richart</h3>
              <p className="text-sm text-purple-400 mb-4">Full Stack Developer</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Actively looking for full-time roles in web development. Open to collaborations, opportunities, and new connections.
              </p>
            </div>
          </div>
 
          <div className="hidden md:flex md:flex-col">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
 
          <div className="flex flex-col h-full">
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                Email:{' '}
                <a
                  href="mailto:infantrichart06@gmail.com"
                  className="hover:text-purple-400 transition-colors"
                >
                  infantrichart06@gmail.com
                </a>
              </p>
              <p>Location: Thanjavur, Tamil Nadu, India</p>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/Richard00726"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="group w-10 h-10 flex items-center justify-center bg-purple-600/20 hover:bg-purple-600 hover:shadow-[0_0_20px_#a855f7] rounded-lg transition-all"
              >
                <Github className="w-5 h-5 text-white transition-transform duration-200 group-hover:scale-110" />
              </a>
              <a
                href="https://linkedin.com/in/infant-richart-l-207"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="group w-10 h-10 flex items-center justify-center bg-purple-600/20 hover:bg-purple-600 hover:shadow-[0_0_20px_#a855f7] rounded-lg transition-all"
              >
                <Linkedin className="w-5 h-5 text-white transition-transform duration-200 group-hover:scale-110" />
              </a>
            </div>
          </div>
 
        </div>
        <div className="border-t border-purple-500/20 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Infant Richart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}