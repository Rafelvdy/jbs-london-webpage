import { ButtonHTMLAttributes } from "react";

type Variant = "accent-outline" | "foreground-fill";
type Radius = "md" | "lg" | "xl" | "full";

const variantClasses: Record<Variant, string> = {
  "accent-outline": "border-2 border-accent text-foreground hover:bg-accent hover:text-background transition-colors duration-200",
  "foreground-fill": "bg-foreground-muted text-background font-medium hover:bg-foreground hover:text-background transition-colors duration-200",
};

const radiusClasses: Record<Radius, string> = {
  md: "rounded-md",
  lg: "rounded-xl",
  xl: "rounded-3xl",
  full: "rounded-full",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  radius?: Radius;
}

export default function Button({
  variant = "foreground-fill",
  radius = "full",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-1 cursor-pointer ${variantClasses[variant]} ${radiusClasses[radius]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
