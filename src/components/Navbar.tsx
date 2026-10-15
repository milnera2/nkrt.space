import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/teams', label: 'Teams' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <nav className="fixed w-full z-50 bg-background-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logos/Mars_RT_Logo_Circular.png"
              alt="NKU Rocket Team Logo"
              className="h-10 w-auto"
            />
            <span className="hidden md:block text-white font-display font-bold text-xl tracking-wider uppercase">
              NKU Rocket Team
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide transition-colors ${
                      isActive ? 'text-primary' : 'text-gray-300 hover:text-primary'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/sponsors"
              className="hidden sm:inline-block bg-primary hover:bg-red-600 text-white px-5 py-2 rounded font-display font-medium uppercase tracking-wider text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-red-900/20"
            >
              Sponsor Us
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden text-white flex items-center focus:outline-none"
              aria-label="Toggle menu"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-surface-dark border-b border-white/10 w-full absolute top-20 left-0 z-40">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block text-gray-300 hover:text-primary px-3 py-4 text-base font-display font-bold uppercase tracking-widest border-b border-white/5"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-6">
              <Link
                to="/sponsors"
                className="block w-full text-center bg-primary text-white py-4 rounded font-display font-bold uppercase tracking-widest"
              >
                Sponsor Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
