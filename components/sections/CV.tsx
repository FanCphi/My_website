"use client";

import FadeIn from "@/components/ui/FadeIn";
import Tag from "@/components/ui/Tag";

interface CVSection {
  title: string;
  items: {
    primary: string;
    secondary?: string;
    detail?: string;
  }[];
}

const cvSections: CVSection[] = [
  {
    title: "Education",
    items: [
      {
        primary: "XX 大学",
        secondary: "硕士 · 计算机科学与技术",
        detail: "2024 — 2027（在读）",
      },
      {
        primary: "XX 大学",
        secondary: "学士 · 软件工程",
        detail: "2020 — 2024",
      },
    ],
  },
  {
    title: "Experience",
    items: [
      {
        primary: "XX 科技公司",
        secondary: "AI 产品实习生",
        detail: "2025.06 — 2025.09",
      },
      {
        primary: "XX 实验室",
        secondary: "研究助理 · 区块链安全方向",
        detail: "2024.03 — 2024.12",
      },
    ],
  },
  {
    title: "Publications",
    items: [
      {
        primary: "论文标题示例：基于 LLM 的智能合约漏洞检测方法研究",
        secondary: "第一作者 · 会议/期刊名称",
        detail: "2025",
      },
    ],
  },
  {
    title: "Awards",
    items: [
      {
        primary: "XX 竞赛 全国一等奖",
        detail: "2025",
      },
      {
        primary: "校级优秀毕业论文",
        detail: "2024",
      },
    ],
  },
];

const skills = [
  "Python",
  "TypeScript",
  "Solidity",
  "React",
  "Next.js",
  "LLM",
  "RAG",
  "数据分析",
  "产品设计",
  "用户研究",
];

export default function CV() {
  return (
    <section id="cv" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
                CV
              </h2>
              <p className="text-mid-gray max-w-xl">
                教育背景、研究经历与技能概览。
              </p>
            </div>
            <button className="px-5 py-2.5 bg-dark text-light text-sm font-mono rounded-sm hover:bg-dark/90 transition-colors duration-200 shrink-0 self-start sm:self-auto">
              Download PDF
            </button>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {cvSections.map((section, si) => (
            <FadeIn key={section.title} delay={si * 0.1}>
              <h3 className="font-heading text-lg font-semibold text-dark mb-6 pb-2 border-b border-light-gray">
                {section.title}
              </h3>
              <div className="space-y-5">
                {section.items.map((item, ii) => (
                  <div key={ii} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
                    <div className="flex-1">
                      <p className="text-dark font-medium text-sm">
                        {item.primary}
                      </p>
                      {item.secondary && (
                        <p className="text-dark/60 text-sm mt-0.5">
                          {item.secondary}
                        </p>
                      )}
                    </div>
                    {item.detail && (
                      <span className="text-mid-gray text-sm font-mono shrink-0">
                        {item.detail}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={cvSections.length * 0.1}>
            <h3 className="font-heading text-lg font-semibold text-dark mb-6 pb-2 border-b border-light-gray">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Tag key={skill} variant="green">
                  {skill}
                </Tag>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
