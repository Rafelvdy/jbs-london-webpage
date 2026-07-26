'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

type ProjectImage = {
  src: string;
  name: string;
};

function toTitle(src: string) {
  const file = src.split('/').pop() ?? '';
  const base = file.replace(/\.[a-zA-Z0-9]+$/, '');
  return base
    .replace(/^project-/, '')
    .replace(/-scaled$/, '')
    .replace(/[-_]+/g, ' ')
    .trim();
}

const rawImages: string[] = [
  '/projects/project-Adeline-Place.jpeg',
  '/projects/project-Blandford-Street.jpeg',
  '/projects/project-Bourdon.jpeg',
  '/projects/project-Cork-Street.jpeg',
  '/projects/project-Elder-House.jpeg',
  '/projects/project-Elvin.jpeg',
  '/projects/project-Emerald-scaled.jpg',
  '/projects/project-Equinix.jpeg',
  '/projects/project-gleeds-seplat.jpeg',
  '/projects/project-Harley-Cavendish.jpeg',
  '/projects/project-Kao-2.jpeg',
  '/projects/project-Longview.jpeg',
  '/projects/project-Magna.jpeg',
  '/projects/project-Mansel.jpeg',
  '/projects/project-oche.webp',
  '/projects/project-Rosewood.jpeg',
  '/projects/project-St.James_-Street.jpeg',
  '/projects/project-The-Corner-Building.jpeg',
  '/projects/project-toca-social.jpeg',
  '/projects/project-Wimpole.jpeg',
];

const images: ProjectImage[] = rawImages.map((src) => ({
  src,
  name: toTitle(src),
}));

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((api: NonNullable<typeof emblaApi>) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => onSelect(emblaApi);

    emblaApi.on('init', handleSelect);
    emblaApi.on('select', handleSelect);
    emblaApi.on('reInit', handleSelect);

    return () => {
      emblaApi.off('init', handleSelect);
      emblaApi.off('select', handleSelect);
      emblaApi.off('reInit', handleSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative h-full w-full">
      <div ref={emblaRef} className="h-full w-full overflow-hidden rounded-3xl bg-black">
        <div className="flex h-full">
          {images.map((img, i) => (
            <div
              key={img.src}
              className="relative flex-[0_0_100%] h-full overflow-hidden"
            >
              {/*
                Backdrop layer: same image, blurred + darkened + scaled up
                slightly (via cover) so it fills the whole slide with no
                black bars. Purely decorative, hidden from screen readers.
              */}
              <Image
                src={img.src}
                alt=""
                fill
                sizes="100vw"
                aria-hidden="true"
                className="object-cover scale-110 blur-2xl brightness-50"
              />

              {/*
                Foreground layer: the real, uncropped image sitting on
                top of the blurred backdrop. object-contain guarantees
                nothing is cropped.
              */}
              <Image
                src={img.src}
                alt={img.name}
                fill
                sizes="100vw"
                priority={i === 0}
                className="relative object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-4 left-4 z-10 rounded-full bg-black/60 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
        {images[selectedIndex]?.name}
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex z-10">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => emblaApi?.scrollTo(i)}
            className="size-6 flex items-center justify-center"
            aria-label={`Go to ${img.name}`}
          >
            <span
              className={`size-2 rounded-full transition-colors duration-200 ${
                i === selectedIndex ? 'bg-accent' : 'bg-white'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}