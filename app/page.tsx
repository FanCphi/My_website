import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Research from "@/components/sections/Research";
import Library from "@/components/sections/Library";
import Projects from "@/components/sections/Projects";
import CV from "@/components/sections/CV";
import Contact from "@/components/sections/Contact";
import PatternDivider from "@/components/ui/PatternDivider";
import { getArticles, getProjects } from "@/lib/notion";
import type { Article } from "@/types/article";
import type { Project } from "@/types/project";

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function Home() {
  let articles: Article[] = [];
  let projects: Project[] = [];

  try {
    [articles, projects] = await Promise.all([
      getArticles(),
      getProjects(),
    ]);
  } catch {
    // Notion env vars not configured yet — render with empty data
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PatternDivider variant="quxi" />
        <About />
        <PatternDivider variant="cloud" />
        <Research />
        <PatternDivider variant="ruyi" />
        <Projects projects={projects} />
        <PatternDivider variant="quxi" />
        <Library articles={articles} />
        <PatternDivider variant="cloud" />
        <CV />
        <PatternDivider variant="ruyi" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
