"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

interface Entry {
  word: string;
  definition: string;
}

const entries: Entry[] = [
  {
    word: "太阳",
    definition:
      "为电影情节渲染幸福感的叙事道具。随着剧情发展，它会被暴雨和黑夜暂时取代。",
  },
  {
    word: "时间",
    definition:
      "人类为感知变化而发明的度量工具。它并不存在，却解释了一切。",
  },
  {
    word: "城市",
    definition:
      "由无数陌生人的故事叠加而成的巨型叙事装置。你永远只能读到其中极小的一个章节。",
  },
  {
    word: "雨",
    definition:
      "天空的情绪表达，也是诗人最忠实的灵感供应商。",
  },
  {
    word: "门",
    definition:
      "连接两个世界的仪式性通道。推开它意味着做出选择，关上它意味着承担后果。",
  },
  {
    word: "影子",
    definition:
      "光的缺席所创造的忠实伴侣。它比任何事物都更了解你的轮廓，却从不评价。",
  },
  {
    word: "窗户",
    definition:
      "让室内与室外对话的媒介。框架本身即是风景的一部分。",
  },
  {
    word: "地图",
    definition:
      "对真实世界的抽象再创造。它既描绘现实，又塑造想象，最终比领土本身更具权威。",
  },
  {
    word: "镜子",
    definition:
      "与自我相遇的界面。每次对视都是一场无声的对话，而你永远无法确定谁先开口。",
  },
  {
    word: "钥匙",
    definition:
      "一个微小的权力象征。掌握它意味着拥有进入某个世界的许可，丢失它则意味着被那个世界驱逐。",
  },
];

function ScrollHint() {
  return (
    <motion.div
      className="mt-12"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        className="w-5 h-5 mx-auto text-mid-gray/40"
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
  );
}

export default function DictionaryPage() {
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
            辞典
          </span>
        </div>
      </nav>

      {/* Slogan Screen */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-6 tracking-wide">
              Dictionary
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-heading-cn text-5xl md:text-7xl lg:text-8xl font-bold text-dark tracking-widest mb-6">
              语言即世界
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-sm md:text-base text-mid-gray font-body-en italic mb-2">
              The limits of my language mean the limits of my world.
            </p>
            <p className="text-xs text-mid-gray/60 font-body-en">
              — Ludwig Wittgenstein
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="mt-10 text-dark/50 text-sm max-w-md mx-auto leading-relaxed">
              用个人化的定义重新诠释日常词汇。
              <br />
              每个词条都是对世界的一次重新认知。
            </p>
          </FadeIn>

          <FadeIn delay={0.7}>
            <ScrollHint />
          </FadeIn>
        </div>
      </section>

      {/* Entries */}
      {entries.map((entry, i) => (
        <section
          key={entry.word}
          className="min-h-screen flex items-center justify-center px-6"
        >
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <span className="inline-block text-xs font-mono text-mid-gray/40 mb-8 tracking-widest">
                {String(i + 1).padStart(2, "0")} / {String(entries.length).padStart(2, "0")}
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-heading-cn text-6xl md:text-8xl lg:text-9xl font-bold text-dark mb-10 tracking-wider">
                {entry.word}
              </h2>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="text-dark/70 text-lg md:text-xl lg:text-2xl leading-relaxed font-body-cn">
                {entry.definition}
              </p>
            </FadeIn>

            {i < entries.length - 1 && (
              <FadeIn delay={0.4}>
                <div className="mt-16 flex justify-center">
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <svg
                      className="w-4 h-4 text-mid-gray/30"
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
                </div>
              </FadeIn>
            )}
          </div>
        </section>
      ))}

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
