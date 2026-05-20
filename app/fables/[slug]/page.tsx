"use client";

import { use, useMemo } from "react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import PatternDivider from "@/components/ui/PatternDivider";
import { fables } from "@/lib/fables-data";
import { notFound } from "next/navigation";

export default function FablePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const fable = useMemo(() => fables.find((f) => f.slug === slug), [slug]);

  if (!fable) {
    notFound();
  }

  const storyParagraphs = fable.story.split("\n\n");

  return (
    <div className="bg-light min-h-screen">
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-light/80 backdrop-blur-md border-b border-light-gray/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/fables"
              className="text-mid-gray hover:text-dark transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </Link>
            <Link
              href="/"
              className="font-heading text-lg font-semibold tracking-tight text-dark hover:text-green transition-colors"
            >
              Mr.Green
            </Link>
          </div>
          <span className="text-sm text-mid-gray font-heading-cn hidden sm:block truncate max-w-[200px]">
            {fable.title}
          </span>
        </div>
      </nav>

      {/* Fable Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono text-green/70 tracking-wider">
                {fable.domain}
              </span>
              <span className="text-mid-gray/30">·</span>
              <span className="text-xs font-mono text-mid-gray/70 tracking-wider">
                {fable.concept}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-heading-cn text-4xl md:text-5xl lg:text-6xl font-bold text-dark tracking-wider mb-8">
              {fable.title}
            </h1>
          </FadeIn>

          {fable.epigraph && (
            <FadeIn delay={0.2}>
              <blockquote className="text-dark/40 text-base md:text-lg font-body-cn italic border-l-2 border-green/30 pl-5">
                {fable.epigraph}
              </blockquote>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Story */}
      <section className="pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          {storyParagraphs.map((para, i) => (
            <FadeIn key={i} delay={0.05 * i}>
              <p className="text-dark/80 text-base md:text-lg leading-[2] font-body-cn mb-6">
                {para}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="py-8">
        <PatternDivider variant="cloud" />
      </div>

      {/* Concept Explanation */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="font-heading text-xs font-mono text-mid-gray/60 tracking-[0.2em] uppercase mb-8">
              概念
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="text-dark/75 text-base md:text-lg leading-[2] font-body-cn space-y-4">
              {fable.explanation.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Metaphor Mapping */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="font-heading text-xs font-mono text-mid-gray/60 tracking-[0.2em] uppercase mb-8">
              隐喻对应
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {fable.mapping.map((item, i) => (
              <FadeIn key={i} delay={0.05 * i}>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-3 border-b border-light-gray/30">
                  <span className="font-body-cn text-dark/80 text-sm md:text-base shrink-0 sm:w-48">
                    {item.element}
                  </span>
                  <span className="hidden sm:block text-mid-gray/30">→</span>
                  <span className="font-body-cn text-dark/50 text-sm md:text-base">
                    {item.meaning}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-24 px-6 text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-6">
            <Link
              href="/fables"
              className="inline-flex items-center gap-2 text-sm text-mid-gray hover:text-green transition-colors font-mono"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              回到寓言
            </Link>
            <span className="text-mid-gray/30">|</span>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-mid-gray hover:text-green transition-colors font-mono"
            >
              回到首页
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
