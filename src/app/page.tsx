import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";

export default function Index() {
  return (
    <main>
      <Hero />
      <ArrowUpIcon />
      <About />
      <Portfolio />
      <Skills />
      <Footer />
    </main>
  );
}
