import { Project } from "@/types/project";

export const mockProjects: Project[] = [
  {
    id: "1",
    name: "Mr.Green 个人网站",
    status: "active",
    description:
      "基于 Next.js 的个人网站，采用 Anthropic 设计语言，集成 Notion CMS 管理内容。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Notion API"],
    github: "https://github.com",
  },
  {
    id: "2",
    name: "智能合约安全扫描工具",
    status: "completed",
    description:
      "基于 Slither 和自定义规则引擎的智能合约漏洞自动检测工具，支持常见漏洞模式识别。",
    tags: ["Python", "Solidity", "Slither", "AST"],
    github: "https://github.com",
  },
  {
    id: "3",
    name: "AI 产品趋势分析仪表盘",
    status: "active",
    description:
      "聚合 Product Hunt、Hacker News 等平台数据，用 LLM 分析 AI 产品趋势的可视化仪表盘。",
    tags: ["Python", "LLM", "Streamlit", "Data Analysis"],
    demo: "https://example.com",
  },
  {
    id: "4",
    name: "个人知识管理助手",
    status: "paused",
    description:
      "基于 RAG 技术的个人知识库问答系统，支持 Notion 笔记导入和语义检索。",
    tags: ["RAG", "LangChain", "Vector DB", "Notion"],
    github: "https://github.com",
  },
  {
    id: "5",
    name: "区块链数据分析报告",
    status: "completed",
    description:
      "对主流 DeFi 协议的链上数据进行分析，生成安全风险评估和用户行为洞察报告。",
    tags: ["Python", "Dune Analytics", "Data Visualization"],
  },
];
