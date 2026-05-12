"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import CategoryTabs from "@/components/library/CategoryTabs";
import ArticleCard from "@/components/library/ArticleCard";
import ArticleModal from "@/components/library/ArticleModal";
import { mockArticles } from "@/lib/mock-data";
import type { Article, ArticleCategory } from "@/types/article";

export default function Library() {
  const [activeCategory, setActiveCategory] = useState<
    ArticleCategory | "all"
  >("all");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles =
    activeCategory === "all"
      ? mockArticles
      : mockArticles.filter((a) => a.category === activeCategory);

  return (
    <section id="library" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
            Library
          </h2>
          <p className="text-mid-gray mb-8 max-w-xl">
            我的内容库，记录思考、研究与生活中的碎片。
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-8">
            <CategoryTabs
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
        </FadeIn>

        <div className="space-y-4">
          {filteredArticles.map((article, i) => (
            <FadeIn key={article.id} delay={i * 0.05}>
              <ArticleCard
                article={article}
                onClick={() => setSelectedArticle(article)}
              />
            </FadeIn>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <FadeIn>
            <p className="text-mid-gray text-center py-12">
              暂无相关文章。
            </p>
          </FadeIn>
        )}
      </div>

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
}
