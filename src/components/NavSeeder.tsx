import { MouseEventHandler } from "react";

type navSeederProps = {
  name: string;
  callBack?: MouseEventHandler;
};

export default function NavSeeder({ name, callBack }: navSeederProps) {
  return (
    <li key={name}>
      <a
        onClick={callBack}
        title={`Ir para: ${name}`}
        href={"/#" + name}
        className="scroll-smooth opacity-100 hover:opacity-50 border-transparent duration-300"
      >
        {name}
      </a>
    </li>
  );
}
