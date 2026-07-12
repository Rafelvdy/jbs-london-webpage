'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

const images = [
  '/projects/project-toca-social.jpeg',
  '/projects/project-oche.webp',
  '/projects/project-gleeds-seplat.jpeg',
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative h-full w-full">
      <div ref={emblaRef} className="h-full w-full overflow-hidden">
        <div className="flex h-full">
          {images.map((src, i) => (
            <div key={i} className="relative flex-[0_0_100%] h-full">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`size-2 rounded-full transition-colors duration-200 ${
              i === selectedIndex ? 'bg-white' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}