import Image from 'next/image';
import ContactTextLink from '@/components/ContactTextLink';

export default function HeroDesktop() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center py-8">
      <div className="relative w-[80vw] max-w-335 h-3/4 max-h-160 bg-background-dark rounded-3xl flex flex-row overflow-visible">
        {/*
          Wrapper is the sizing authority now. It reserves a proportional
          slice of the card (1/3 width, full height) and the image simply
          fills whatever that resolves to via `fill` + `object-contain`.
          No fixed pixel width/height means no breakpoint-jump behaviour ---
          it scales continuously with the card's real rendered size.
        */}
        <div className="relative w-1/3 h-full">
          {/*
            Inner positioning box recreates the original "bleed" effect:
            the image is allowed to overflow slightly past the card's
            left/bottom edge rather than being strictly boxed in.
          */}
          <div className="absolute bottom-0 left-10 -ml-10 w-[120%] h-[110%]">
            <Image
              src="/hero/cheese-grater-hero.webp"
              alt="Cheese Grater Building Project"
              fill
              sizes="(min-width: 1536px) 40vw, 33vw"
              priority
              className="object-contain object-bottom-left opacity-95 z-10"
            />
          </div>
        </div>

        <div className="flex flex-col min-w-2/3 justify-between">
          <div className="mt-10">
            <h1 className="font-light text-7xl font-montserrat text-accent mb-3">JBS LONDON</h1>
            <p className="font-sans text-2xl text-foreground-muted">Mechanical and electrical building management solutions</p>
          </div>
          <div className="mb-5 self-end">
            <ContactTextLink className="text-end w-full" text='admin@jbslondon.co.uk'/>
            <ContactTextLink className="text-end w-full" text='01732 752144'/>
          </div>
        </div>
      </div>
    </section>
  );
}