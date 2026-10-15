export default function WhoWeAre() {
  return (
    <section className="py-24 bg-background-light relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-lg overflow-hidden transform translate-y-8">
              <img
                alt="Student engineering"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="/media/whoweare1.jpg"
              />
            </div>
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img
                alt="Engineering team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="/media/whoweare2.jpg"
              />
            </div>
            <div className="absolute -z-10 -top-10 -left-10 w-full h-full border-2 border-primary/20 rounded-lg"></div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-primary"></span>
              <span className="text-primary font-display font-bold uppercase tracking-widest text-sm">
                Who We Are
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8 leading-tight">
              Empowering students to innovate in <span className="text-primary">rocket science.</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                NKU Rocket Team provides students hands-on engineering experience in design,
                manufacturing, testing, and launching.
              </p>
              <p>
                We emphasize a first-principles mindset, designing all rockets and liquid engines
                from scratch. By uniting diverse talents from around the university, we are
                developing the future of the aerospace industry right here in Northern Kentucky.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
              <div>
                <span className="block text-4xl font-display font-bold text-gray-900">15+</span>
                <span className="text-sm uppercase tracking-wider text-gray-500">
                  Active Members
                </span>
              </div>
              <div>
                <span className="block text-4xl font-display font-bold text-gray-900">100%</span>
                <span className="text-sm uppercase tracking-wider text-gray-500">Student Led</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
