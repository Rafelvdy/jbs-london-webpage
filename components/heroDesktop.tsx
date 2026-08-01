import Image from 'next/image';
import ContactTextLink from '@/components/ContactTextLink';

export default function HeroDesktop() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center py-8">
      <div className="relative p-1 w-[80vw] max-w-335 h-3/4 max-h-160 bg-background-dark rounded-3xl flex flex-row overflow-visible">
        <div className="relative lg:min-w-2/5 xl:w-1/3 h-full">
          <div className="absolute bottom-0 left-10 -ml-10 w-[120%] h-[110%]">
            <Image
              src="/hero/cheese-grater-hero.webp"
              alt="Cheese Grater Building Project"
              fill
              sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 40vw, 100vw"
              priority
              className="object-contain object-bottom-left opacity-95 z-10"
            />
          </div>
        </div> 

        <div className="flex flex-col min-w-0 flex-1 lg:w-3/5 xl:w-2/3 justify-between">
          <div className="mt-10 p-4 min-w-0">
            <h1 className="font-light lg:text-5xl xl:text-6xl font-montserrat text-accent mb-3 text-balance">
              JBS LONDON
            </h1>
            <p className="font-sans lg:text-xl xl:text-2xl text-foreground-muted">
              Mechanical and electrical building management solutions
            </p>
          </div>
          <div className="mb-5 self-end">
            <ContactTextLink className="text-end w-full" text="admin@jbslondon.co.uk" />
            <ContactTextLink className="text-end w-full" text="01732 752144" />
          </div>
        </div>
      </div>
    </section>
  );
}