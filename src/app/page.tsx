import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import WavySVG from "@/components/WavySVG";

export default function Index() {
  return (
    <main>
      <div className="bg-myDarkGrey py-8 px-36 max-md:px-6">
        <Header />
        <Hero />
      </div>
      <div className="bg-myDarkGrey -mt-1 max-md:hidden">
        <WavySVG />
      </div>
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
