import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-screen min-h-[60vh] flex items-center justify-center px-4 sm:px-6 py-10 sm:py-12 pt-20">
      <div className="w-[92%] sm:w-[88%] md:w-[85%] lg:w-[80%] xl:w-[65%] relative group mt-10">
        <div className="relative w-full aspect-[3/4] md:aspect-[4/3] lg:aspect-[16/10] xl:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-background-dark">
          <Image
            src="/projects/project-Longview.jpeg"
            alt="Hero image"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
          />
          <div className="absolute rounded-2xl sm:rounded-3xl bottom-0 px-[clamp(1rem,3vw,2rem)] py-[clamp(1.25rem,3vw,2rem)] bg-linear-to-t from-black/80 via-black/30 to-transparent w-full">
            <div className="transition-transform duration-300 group-hover:-translate-y-2 delay-100">
              <p className="text-accent font-montserrat text-xs tracking-[0.25em] uppercase mb-2">JBS London</p>
              <h1 className="text-background-light font-medium font-montserrat leading-tight text-[clamp(1.4rem,3.6vw,2.75rem)]">
                Ethos &amp; Values
              </h1>
              <p className="text-background-dark font-sans mt-2 max-w-lg text-[clamp(0.8rem,1.4vw,1.0625rem)]">
                More than a contractor. Committed to veterans, sustainability, the arts and ethical business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
