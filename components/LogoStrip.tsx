import Image from 'next/image';

interface Logo {
  src: string;
  alt: string;
}

interface LogoStripProps {
  logos: Logo[];
  direction?: 'left' | 'right';
}

export default function LogoStrip({ logos, direction = 'left' }: LogoStripProps) {
  // Duplicate for seamless infinite loop
  const doubled = [...logos, ...logos];

  return (
    <div
      className="overflow-hidden w-full"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div
        className="flex w-max items-center gap-16 py-4"
        style={{
          animation: `${direction === 'left' ? 'scroll-left' : 'scroll-right'} 30s linear infinite`,
        }}
      >
        {doubled.map((logo, i) => (
          <div key={i} className="shrink-0 h-10 w-32 relative">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
