import About from "@/components/About";
import Contact from "@/components/Contact";
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
      <div className="bg-gradient-to-b from-myDarkGrey via-zinc-700 to-myLightGrey">
        <Skills />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
