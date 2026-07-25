import Image from 'next/image';
import ContactTextLink from '@/components/ContactTextLink';

export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-end py-8">
      <div className="w-[80vw] h-3/4 bg-background-dark rounded-3xl flex flex-row">
        <div className="relative w-1/3 flex items-center justify-center h-full">
            <Image
              src="/hero/cheese-grater-hero.webp"
              alt="Cheese Grater Building Project"
              width={450}
              height={600}
              priority
              className="absolute bottom-0 left-10 z-10 opacity-95"
            />
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