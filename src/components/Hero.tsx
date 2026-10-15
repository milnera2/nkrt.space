import { Link } from 'react-router-dom'
import { ArrowDown, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-background-dark">
      <div className="absolute inset-0 z-0">
        <img
          alt="Rocket launch"
          className="w-full h-full object-cover"
          src="/media/backgroundrocketimage.avif"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background-dark"></div>
        <div className="absolute inset-0 technical-grid z-10"></div>
      </div>
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
        <div className="inline-block mb-4 px-3 py-1 border border-primary/50 rounded-full bg-black/30 backdrop-blur-sm">
          <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
            Est. 2024 • Northern Kentucky
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase tracking-tighter mb-6 leading-none drop-shadow-2xl">
          Small Steps.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
            Giant Leaps.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto mb-10 tracking-wide">
          Bringing liquid rocketry to Northern Kentucky.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/projects"
            className="group relative px-8 py-3 bg-transparent border border-white text-white font-display font-bold uppercase tracking-wider overflow-hidden hover:border-primary transition-colors inline-flex justify-center"
          >
            <span className="absolute inset-0 w-full h-full bg-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative flex items-center gap-2">
              View Projects
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown size={36} className="text-white/50" />
      </div>
    </header>
  )
}
