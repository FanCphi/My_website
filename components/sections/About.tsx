"use client";

import FadeIn from "@/components/ui/FadeIn";
import Tag from "@/components/ui/Tag";

const keywords = [
  "产品思维",
  "AI 时代",
  "商业分析",
  "区块链安全",
  "数字人文",
  "生活记录",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-12">
            About
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-5 text-dark/80 leading-relaxed text-base md:text-lg">
            <p>
              我是一个自由探索者，对世界充满好奇。在产品设计与技术的交汇处，我寻找着那些能让生活变得更美好的可能性。
            </p>
            <p>
              我相信好的产品源于对人的深刻理解。在 AI
              快速发展的时代，我关注技术如何赋能产品，如何让复杂的事情变得简单，如何让冰冷的代码传递温暖的体验。
            </p>
            <p>
              除了产品思考，我也在探索区块链安全与数字人文的交叉领域。在学术研究与实践应用之间，我试图找到一条属于自己的路。
            </p>
            <p>
              这个网站是我的数字花园，记录着我的思考、研究和生活碎片。希望能在这里与你相遇，一起让想法自由生长。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-2">
            {keywords.map((kw) => (
              <Tag key={kw} variant="green">
                {kw}
              </Tag>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
