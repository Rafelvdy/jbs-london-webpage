import type { Service } from "@/data/services-data";
import { CircleSmall } from "lucide-react";

export default function ServiceDetailCard({ service }: { service: Service }) {
  return (
    <div className="rounded-2xl sm:rounded-3xl bg-foreground p-5 sm:p-6 md:p-8 flex flex-col justify-center h-full">
      <h3 className="text-xl text-background sm:text-2xl font-medium mb-3 sm:mb-4">
        {service.title}
      </h3>
      <p className="text-background-dark leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
        {service.description}
      </p>

      {service.needsContent ? (
        <p className="mt-4 sm:mt-6 text-xs uppercase text-accent tracking-widest">
          Content needed, no detail copy or points list exists yet for this
          service.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-x-3 gap-y-2 sm:gap-x-4 sm:gap-y-3 text-xs sm:text-sm text-background-light">
          {service.points.map((point) => (
            <div key={point} className="flex gap-1.5 sm:gap-2 items-start">
              <CircleSmall className="text-accent mt-0.5 shrink-0" size={10} />
              <span className="min-w-0 wrap-break">{point}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}