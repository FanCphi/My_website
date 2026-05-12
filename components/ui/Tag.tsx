interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "green";
  className?: string;
}

export default function Tag({ children, variant = "default", className = "" }: TagProps) {
  const base =
    "inline-block px-3 py-1 text-xs font-mono rounded-sm transition-colors duration-200";

  const variants = {
    default: "bg-light-gray text-dark/70 hover:bg-mid-gray/30",
    green: "bg-green/10 text-green hover:bg-green/20",
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
