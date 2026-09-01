
import Link from "next/link";
import Button from "@/components/Button";
import ContactTextLink from "@/components/ContactTextLink";

export default function ContactUsPage() {
  return (
    <main className="px-4 sm:px-6 md:px-10 py-16 sm:py-24 pt-28 sm:pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end mb-14 sm:mb-20">
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-none text-foreground">
            Contact us
          </h1>
          <p className="text-sm sm:text-base text-foreground-muted leading-relaxed max-w-md md:justify-self-end md:text-right">
            Military precision brought to building services. Whether it&apos;s a maintenance
            contract, a one-off repair or a full refurbishment, get in touch and we&apos;ll be
            glad to help.
          </p>
        </div>

        <div className="border-t border-border-subtle pt-10 sm:pt-14 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16">
          <div>
            <h3 className="font-montserrat text-xs tracking-[0.24em] uppercase text-foreground-light mb-4">
              General enquiries
            </h3>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs text-foreground-light uppercase tracking-wide mb-1">Phone</p>
                <ContactTextLink text="01732 752144" className="text-base sm:text-lg" />
              </div>
              <div>
                <p className="text-xs text-foreground-light uppercase tracking-wide mb-1">Email</p>
                <ContactTextLink text="admin@jbslondon.co.uk" className="text-base sm:text-lg" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-montserrat text-xs tracking-[0.24em] uppercase text-foreground-light mb-4">
              Why JBS London
            </h3>
            <ul className="flex flex-col gap-2 text-sm sm:text-base text-foreground-muted">
              <li>A single point of contact for mechanical, electrical, HVAC, plumbing and building fabric services</li>
              <li>Planned preventative maintenance and 24/7 support</li>
              <li>Emergency repairs and major refurbishments</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 sm:mt-20 flex flex-wrap gap-4">
          <Link href="mailto:admin@jbslondon.co.uk">
            <Button variant="accent-fill" radius="xl" className="px-6 py-3">
              Send an email
            </Button>
          </Link>
          <Link href="tel:01732752144">
            <Button variant="accent-outline" radius="xl" className="px-6 py-3">
              Call us
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}