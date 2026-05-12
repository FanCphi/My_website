export type ArticleCategory = "product" | "ai" | "research" | "life" | "misc";

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: ArticleCategory;
  tags: string[];
  date: string;
}

export const categoryLabels: Record<ArticleCategory | "all", string> = {
  all: "全部",
  product: "产品思考",
  ai: "AI 时代",
  research: "科研笔记",
  life: "小确幸",
  misc: "其他",
};
