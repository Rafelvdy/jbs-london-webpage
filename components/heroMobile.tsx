import Image from 'next/image';
import ContactTextLink from '@/components/ContactTextLink';

export default function HeroMobile() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-10 gap-6">
      {/* Dark card: split heading + bleeding image, image stays in normal flow */}
       <div className="w-full flex items-center justify-between mb-2">
          <h1 className="font-light text-3xl sm:text-4xl md:text-5xl font-montserrat text-accent">JBS</h1>
          <h1 className="font-light text-3xl sm:text-4xl md:text-5xl font-montserrat text-accent">LONDON</h1>
        </div>
      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl bg-background-dark rounded-3xl flex flex-col items-center justify-end overflow-visible sm:p-8">
        {/* <div className="w-full flex items-center justify-between mb-2">
          <h1 className="font-light text-3xl sm:text-4xl md:text-5xl font-montserrat text-accent">JBS</h1>
          <h1 className="font-light text-3xl sm:text-4xl md:text-5xl font-montserrat text-accent">LONDON</h1>
        </div> */}
        

        {/*
          Image stays in normal flex flow, sized with aspect-ratio so the
          card's own height genuinely includes it. Negative margins pull
          it past the card's top/bottom edges to create the bleed effect,
          without the circular sizing bug that absolute positioning caused.
        */}
        <div className="relative w-full sm:w-4/5 md:w-3/4 aspect-[3/4] -mt-15 sm:-mt-20">

          <Image
            src="/hero/cheese-grater-hero.webp"
            alt="Cheese Grater Building Project"
            fill
            sizes="(min-width: 768px) 33vw, 60vw"
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* Lighter card: visibly distinct background, description + contact */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl bg-[#EFE7D8] rounded-3xl flex flex-col p-6 sm:p-8 gap-4 shadow-sm">
        <p className="font-sans text-sm sm:text-base text-foreground-muted">
          Mechanical and electrical building management solutions
        </p>
        <div className="self-end text-right">
          <ContactTextLink className="text-end w-full" text='admin@jbslondon.co.uk' />
          <ContactTextLink className="text-end w-full" text='01732 752144' />
        </div>
      </div>
    </div>
  );
}