import PageHero from '../components/PageHero'
import StatsTable from '../components/StatsTable'
import ImageCarousel from '../components/ImageCarousel'
import { STAR_CATCHER_STATS, STAR_CATCHER_IMAGES } from '../data/content'

export default function StarCatcher() {
  return (
    <main>
      <PageHero
        eyebrow="Projects / Solid Rocketry"
        title="Star"
        accent="Catcher"
        sub="NKU Rocket Team's first solid rocketry project will reach over 5,000 ft of altitude and is slated to launch in January of 2026."
      />
      <section className="py-20 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-display font-bold text-white uppercase mb-6">
              Vehicle <span className="text-primary">stats</span>
            </h2>
            <StatsTable rows={STAR_CATCHER_STATS} />
            <div className="mt-8 rounded-lg border border-primary/30 bg-primary/5 p-6">
              <h3 className="text-white font-display font-bold uppercase tracking-widest mb-2">
                Interactive CAD model
              </h3>
              <p className="text-gray-400 font-light">
                CAD viewer placeholder — embed the Star Catcher assembly here (e.g. Autodesk
                viewer or model-viewer) when the export is ready.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold text-white uppercase mb-6">
              Build <span className="text-primary">progress</span>
            </h2>
            <ImageCarousel images={STAR_CATCHER_IMAGES} />
          </div>
        </div>
      </section>
    </main>
  )
}
