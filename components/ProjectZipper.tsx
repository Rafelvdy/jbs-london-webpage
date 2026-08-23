'use client';

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

export type Project = {
  src: string;
  name: string;
};

// Tracks the live column count so each image's scroll direction matches
// the column it's actually rendered in at the current breakpoint.
// Keep these breakpoints in sync with the grid-cols-* classes below.
function useColumnCount() {
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const mqSm = window.matchMedia("(min-width: 640px)");

    const update = () => {
      if (mqLg.matches) setColumns(4);
      else if (mqSm.matches) setColumns(3);
      else setColumns(2);
    };

    update();
    mqLg.addEventListener("change", update);
    mqSm.addEventListener("change", update);
    return () => {
      mqLg.removeEventListener("change", update);
      mqSm.removeEventListener("change", update);
    };
  }, []);

  return columns;
}

function ZipperImage({
  project,
  columnIndex,
  progress,
  offset,
}: {
  project: Project;
  columnIndex: number;
  progress: MotionValue<number>;
  offset: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const direction = columnIndex % 2 === 0 ? 1 : -1;
  const range = prefersReducedMotion ? 0 : offset;

  const y = useTransform(
    progress,
    [0, 1],
    [range * direction, -range * direction]
  );

  return (
    <motion.div style={{ y }}>
      <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
        <Image
          src={project.src}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <p className="absolute bottom-3 left-3 right-3 text-white font-montserrat font-medium text-xs sm:text-sm tracking-wide truncate">
          {project.name}
        </p>
      </div>
    </motion.div>
  );
}

type ProjectsZipperProps = {
  projects: Project[];
  /** How far images travel in px. Smaller = subtler. */
  offset?: number;
};

export default function ProjectsZipper({
  projects,
  offset = 60,
}: ProjectsZipperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const columns = useColumnCount();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="px-4 sm:px-6 md:px-10 py-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {projects.map((project, i) => (
          <ZipperImage
            key={project.src}
            project={project}
            columnIndex={i % columns}
            progress={scrollYProgress}
            offset={offset}
          />
        ))}
      </div>
    </section>
  );
}