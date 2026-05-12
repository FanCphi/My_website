"use client";

import FadeIn from "@/components/ui/FadeIn";
import Tag from "@/components/ui/Tag";

interface ResearchTopic {
  title: string;
  description: string;
  tags: string[];
}

const topics: ResearchTopic[] = [
  {
    title: "AI for Business",
    description:
      "探索人工智能在商业决策、产品设计和用户体验中的应用。关注大语言模型、Agent 技术如何重塑产品形态。",
    tags: ["LLM", "AI Agent", "Product Design"],
  },
  {
    title: "Product Thinking",
    description:
      "从用户需求出发，用产品思维解决问题。研究商业模式创新、增长策略和产品生命周期管理。",
    tags: ["User Research", "Growth", "Business Model"],
  },
  {
    title: "Blockchain Security",
    description:
      "区块链系统的安全分析与防护。研究智能合约审计、DeFi 协议安全和链上数据分析。",
    tags: ["Smart Contract", "DeFi", "Security Audit"],
  },
  {
    title: "Digital Humanities",
    description:
      "数字技术与人文研究的交叉领域。探索计算方法在文化研究、历史分析中的应用。",
    tags: ["NLP", "Cultural Analytics", "Archives"],
  },
];

export default function Research() {
  return (
    <section id="research" className="py-24 px-6 bg-light-gray/20">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
            Research Interests
          </h2>
          <p className="text-mid-gray mb-12 max-w-xl">
            我关注的研究方向，在技术与人文之间寻找交叉点。
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic, i) => (
            <FadeIn key={topic.title} delay={i * 0.1}>
              <div className="bg-card p-6 rounded-lg border border-light-gray/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-heading text-lg font-semibold text-dark mb-3">
                  {topic.title}
                </h3>
                <p className="text-dark/70 text-sm leading-relaxed mb-4">
                  {topic.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {topic.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
