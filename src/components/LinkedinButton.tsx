import Link from "next/link";
import LinkedInIcon from "./icons/LinkedInIcon";

export default function LinkedinButton() {
  return (
    <Link
      className="flex flex-1 justify-center items-center bg-myGreen duration-200 hover:bg-lime-950 hover:fill-myLightGrey hover:text-myLightGrey hover:shadow-md h-full rounded-xl mb-10 text-2xl"
      href={"https://www.linkedin.com/in/daniel-vieira-martins/"}
      target="_blank"
      title="Perfil no linkedin"
    >
      Linked
      <LinkedInIcon />
    </Link>
  );
}
