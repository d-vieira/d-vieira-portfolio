import Link from "next/link";
import Header from "./Header";
import WavySVG from "./WavySVG";
import Download from "./icons/Download";
import GithubIcon from "./stacks/GithubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

export default function Hero() {
  return (
    <div className="bg-myDarkGrey">
      <Header />
      <article className="ml-36 mt-40 text-white">
        <h2 className="text-5xl">Prazer, Daniel Vieira</h2>
        <h1 className="text-myGreen font-bold text-6xl my-6">
          Desenvolvedor Web Full Stack
        </h1>
        <p className="text-xl font-bold">
          Lorefodasis Lorenfodasis Lorenfodasis Lorenfodasis Lorenfodasis
          Lorenfodasis Lorenfodasis Lorenfodasis Lorenfodasis Lorenfodasis
        </p>
      </article>
      <div className="flex text-lg gap-4 mt-7 ml-36 h-12 font-bold text-black max-w-lg">
        <div className="flex-1">
          <a
            href="download-dev-file.txt"
            className="gap-1 flex justify-center items-center bg-myGreen duration-200 hover:fill-myLightGrey hover:bg-zinc-900 hover:text-myLightGrey hover:shadow-md h-full rounded-xl mb-10"
            target="_blank"
            download="deu-certo-de-novo"
            title="Baixar Currículo"
          >
            CURRÍCULO
            <Download />
          </a>
        </div>
        <div className="flex-1">
          <Link
            className="gap-1 flex justify-center items-center bg-white duration-200 hover:bg-lime-950 hover:fill-myLightGrey hover:text-myLightGrey hover:shadow-md h-full rounded-xl mb-10"
            href={"https://github.com/d-vieira"}
            target="_blank"
            title="Perfil no Github"
          >
            GITHUB
            <GithubIcon x={28} y={28} />
          </Link>
        </div>
        <div className="flex-1">
          <Link
            className="flex justify-center items-center bg-myGreen duration-200 hover:bg-lime-950 hover:fill-myLightGrey hover:text-myLightGrey hover:shadow-md h-full rounded-xl mb-10 text-2xl"
            href={"https://www.linkedin.com/in/daniel-vieira-martins/"}
            target="_blank"
            title="Perfil no linkedin"
          >
            Linked
            <LinkedInIcon />
          </Link>
        </div>
      </div>
      <WavySVG />
    </div>
  );
}
