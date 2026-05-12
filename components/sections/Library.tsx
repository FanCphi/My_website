import LibraryClient from "@/components/library/LibraryClient";
import type { Article } from "@/types/article";

interface LibraryProps {
  articles: Article[];
}

export default function Library({ articles }: LibraryProps) {
  return (
    <section id="library" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <LibraryClient articles={articles} />
      </div>
    </section>
  );
}
