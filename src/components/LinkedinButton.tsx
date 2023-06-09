import LinkedInIcon from "./icons/LinkedInIcon";

export default function LinkedinButton() {
  return (
    <a
      className="flex flex-1 justify-center items-center bg-myGreen duration-200 hover:bg-lime-950 hover:fill-myLightGrey hover:text-myLightGrey hover:shadow-md h-full rounded-xl mb-10 text-2xl max-md:mb-2 max-md:p-5 max-md:rounded-full max-md:w-[230px] max-md:mx-auto"
      href={"https://www.linkedin.com/in/daniel-vieira-martins/"}
      target="_blank"
      title="Ir para perfil no LinkedIn"
    >
      Linked
      <LinkedInIcon />
    </a>
  );
}
