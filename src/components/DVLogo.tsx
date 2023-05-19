import Image from "next/image";

export default function DVLogo() {
  return (
    <a
      title="Ir para: Início"
      href="#"
      className="scroll-smooth flex flex-col items-center mt-28 ml-[20%]"
    >
      <Image alt="DV Logo" src="/dv-transparent.png" width={170} height={200} />
      <h2 className="text-white text-3xl mt-3">
        Daniel
        <span className="text-myGreen"> Vieira</span>
      </h2>
    </a>
  );
}
