import { useState } from 'react'
import PageHero from '../components/PageHero'
import { CONTACTS } from '../data/content'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <main>
      <PageHero
        eyebrow="Contact us"
        title="Let's"
        accent="talk."
        sub="For anyone interested in joining or supporting the club, we would love to talk!"
      />
      <section className="py-20 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-lg border border-white/10 bg-black/40 p-8">
            <h2 className="text-2xl font-display font-bold text-white uppercase mb-6">
              Send a message
            </h2>
            {sent ? (
              <p className="text-gray-300 font-light">
                Thanks! Your message is ready in your email client — hit send and we'll get back
                to you.
              </p>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  const data = new FormData(e.currentTarget)
                  const name = data.get('name')
                  const email = data.get('email')
                  const message = data.get('message')
                  window.location.href = `mailto:${CONTACTS.generalEmail}?subject=${encodeURIComponent(
                    `Website contact from ${name}`,
                  )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`
                  setSent(true)
                }}
              >
                <input
                  name="name"
                  required
                  placeholder="Name"
                  className="w-full rounded bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full rounded bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
                />
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="How do you want to get involved?"
                  className="w-full rounded bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-red-600 text-white py-3 rounded font-display font-bold uppercase tracking-widest transition-colors"
                >
                  Send via email
                </button>
              </form>
            )}
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border border-white/10 bg-black/40 p-6">
              <p className="text-xs uppercase tracking-widest text-gray-500">Email</p>
              <a
                href={`mailto:${CONTACTS.generalEmail}`}
                className="text-white font-display text-xl hover:text-primary"
              >
                {CONTACTS.generalEmail}
              </a>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/40 p-6">
              <p className="text-xs uppercase tracking-widest text-gray-500">LinkedIn</p>
              <a
                href={CONTACTS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-white font-display text-xl hover:text-primary"
              >
                nku-rt
              </a>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/40 p-6">
              <p className="text-xs uppercase tracking-widest text-gray-500">Location</p>
              <p className="text-white">Northern Kentucky University</p>
              <p className="text-gray-400 text-sm">{CONTACTS.address}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
