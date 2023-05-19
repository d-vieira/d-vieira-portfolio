import Link from "next/link";
import GithubIcon from "./stacks/GithubIcon";

export default function GithubButton() {
  return (
    <Link
      className="gap-1 flex flex-1 justify-center items-center bg-white duration-200 hover:fill-myLightGrey hover:bg-zinc-900 hover:text-myLightGrey hover:shadow-md h-full rounded-xl mb-10"
      href={"https://github.com/d-vieira"}
      target="_blank"
      title="Ir para perfil no Github"
    >
      GITHUB
      <GithubIcon x={28} y={28} />
    </Link>
  );
}
