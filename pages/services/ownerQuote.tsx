import Image from "next/image";

export default function OwnerQuote() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto bg-background-dark rounded-3xl p-8 sm:p-10 md:p-12 flex flex-col sm:flex-row items-center gap-8">
        <div className="relative shrink-0 w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden">
          <Image
            src="/employees/Wayne.jpeg"
            alt="Wayne Bruce, Managing Director of JBS London"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-foreground font-sans text-base sm:text-lg leading-relaxed">
            &ldquo;We started JBS London because we knew there was a better way to deliver building services.
            Our clients come to us because they want one team they can trust to handle everything
            and that&apos;s exactly what we deliver, with the discipline and commitment our Military
            background demands.&rdquo;
          </p>
          <div>
            <p className="text-foreground font-sans font-medium text-sm sm:text-base">Wayne Bruce</p>
            <p className="text-foreground-muted font-sans text-sm">Managing Director, JBS London</p>
          </div>
        </div>
      </div>
    </section>
  );
}
