import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-around pl-44 py-8">
      <div className="flex">
        <h2 className="text-white text-3xl -ml-24">
          Daniel
          <span className="text-myGreen"> Vieira</span>
        </h2>
      </div>
      <nav className="text-white text-2xl ml-12 mr-36 mt-0.5">
        <ul className="flex gap-16">{sections.map(navItem)}</ul>
      </nav>
    </header>
  );
}

const sections = [
  { name: "Início" },
  { name: "Sobre" },
  { name: "Portfólio" },
  { name: "Habilidades" },
  { name: "Contate-me" },
];

interface navItemProps {
  name: string;
}

const navItem = ({ name }: navItemProps) => {
  return (
    <li key={name}>
      <a
        href={"/#" + name}
        className="scroll-smooth opacity-100 hover:opacity-50 border-transparent duration-300"
      >
        {name}
      </a>
    </li>
  );
};
