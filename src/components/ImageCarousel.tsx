import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageCarousel({
  images,
}: {
  images: { src: string; caption: string }[]
}) {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length)
  const next = () => setIdx((i) => (i + 1) % images.length)

  return (
    <div>
      <div className="relative h-[420px] overflow-hidden rounded-lg border border-white/10 bg-black">
        {images.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={`Build photo ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              i === idx ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-primary text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-primary text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight size={20} />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setIdx(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2 w-2 rounded-full ${i === idx ? 'bg-primary' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>
      <p className="mt-4 text-gray-400 font-light leading-relaxed">
        <span className="text-primary font-bold uppercase text-xs tracking-widest mr-2">
          Picture {idx + 1}
        </span>
        {images[idx].caption}
      </p>
    </div>
  )
}
