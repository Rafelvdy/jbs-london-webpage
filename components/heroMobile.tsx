import Image from 'next/image';
import ContactTextLink from '@/components/ContactTextLink';

export default function HeroMobile() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-10 gap-6">
      <div className="w-full flex items-center justify-end -mb-3 gap-[32vw]">
        <h1 className="font-light text-4xl sm:text-4xl md:text-5xl font-montserrat text-accent">JBS</h1>
        <h1 className="font-light text-4xl sm:text-4xl md:text-5xl font-montserrat text-accent">LONDON</h1>
      </div>
      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl bg-background-dark rounded-3xl flex flex-col items-center justify-end overflow-visible sm:p-8">

        <div className="relative w-[90%] sm:w-[95%] md:w-[85%] aspect-3/4 -mt-24 sm:-mt-32 md:-mt-36">

          <Image
            src="/hero/cheese-grater-hero.webp"
            alt="Cheese Grater Building Project"
            fill
            sizes="(min-width: 768px) 33vw, 70vw"
            priority
            className="object-contain"
          />
        </div>
      </div>

      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl bg-[#EFE7D8] rounded-3xl flex flex-col p-6 sm:p-8 gap-4 shadow-sm">
        <p className="font-sans text-sm sm:text-base text-foreground-muted">
          Mechanical and electrical building management solutions
        </p>
        <div className="self-end text-right">
          <ContactTextLink className="text-end w-full" text="admin@jbslondon.co.uk" />
          <ContactTextLink className="text-end w-full" text="01732 752144" />
        </div>
      </div>
    </div>
  );
}