import { Link } from 'react-router-dom'

function ProjectCard({
  to,
  image,
  alt,
  tag,
  meta,
  title,
  children,
}: {
  to: string
  image: string
  alt: string
  tag: string
  meta: string
  title: string
  children: React.ReactNode
}) {
  return (
    <Link
      to={to}
      className="group relative h-[500px] overflow-hidden rounded bg-black border border-white/10 block"
    >
      <img
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50"
        src={image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-sm">
            {tag}
          </span>
          <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">
            {meta}
          </span>
        </div>
        <h3 className="text-4xl font-display font-bold text-white uppercase mb-4 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-300 text-lg font-light leading-relaxed max-w-md">{children}</p>
        <span className="inline-block mt-4 text-primary text-sm font-bold uppercase tracking-widest group-hover:underline">
          Learn more →
        </span>
      </div>
    </Link>
  )
}

export default function ProjectsPreview() {
  return (
    <section className="py-24 bg-surface-dark relative overflow-hidden" id="projects">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg height="100%" width="100%">
          <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
          </pattern>
          <rect fill="url(#grid)" height="100%" width="100%"></rect>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-2">
              Our <span className="text-primary">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-xl">
              How <span className="text-primary">WE</span> reach for the stars.
            </p>
          </div>
          <Link
            to="/projects"
            className="mt-6 md:mt-0 text-gray-300 hover:text-primary uppercase text-sm font-bold tracking-widest"
          >
            All projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            to="/projects/star-catcher"
            image="/media/starcatcher2.jpg"
            alt="Solid Rocketry"
            tag="Solid Rocketry"
            meta="Jan 2026 Launch"
            title="Star Catcher"
          >
            NKU Rocket Team’s first solid rocketry project. Designed to reach over{' '}
            <span className="text-white font-bold">5,000 ft</span> of altitude, Star Catcher serves
            as our foundational flight platform.
          </ProjectCard>

          <ProjectCard
            to="/projects/liquid-engine"
            image="/media/lre1.jpg"
            alt="Liquid Rocket Engine"
            tag="Liquids"
            meta="Historical Milestone"
            title="Liquid Rocket Engine"
          >
            The <span className="text-white font-bold">first student-built liquid rocket engine</span>{' '}
            in the history of the Cincinnati area. A major leap in propulsion technology for our
            region.
          </ProjectCard>
        </div>
      </div>
    </section>
  )
}
