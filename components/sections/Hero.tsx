"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Brand Name */}
        <FadeIn>
          <motion.h1
            className="font-heading text-6xl md:text-8xl font-bold tracking-tight text-dark mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Mr.Green
          </motion.h1>
        </FadeIn>

        {/* Slogan */}
        <FadeIn delay={0.2}>
          <p className="font-body-en text-xl md:text-2xl text-mid-gray tracking-wide mb-8">
            Let idea free
          </p>
        </FadeIn>

        {/* Quote */}
        <FadeIn delay={0.3}>
          <blockquote className="text-sm md:text-base text-mid-gray/80 italic mb-10 max-w-xl mx-auto font-body-en">
            &ldquo;The important thing is not to stop questioning. Curiosity
            has its own reason for existence.&rdquo;
            <span className="block mt-1 not-italic text-mid-gray/60 text-xs">
              — Albert Einstein
            </span>
          </blockquote>
        </FadeIn>

        {/* Intro */}
        <FadeIn delay={0.4}>
          <p className="text-dark/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            一个自由探索者，在产品思维、AI 时代与区块链安全之间寻找交汇点。
            相信好的想法值得被释放，好的产品值得被看见。
          </p>
        </FadeIn>

        {/* Social Links */}
        <FadeIn delay={0.5}>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-mono border border-light-gray rounded-md hover:border-green hover:text-green transition-all duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="mailto:19155111230@163.com"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-mono border border-light-gray rounded-md hover:border-green hover:text-green transition-all duration-200"
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              Email
            </a>
          </div>
        </FadeIn>

        {/* Scroll Indicator */}
        <FadeIn delay={0.7}>
          <motion.div
            className="mt-16"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="w-5 h-5 mx-auto text-mid-gray/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
