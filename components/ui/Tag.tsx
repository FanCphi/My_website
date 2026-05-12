interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "green";
  className?: string;
}

export default function Tag({ children, variant = "default", className = "" }: TagProps) {
  const base =
    "inline-block px-3 py-1 text-xs font-mono rounded-sm transition-colors duration-200";

  const variants = {
    default: "bg-light-gray text-dark/70 hover:bg-baiqing/30",
    green: "bg-xiake/10 text-xiake hover:bg-xiake/20",
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
