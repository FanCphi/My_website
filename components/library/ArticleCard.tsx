"use client";

import Tag from "@/components/ui/Tag";
import type { Article } from "@/types/article";

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
}

export default function ArticleCard({ article, onClick }: ArticleCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-5 rounded-lg border border-light-gray/50 bg-card hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
    >
      <h3 className="font-heading text-base font-semibold text-dark mb-2 group-hover:text-green transition-colors duration-200">
        {article.title}
      </h3>

      <p className="text-dark/60 text-sm leading-relaxed mb-4 line-clamp-2">
        {article.summary}
      </p>

      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2 min-w-0">
          {article.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <span className="text-mid-gray text-xs font-mono whitespace-nowrap shrink-0">
          {article.date}
        </span>
      </div>
    </button>
  );
}
