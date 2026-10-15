import { Link } from 'react-router-dom'

export default function SponsorBanner() {
  return (
    <section className="relative py-20 bg-primary overflow-hidden" id="sponsor">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
        <div className="md:flex md:items-center md:justify-between">
          <div>
            <span className="text-white/80 font-bold uppercase tracking-widest text-sm mb-2 block">
              Partnership
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Interested In Supporting Us?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl font-light">
              Learn more about how you can partner with us in our sponsorship information packet.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
            <Link
              to="/sponsors"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-colors uppercase text-sm tracking-wider text-center"
            >
              Learn More
            </Link>
            <Link
              to="/sponsors"
              className="px-8 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors uppercase text-sm tracking-wider shadow-xl text-center"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
