import Link from "next/link";
import Button from "@/components/Button";

export default function AboutSection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-sans font-light text-foreground">
            About JBS London
          </h2>
          <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
            JBS London provides a complete building maintenance solution for commercial properties.
            We cover mechanical, electrical, HVAC, plumbing and building fabric. Our clients
            have one trusted contractor for everything their property needs.
          </p>
          <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
            We deliver planned preventative maintenance programmes, reactive maintenance, 24/7
            support, compliance works, repairs, installations and full refurbishments. From a
            single reactive call-out to a long-term PPM contract, we bring the same level of
            commitment and precision to every job.
          </p>
          <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
            JBS operates across London and the South East, with our head office in Kent. We
            continue to grow within the M&amp;E sector and pride ourselves on long-lasting client
            relationships built on reliability, transparency and quality workmanship.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-sans font-light text-foreground">
            Our Background
          </h2>
          <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
            JBS London was founded with a clear purpose. To bring military-standard discipline,
            work ethic and attention to detail to the building services industry. We have committed
            to taking on ex-military personnel and re-training them into highly skilled engineers,
            who quickly become assets to the company and to our clients.
          </p>
          <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
            That background shapes everything we do. Our engineers are thorough, reliable and
            accountable. We show up when we say we will, we communicate clearly, and we hold
            ourselves to a high standard on every job, because that&apos;s what our clients
            deserve.
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-12 sm:mt-16 bg-background-dark rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-foreground font-sans font-medium text-base sm:text-lg">
            More than just a contractor.
          </p>
          <p className="text-foreground-muted font-sans text-sm sm:text-base mt-1">
            Find out about our commitment to veterans, sustainability, the arts and ethical business.
          </p>
        </div>
        <Link href="/ethos" className="shrink-0">
          <Button variant="foreground-fill" radius="full" className="px-6 py-2 whitespace-nowrap">
            Our ethos &amp; values
          </Button>
        </Link>
      </div>
    </section>
  );
}
