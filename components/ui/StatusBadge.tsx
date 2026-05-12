"use client";

import { motion } from "framer-motion";

interface StatusBadgeProps {
  status: string;
  variant?: "online" | "default";
  className?: string;
}

export default function StatusBadge({
  status,
  variant = "default",
  className = "",
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase ${className}`}
    >
      {variant === "online" && (
        <motion.span
          className="inline-block w-2 h-2 rounded-full bg-green"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <span className="text-mid-gray">{status}</span>
    </span>
  );
}
