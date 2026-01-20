import { Mail, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl text-white mb-4 uppercase tracking-wider">
              Audio Systems
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Engineering sound through systematic design, technical precision, and creative exploration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-4">
              Navigation
            </h3>
            <nav className="space-y-2">
              {['Projects', 'Workflow', 'Tools', 'Experiments', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-zinc-500 hover:text-emerald-500 transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-4">
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:davideparatore11@gmail.com"
                className="flex items-center gap-3 text-sm text-zinc-500 hover:text-emerald-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>davideparatore11@gmail.com</span>
              </a>

              {/* Social Icons */}
              <div className="flex gap-4 pt-2">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/davide-salvatore-paratore-ba1104375/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-emerald-500/50 hover:text-emerald-500 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/davide.paratore_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-emerald-500/50 hover:text-emerald-500 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-zinc-700">
            © {new Date().getFullYear()} Davide Paratore. All rights reserved.
          </div>

          <div className="text-xs text-zinc-700 font-mono">
            "Sound is architecture in time"
          </div>

          <div className="flex gap-6 text-xs text-zinc-700">
            <a href="#" className="hover:text-emerald-500 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-emerald-500 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
