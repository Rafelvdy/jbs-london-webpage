import Link from "next/link"
import Image from "next/image"
import Button from "@/components/Button"

export default function Hero() {
  return (
    <section className="max-w-screen h-screen flex items-center justify-center">
      <div className="w-[60%] h-fit relative group">
        <Image
          src="/services-image.jpg"
          alt="Services"
          width={1920}
          height={1080}
          className="object-cover w-full rounded-3xl"
        />
        <div className="absolute rounded-3xl bottom-0 px-6 py-8 bg-linear-to-t from-black/80 via-black/30 to-transparent w-full">
          <div className="transition-transform duration-300 group-hover:-translate-y-2 delay-100">
            <h1 className="text-background-light text-5xl font-medium font-montserrat">
              Reliable building services <br /> that just work
            </h1>
            <p className="text-background-dark font-sans text-lg mt-2">
              We endeavour to provide clients with the best in quality-driven building maintenance and services.
            </p>
            <Link href="/contact-us">
              <Button variant="accent-fill" radius="xl" className="px-6 py-2 mt-5 text-xl whitespace-nowrap">
                Get in touch with our team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}