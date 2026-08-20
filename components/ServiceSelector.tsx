'use client';

import { useEffect, useRef } from "react";
import type { Service } from "@/data/services-data";

type ServiceListProps = {
  services: Service[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  intervalMs?: number;
};

export default function ServiceSelector({
  services,
  selectedIndex,
  onSelect,
  intervalMs = 4000,
}: ServiceListProps) {
  const pausedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (pausedRef.current) return;

    timerRef.current = setInterval(() => {
      onSelect((selectedIndex + 1) % services.length);
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [selectedIndex, services.length, intervalMs, onSelect]);

  const handleClick = (index: number) => {
    pausedRef.current = true;
    if (timerRef.current) clearInterval(timerRef.current);
    onSelect(index);
  };

  return (
    <div className="bg-background-dark rounded-2xl sm:rounded-3xl p-2 sm:p-3 flex flex-col gap-1 h-fit">
      {services.map((service, index) => {
        const isSelected = index === selectedIndex;

        return (
          <button
            key={service.id}
            onClick={() => handleClick(index)}
            aria-current={isSelected}
            className={`text-left px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl transition-colors duration-200 flex items-center justify-between gap-3 text-sm sm:text-base ${
              isSelected
                ? "bg-background-light text-foreground font-medium"
                : "text-foreground-light hover:text-foreground cursor-pointer"
            }`}
          >
            <span className="min-w-0 break-words">{service.title}</span>
            {isSelected && <span className="shrink-0">&rarr;</span>}
          </button>
        );
      })}
    </div>
  );
}