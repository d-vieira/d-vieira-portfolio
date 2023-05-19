import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

export default function Index() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Footer />
    </main>
  );
}
