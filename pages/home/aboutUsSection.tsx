import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center gap-3 w-full px-4 sm:px-8 py-16 sm:py-20 overflow-hidden">
      <Image
        src="/army-man-enh.png"
        alt=""
        width={384}
        height={500}
        className="absolute right-0 bottom-0 h-full w-auto z-0 opacity-20 sm:opacity-40 md:opacity-55"
        aria-hidden="true"
      />
      <h1 className="flex flex-row flex-wrap justify-center text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl gap-3 font-display z-1">
        <span className="text-accent tracking-[10%]">Military precision</span>
        <span className="font-light font-sans text-foreground">brought to building services.</span>
      </h1>
      <p className="max-w-5xl mt-5 text-center text-sm sm:text-base text-foreground-muted">
        We pride ourselves on our long lasting relationships with our clients and
        focusing on a strong client focus by providing a wide range of service
        provisions with a continual commitment to develop best practises within
        all aspect of our business. We have utilised our Military background to
        bring a fantastic level of service, commitment and winning attitude to
        every task we undertake.
      </p>
      <Button variant="foreground-fill" radius="full" className="mt-10 self-center px-8 py-3">
        Find out more about us
      </Button>
    </section>
  );
}