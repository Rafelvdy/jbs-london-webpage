'use client';

import { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import type { Service } from "@/data/services-data";

type ServiceSelectorProps = {
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
}: ServiceSelectorProps) {
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
    <div className="bg-background-dark rounded-3xl p-3 flex flex-col gap-1 max-w-120">
      {services.map((service, index) => {
        const isSelected = index === selectedIndex;

        return (
          <button
            key={service.id}
            onClick={() => handleClick(index)}
            aria-current={isSelected}
            className={`text-center px-5 py-2.5 text-lg rounded-xl transition-colors duration-200 flex items-center justify-between ${
              isSelected
                ? "bg-background-light text-foreground"
                : "text-foreground-light hover:text-foreground"
            }`}
          >
            <span>{service.title}</span>
            {isSelected && <ChevronRight className="ml-3" />}
          </button>
        );
      })}
    </div>
  );
}