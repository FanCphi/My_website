"use client";

import { ArticleCategory, categoryLabels } from "@/types/article";

interface CategoryTabsProps {
  active: ArticleCategory | "all";
  onChange: (category: ArticleCategory | "all") => void;
}

const categories: (ArticleCategory | "all")[] = [
  "all",
  "product",
  "ai",
  "research",
  "life",
  "misc",
];

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="flex gap-1 overflow-x-auto pb-2 -mx-1 px-1">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`
            px-4 py-2 text-sm font-mono rounded-sm whitespace-nowrap transition-colors duration-200
            ${
              active === cat
                ? "bg-dark text-light"
                : "text-mid-gray hover:text-dark hover:bg-light-gray/50"
            }
          `}
        >
          {categoryLabels[cat]}
        </button>
      ))}
    </div>
  );
}
