import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-white/5 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <Link to="/" className="flex items-center gap-3 mb-6 md:mb-0">
            <img
              src="/logos/Mars_RT_Logo_Circular.png"
              alt="NKU Rocket Team Logo"
              className="h-10 w-auto"
            />
            <span className="text-white font-display font-bold text-lg tracking-wider uppercase">
              NKU Rocket Team
            </span>
          </Link>
          <div className="flex items-center space-x-6">
            <a
              className="text-gray-400 hover:text-white transition-colors"
              href="https://www.linkedin.com/company/nku-rt/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a
              className="text-gray-400 hover:text-white transition-colors"
              href="mailto:niemannj2@mymail.nku.edu"
              aria-label="Email"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm pt-8 border-t border-white/10">
          <div className="space-y-4">
            <p>NKU Rocket Team is a student organization at Northern Kentucky University.</p>
            <p className="text-xs text-gray-600">Copyright © 2025 All rights reserved.</p>
          </div>
          <div className="flex gap-6 md:justify-center text-sm">
            <Link to="/projects" className="hover:text-white">
              Projects
            </Link>
            <Link to="/teams" className="hover:text-white">
              Teams
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link to="/sponsors" className="hover:text-white">
              Sponsors
            </Link>
          </div>
          <div className="flex flex-col md:items-end justify-center">
            <span className="block text-gray-500 text-xs">Northern Kentucky University</span>
            <span className="block text-gray-600 text-xs mt-1">
              Nunn Dr, Highland Heights, KY 41099
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
