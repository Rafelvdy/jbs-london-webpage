import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 py-24">
      <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-4xl">
        <p className="text-accent font-montserrat text-xs sm:text-sm tracking-[0.25em] uppercase">
          About JBS London
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">
          <span className="block text-accent tracking-[0.05em]">Military</span>
          <span className="block font-light font-sans text-foreground">precision.</span>
        </h1>
        <div className="w-12 h-px bg-accent mt-2" />
        <p className="max-w-xl text-sm sm:text-base text-foreground-muted leading-relaxed">
          JBS London is a complete commercial building maintenance company. One contractor
          for mechanical, electrical, HVAC, plumbing and building fabric. We deliver PPM
          programmes, reactive maintenance, 24/7 support and compliance works across London
          and the South East.
        </p>
        <Link href="/contact-us" className="mt-4">
          <Button variant="foreground-fill" radius="full" className="px-8 py-3">
            Get in touch
          </Button>
        </Link>
      </div>
    </section>
  );
}
