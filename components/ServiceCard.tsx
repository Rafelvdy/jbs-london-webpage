interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  className = "",
}: ServiceCardProps) {
  return (
    <div
      className={`bg-foreground-muted rounded-2xl p-6 flex flex-col justify-between min-h-40 ${className}`}
    >
      <h3 className="text-background-light text-xl font-label font-semibold leading-tight">
        {title}
      </h3>
      <p className="text-background-dark text-sm leading-relaxed mt-4">
        {description}
      </p>
    </div>
  );
}
