"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { fables } from "@/lib/fables-data";

export default function FablesPage() {
  return (
    <div className="bg-light min-h-screen">
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-light/80 backdrop-blur-md border-b border-light-gray/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-heading text-lg font-semibold tracking-tight text-dark hover:text-green transition-colors"
          >
            Mr.Green
          </Link>
          <span className="text-sm text-mid-gray font-heading-cn">
            寓言
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-6 tracking-wide">
              Fables
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-heading-cn text-5xl md:text-7xl lg:text-8xl font-bold text-dark tracking-widest mb-6">
              以故事理解世界
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-sm md:text-base text-mid-gray font-body-en italic mb-2">
              The best way to understand a concept is to forget you are learning it.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-10 mx-auto max-w-lg text-left bg-dark/[0.03] border border-light-gray/50 rounded-sm p-6">
              <p className="text-xs font-mono text-mid-gray/60 mb-3 tracking-wider uppercase">
                Prompt
              </p>
              <p className="text-dark/60 text-sm leading-relaxed font-body-cn">
                请你从某个领域里，选择一个研究生水平的概念。然后写一个寓言故事，用间接的方式把这个概念讲清楚。不要一开始就说明答案，尽量到故事快结束的时候，才让人意识到原来讲的是这个概念。故事结束后，再解释这个概念，以及故事里的隐喻分别对应什么。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Fable Cards */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {fables.map((fable, i) => (
              <FadeIn key={fable.slug} delay={i * 0.1}>
                <Link
                  href={`/fables/${fable.slug}`}
                  className="block p-6 md:p-8 rounded-lg border border-light-gray/50 bg-card hover:shadow-md hover:-translate-y-1 transition-all duration-300 group pattern-ruyi"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-mid-gray/50 tracking-wider">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-mono text-green/70 tracking-wider">
                      {fable.domain}
                    </span>
                    <span className="text-mid-gray/30">·</span>
                    <span className="text-xs font-mono text-mid-gray/70 tracking-wider">
                      {fable.concept}
                    </span>
                  </div>

                  <h2 className="font-heading-cn text-2xl md:text-3xl font-bold text-dark mb-3 group-hover:text-green transition-colors duration-200">
                    {fable.title}
                  </h2>

                  {fable.epigraph && (
                    <p className="text-dark/40 text-sm font-body-cn italic">
                      "{fable.epigraph}"
                    </p>
                  )}
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-24 px-6 text-center">
        <FadeIn>
          <p className="text-mid-gray/50 text-sm mb-6 font-heading-cn">
            — 待续 —
          </p>
          <Link
            href="/"
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
            回到首页
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
