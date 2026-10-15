export default function PageHero({
  eyebrow,
  title,
  accent,
  sub,
}: {
  eyebrow: string
  title: string
  accent?: string
  sub?: string
}) {
  return (
    <header className="relative pt-40 pb-20 bg-background-dark overflow-hidden">
      <div className="absolute inset-0 technical-grid"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background-dark"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-12 bg-primary"></span>
          <span className="text-primary font-display font-bold uppercase tracking-widest text-sm">
            {eyebrow}
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter">
          {title} {accent && <span className="text-primary">{accent}</span>}
        </h1>
        {sub && <p className="mt-4 text-xl text-gray-400 font-light max-w-3xl">{sub}</p>}
      </div>
    </header>
  )
}
