import Link from "next/link";
import LinkedInIcon from "./icons/LinkedInIcon";

export default function LinkedinButton() {
  return (
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
  );
}
