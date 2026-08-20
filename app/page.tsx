import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/ui/About";
import { Skills } from "@/components/ui/Skills";
import { Projects } from "@/components/ui/Projects";
import { Experience } from "@/components/ui/Experience";
import { Contact } from "@/components/ui/Contact";
import { Footer } from "@/components/ui/Footer";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
