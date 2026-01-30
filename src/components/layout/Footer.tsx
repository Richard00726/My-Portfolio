import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black to-purple-950/20 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">CodeRich</h3>
            <p className="text-gray-400 text-sm">
              Building modern, high-performance web experiences through elegant design,
              clean code, and the latest architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
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

            {/* Social Icons */}
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

        {/* Bottom */}
        <div className="border-t border-purple-500/20 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} CodeWithRichart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
