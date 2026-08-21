import Link from "next/link"
import Hero from "@/pages/services/hero"
import ServicesSection from "@/pages/services/servicesSection"
import OwnerQuote from "@/pages/services/ownerQuote"
import Button from "@/components/Button"

export default function Services() {
    return (
        <main>
            <Hero />
            <ServicesSection />
            <section className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 flex flex-col items-center gap-4 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light text-foreground">
                    Ready to work with us?
                </h2>
                <p className="max-w-xl text-sm sm:text-base text-foreground-muted">
                    Get in touch with our team to discuss your requirements. We&apos;ll provide a no-obligation quote and talk you through how we can support your property.
                </p>
                <Link href="/contact-us">
                    <Button variant="foreground-fill" radius="full" className="mt-4 px-8 py-3">
                        Get in touch
                    </Button>
                </Link>
            </section>
            <OwnerQuote />
            
        </main>
    )
}