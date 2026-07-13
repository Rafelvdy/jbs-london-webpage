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
      className={`bg-foreground-light cursor-pointer hover:bg-foreground-muted transition-colors ease-in-out rounded-2xl p-6 flex flex-col justify-between min-h-40 ${className}`}
    >
      <h3 className="text-background-light text-xl font-sans leading-tight">
        {title}
      </h3>
      <p className="text-background-dark font-sans text-sm leading-relaxed mt-4">
        {description}
      </p>
    </div>
  );
}
