import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Research from "@/components/sections/Research";
import Library from "@/components/sections/Library";
import Projects from "@/components/sections/Projects";
import CV from "@/components/sections/CV";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Library />
        <Projects />
        <CV />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
