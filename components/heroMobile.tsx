'use client';

import Image from 'next/image';
import ContactTextLink from '@/components/ContactTextLink';
import styles from './heroMobile.module.css';
import { useLayoutEffect, useRef, useState } from 'react';

export default function HeroMobile() {
  const jbsRef = useRef<HTMLHeadingElement>(null);
  const londonRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  // Tracks the pixel shift needed to align the image with the JBS/LONDON gap,
  // measured from the real rendered layout instead of guessed per-breakpoint margins.
  const [imageOffset, setImageOffset] = useState(0);

  // Extra rightward nudge applied only on narrow (mobile) widths, on top of gap-centering.
  const MOBILE_BREAKPOINT = 501;
  const MOBILE_EXTRA_OFFSET = 15;

  useLayoutEffect(() => {
    const updateOffset = () => {
      const jbs = jbsRef.current;
      const london = londonRef.current;
      const card = cardRef.current;
      if (!jbs || !london || !card) return;

      const jbsRect = jbs.getBoundingClientRect();
      const londonRect = london.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();

      const gapCenter = (jbsRect.right + londonRect.left) / 2;
      const cardCenter = cardRect.left + cardRect.width / 2;
      const extra = window.innerWidth < MOBILE_BREAKPOINT ? MOBILE_EXTRA_OFFSET : 0;
      setImageOffset(gapCenter - cardCenter + extra);
    };

    updateOffset();

    const resizeObserver = new ResizeObserver(updateOffset);
    if (jbsRef.current) resizeObserver.observe(jbsRef.current);
    if (londonRef.current) resizeObserver.observe(londonRef.current);
    if (cardRef.current) resizeObserver.observe(cardRef.current);

    window.addEventListener('resize', updateOffset);
    document.fonts?.ready.then(updateOffset);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateOffset);
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-10 gap-6">
      <div className={`${styles.heroTitle} w-full flex items-center justify-end -mb-3 gap-[32vw]`}>
        <h1 ref={jbsRef} className="font-light text-4xl sm:text-4xl md:text-5xl font-montserrat text-accent">JBS</h1>
        <h1 ref={londonRef} className="font-light text-4xl sm:text-4xl md:text-5xl font-montserrat text-accent">LONDON</h1>
      </div>
      <div ref={cardRef} className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl bg-background-dark rounded-3xl flex flex-col items-center justify-end overflow-visible sm:p-8">

        <div
          className="relative w-[90%] sm:w-[95%] md:w-[85%] aspect-3/4 -mt-24 sm:-mt-32 md:-mt-36"
          style={{ transform: `translateX(${imageOffset}px)` }}
        >

          <Image
            src="/hero/cheese-grater-hero.webp"
            alt="Cheese Grater Building Project"
            fill
            sizes="(min-width: 768px) 33vw, 70vw"
            priority
            className="object-contain"
          />
        </div>
      </div>

      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl bg-[#EFE7D8] rounded-3xl flex flex-col p-6 sm:p-8 gap-4 shadow-sm">
        <p className="font-sans text-sm sm:text-base text-foreground-muted">
          Mechanical and electrical building management solutions
        </p>
        <div className="self-end text-right">
          <ContactTextLink className="text-end w-full" text="admin@jbslondon.co.uk" />
          <ContactTextLink className="text-end w-full" text="01732 752144" />
        </div>
      </div>
    </div>
  );
}