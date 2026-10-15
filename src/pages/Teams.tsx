import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function Teams() {
  return (
    <main>
      <PageHero
        eyebrow="Teams"
        title="Our"
        accent="People"
        sub="Student-led, first-principles engineering — from solids to liquids."
      />
      <section className="py-20 bg-background-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-gray-900 uppercase">
            E-board <span className="text-primary">coming soon</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-light leading-relaxed">
            Leadership profiles are on hold while we collect photo permissions and high-quality
            portraits. In the meantime, meet us at a build session or reach out below.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['Solids — Star Catcher', 'Liquids — Engine', 'Operations & Outreach'].map((t) => (
              <div key={t} className="rounded-lg border border-gray-200 bg-white p-8">
                <p className="font-display font-bold uppercase tracking-widest text-gray-900">
                  {t}
                </p>
                <p className="mt-2 text-sm text-gray-500">Roster to be announced</p>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-block mt-10 bg-primary hover:bg-red-600 text-white px-8 py-3 rounded font-display font-bold uppercase tracking-widest transition-colors"
          >
            Contact the team
          </Link>
        </div>
      </section>
    </main>
  )
}
