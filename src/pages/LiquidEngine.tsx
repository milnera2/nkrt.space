import PageHero from '../components/PageHero'
import StatsTable from '../components/StatsTable'
import { LRE_STATS } from '../data/content'

export default function LiquidEngine() {
  return (
    <main>
      <PageHero
        eyebrow="Projects / Liquids"
        title="Liquid Rocket"
        accent="Engine"
        sub="The first student-built liquid rocket engine in the history of the Cincinnati area."
      />
      <section className="py-20 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-display font-bold text-white uppercase mb-6">
              Engine <span className="text-primary">stats</span>
            </h2>
            <StatsTable rows={LRE_STATS} />
            <img
              src="/media/lre1.jpg"
              alt="Liquid rocket engine hardware"
              className="mt-8 rounded-lg border border-white/10 w-full object-cover"
            />
          </div>
          <div className="space-y-8 text-gray-300 font-light leading-relaxed text-lg">
            <div>
              <h3 className="text-white font-display font-bold uppercase tracking-widest mb-3">
                Project goals
              </h3>
              <p>
                This shall be NKU Rocket Team's first-ever liquid rocket engine, with an aim of
                building skills within members to build more advanced engines in the future.
                Nitrous oxide is used as an oxidizer due to its self-pressurizing capability and
                non-cryogenic nature, which simplifies the feed system greatly. The project is on
                an accelerated timeline, with an aim to hotfire by May of 2026.
              </p>
            </div>
            <div>
              <h3 className="text-white font-display font-bold uppercase tracking-widest mb-3">
                Design
              </h3>
              <p>
                All engine components are designed from scratch, including the injector and thrust
                chamber, in Siemens NX and Creo, with Autodesk Fusion used for half-sections. This
                builds critical skills that are needed for industry.
              </p>
            </div>
            <div>
              <h3 className="text-white font-display font-bold uppercase tracking-widest mb-3">
                Manufacturing
              </h3>
              <p>
                All manufacturing is done in-house at NKU's machine shop. Students work closely
                with the machine shop director to machine and assemble critical engine components.
                Fusion CAM is used for programming CNC machines. Demonstrations of manufacturing
                are done using shop-supplied steel to ensure that the available machines and tools
                can provide the geometries required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
