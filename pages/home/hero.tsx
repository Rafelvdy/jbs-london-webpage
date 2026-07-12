// Hero.jsx
import Image from 'next/image';
import Carousel from '@/components/Carousel';

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-end py-8">
      <div className="relative w-[80vw]">

        <div className="flex items-end gap-56 font-light text-8xl font-montserrat text-accent mb-5 relative z-0 pl-[5%]">
        <h1>JBS</h1>
        <h1>London</h1>
        </div>

        <div className="relative w-full h-[min(65vh,600px)] bg-background-dark overflow-visible rounded-3xl">
            <div className="bg-background w-[25vw] aspect-video absolute bottom-0 right-0 rounded-s-3xl rounded-b-none overflow-hidden">
                <div className="absolute top-1 left-1 bottom-1 right-0 bg-background-dark rounded-s-3xl rounded- overflow-hidden">
                    <Carousel />
                </div>
            </div>

          <Image
            src="/hero/cheese-grater-hero.webp"
            alt="Cheese Grater Building Project"
            width={450}
            height={900}
            className="absolute bottom-0 left-[10%] h-[calc(100%+10rem)] w-auto z-10 opacity-95"
          />
        </div>

      </div>
    </section>
  );
}