"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  { label: "Dictionary", href: "/dictionary" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-6 top-28 z-40 hidden lg:flex flex-col items-start gap-6">
      {sidebarItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group flex items-center gap-3 text-sm transition-colors duration-200 ${
              isActive
                ? "text-green"
                : "text-mid-gray hover:text-dark"
            }`}
          >
            <span
              className={`block w-6 h-px transition-all duration-200 ${
                isActive
                  ? "bg-green w-8"
                  : "bg-light-gray group-hover:bg-mid-gray group-hover:w-8"
              }`}
            />
            <span className="font-body-en tracking-wide">{item.label}</span>
          </Link>
        );
      })}
    </aside>
  );
}
