"use client";

import Modal from "@/components/ui/Modal";
import Tag from "@/components/ui/Tag";
import type { Article } from "@/types/article";

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  if (!article) return null;

  return (
    <Modal isOpen={!!article} onClose={onClose}>
      <div className="p-5 md:p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-mid-gray text-sm font-mono">
              {article.date}
            </span>
            <button
              onClick={onClose}
              className="text-mid-gray hover:text-dark transition-colors p-1"
              aria-label="关闭"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <h2 className="font-heading text-2xl font-bold text-dark mb-3">
            {article.title}
          </h2>

          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-light-gray mb-6" />

        {/* Content */}
        <div className="prose prose-sm max-w-none text-dark/80 leading-relaxed">
          {article.content.split("\n").map((line, i) => {
            if (line.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="font-heading text-lg font-semibold text-dark mt-8 mb-3 first:mt-0"
                >
                  {line.replace("## ", "")}
                </h2>
              );
            }
            if (line.startsWith("### ")) {
              return (
                <h3
                  key={i}
                  className="font-heading text-base font-semibold text-dark mt-6 mb-2"
                >
                  {line.replace("### ", "")}
                </h3>
              );
            }
            if (line.startsWith("```")) {
              return null;
            }
            if (line.startsWith("- ")) {
              return (
                <li key={i} className="ml-4 mb-1 text-sm">
                  {line.replace("- ", "")}
                </li>
              );
            }
            if (line.startsWith("> ")) {
              return (
                <blockquote
                  key={i}
                  className="border-l-2 border-green pl-4 italic text-dark/60 my-4"
                >
                  {line.replace("> ", "")}
                </blockquote>
              );
            }
            if (line.trim() === "") {
              return <div key={i} className="h-2" />;
            }
            if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ") || line.startsWith("4. ") || line.startsWith("5. ")) {
              return (
                <li key={i} className="ml-4 mb-1 text-sm list-decimal">
                  {line.replace(/^\d+\.\s/, "")}
                </li>
              );
            }
            // Inline code
            const parts = line.split(/(`[^`]+`)/);
            if (parts.length > 1) {
              return (
                <p key={i} className="mb-3 text-sm leading-relaxed">
                  {parts.map((part, j) =>
                    part.startsWith("`") && part.endsWith("`") ? (
                      <code
                        key={j}
                        className="bg-light-gray/60 px-1.5 py-0.5 rounded-sm text-xs font-mono"
                      >
                        {part.slice(1, -1)}
                      </code>
                    ) : (
                      <span key={j}>{part}</span>
                    )
                  )}
                </p>
              );
            }
            // Bold text
            const boldParts = line.split(/(\*\*[^*]+\*\*)/);
            if (boldParts.length > 1) {
              return (
                <p key={i} className="mb-3 text-sm leading-relaxed">
                  {boldParts.map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={j} className="font-semibold text-dark">
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      <span key={j}>{part}</span>
                    )
                  )}
                </p>
              );
            }
            return (
              <p key={i} className="mb-3 text-sm leading-relaxed">
                {line}
              </p>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}
