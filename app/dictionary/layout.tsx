import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "辞典",
  description:
    "用个人化的定义重新诠释日常词汇。每个词条都是对世界的一次重新认知。语言即世界。",
};

export default function DictionaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
