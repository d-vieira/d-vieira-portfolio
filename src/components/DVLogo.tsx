import Image from "next/image";

export default function DVLogo() {
  return (
    <a
      title="Ir para: Início"
      href="#"
      className="scroll-smooth flex flex-col items-center mt-52 ml-[20%] max-md:mt-20 max-md:ml-0"
    >
      <Image alt="DV Logo" src="/dv-transparent.png" width={170} height={200} />
      <h2 className="text-white text-3xl mt-3 max-md:hidden">
        Daniel
        <span className="text-myGreen"> Vieira</span>
      </h2>
    </a>
  );
}
