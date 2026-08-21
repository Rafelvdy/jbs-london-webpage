import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="max-w-screen min-h-screen flex items-center justify-center px-4 sm:px-6 py-10 sm:py-12">
      <div className="w-[92%] sm:w-[88%] md:w-[85%] lg:w-[80%] xl:w-[65%] relative group">
        <div className="relative w-full aspect-[3/4] md:aspect-[4/3] lg:aspect-[16/10] xl:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden">
          <Image
            src="/services-image.jpg"
            alt="Services"
            fill
            priority
            sizes="(min-width: 1280px) 65vw, (min-width: 1024px) 80vw, (min-width: 768px) 85vw, 92vw"
            className="object-cover"
          />

          <div className="absolute rounded-2xl sm:rounded-3xl bottom-0 px-[clamp(1rem,3vw,2rem)] py-[clamp(1.25rem,3vw,2rem)] bg-linear-to-t from-black/80 via-black/30 to-transparent w-full">
            <div className="transition-transform duration-300 group-hover:-translate-y-2 delay-100">
              <h1 className="text-background-light font-medium font-montserrat leading-tight text-[clamp(1.4rem,3.6vw,2.75rem)]">
                Everything your commercial <br className="hidden sm:inline" /> property needs. 
              </h1>
              <p className="text-background-dark font-sans mt-2 max-w-md text-[clamp(0.8rem,1.4vw,1.0625rem)]">
                PPM programmes, reactive maintenance, 24/7 support and compliance works across mechanical, electrical, HVAC, plumbing and building fabric.
              </p>
              <Link href="/contact-us">
                <Button
                  variant="accent-fill"
                  radius="xl"
                  className="px-[clamp(1rem,1.8vw,1.5rem)] py-2 mt-4 sm:mt-5 whitespace-nowrap text-[clamp(0.8rem,1.4vw,1.125rem)]"
                >
                  Get in touch with our team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}