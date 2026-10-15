import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="pt-40 pb-24 bg-background-dark text-center">
      <h1 className="text-6xl font-display font-bold text-white uppercase">
        404 <span className="text-primary">— Off course</span>
      </h1>
      <p className="mt-4 text-gray-400">That trajectory doesn't exist. Let's get back on the pad.</p>
      <Link
        to="/"
        className="inline-block mt-8 bg-primary text-white px-8 py-3 rounded font-display font-bold uppercase tracking-widest"
      >
        Back home
      </Link>
    </main>
  )
}
