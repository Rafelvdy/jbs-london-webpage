import type { Service } from "@/data/services-data";

export default function ServiceDetailCard({ service }: { service: Service }) {
  if (service.needsContent) {
    return (
      <div className="rounded-3xl bg-background-dark p-8 flex flex-col justify-center">
        <h3 className="text-2xl font-medium text-foreground mb-3">{service.title}</h3>
        <p className="text-foreground-light leading-relaxed">{service.description}</p>
        <p className="mt-6 text-xs uppercase tracking-widest text-accent">
          Content needed — no detail copy or points list exists yet for this service.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-background-dark p-8 flex flex-col justify-center">
      <h3 className="text-2xl font-medium text-foreground mb-4">{service.title}</h3>
      <p className="text-foreground-light leading-relaxed mb-6">{service.description}</p>
      <div className="grid grid-cols-2 gap-3 text-sm text-foreground">
        {service.points.map((point) => (
          <div key={point} className="flex gap-2">
            <span className="text-accent">&mdash;</span>
            {point}
          </div>
        ))}
      </div>
    </div>
  );
}