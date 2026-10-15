import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SponsorBanner from '../components/SponsorBanner'

export default function Projects() {
  return (
    <main>
      <PageHero
        eyebrow="Projects"
        title="How"
        accent="we reach for the stars."
        sub="Solid foundations today, liquid propulsion tomorrow — all designed from scratch by students."
      />
      <section className="py-20 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            to="/projects/star-catcher"
            className="group relative h-[500px] overflow-hidden rounded bg-black border border-white/10 block"
          >
            <img
              alt="Star Catcher solid rocket"
              src="/media/starcatcher2.jpg"
              className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-sm">
                Solid Rocketry
              </span>
              <h2 className="text-4xl font-display font-bold text-white uppercase mt-3">
                Star Catcher
              </h2>
              <p className="text-gray-300 mt-2 max-w-md font-light">
                Our first solid rocketry project — over 5,000 ft, launching January 2026.
              </p>
            </div>
          </Link>
          <Link
            to="/projects/liquid-engine"
            className="group relative h-[500px] overflow-hidden rounded bg-black border border-white/10 block"
          >
            <img
              alt="Liquid rocket engine"
              src="/media/lre1.jpg"
              className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-sm">
                Liquids
              </span>
              <h2 className="text-4xl font-display font-bold text-white uppercase mt-3">
                Liquid Rocket Engine
              </h2>
              <p className="text-gray-300 mt-2 max-w-md font-light">
                The first student-built liquid rocket engine in Cincinnati-area history.
              </p>
            </div>
          </Link>
        </div>
      </section>
      <SponsorBanner />
    </main>
  )
}
