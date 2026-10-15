import PageHero from '../components/PageHero'
import SponsorBanner from '../components/SponsorBanner'
import { CONTACTS } from '../data/content'

export default function Sponsors() {
  return (
    <main>
      <PageHero
        eyebrow="Sponsors"
        title="Power our"
        accent="flight."
        sub="We are currently seeking sponsors to help support our solid and liquid rocketry projects!"
      />
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 font-light max-w-3xl">
            If you would like to support us, please reach out to the following people:
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-gray-200 bg-white p-8">
              <p className="text-xs uppercase tracking-widest text-primary font-bold">
                {CONTACTS.president.role}
              </p>
              <h3 className="mt-2 text-2xl font-display font-bold text-gray-900">
                {CONTACTS.president.name}
              </h3>
              <a
                href={`mailto:${CONTACTS.president.email}`}
                className="mt-2 inline-block text-gray-600 hover:text-primary"
              >
                {CONTACTS.president.email}
              </a>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-8">
              <p className="text-xs uppercase tracking-widest text-primary font-bold">
                {CONTACTS.faculty.role}
              </p>
              <h3 className="mt-2 text-2xl font-display font-bold text-gray-900">
                {CONTACTS.faculty.name}
              </h3>
              <a
                href={`mailto:${CONTACTS.faculty.email}`}
                className="mt-2 inline-block text-gray-600 hover:text-primary"
              >
                {CONTACTS.faculty.email}
              </a>
            </div>
          </div>
        </div>
      </section>
      <SponsorBanner />
    </main>
  )
}
