import Link from "next/link";
import Header from "./Header";
import WavySVG from "./WavySVG";
import DownloadResume from "./DownloadResume";
import GithubButton from "./GithubButton";
import LinkedinButton from "./LinkedinButton";

export default function Hero() {
  return (
    <div className="bg-myDarkGrey">
      <Header />
      <article className="ml-36 mt-40 text-white">
        <h2 className="text-5xl">Prazer, Daniel Vieira</h2>
        <h1 className="text-myGreen font-bold text-6xl my-6">
          Desenvolvedor Web Full Stack
        </h1>
        <p className="text-xl font-bold max-w-6xl">
          Apaixonado por transformar ideias em realidade através de sólidas
          habilidades em programação.
          <br />
          <br />
          Juntos, podemos trabalhar para criar uma experiência digital memorável
          e impactante que reflita a identidade e os objetivos da sua empresa.
        </p>
      </article>
      <div className="flex text-lg gap-4 mt-7 ml-36 h-12 font-bold text-black max-w-lg">
        <DownloadResume />
        <GithubButton />
        <LinkedinButton />
      </div>
      <WavySVG />
    </div>
  );
}
