import { NAV_SECTIONS } from "@/utils/variables";
import NavSeeder from "./NavSeeder";

export default function Header() {
  return (
    <header id="Início" className="flex justify-around pl-44 py-8">
      <div className="flex">
        <h2 className="text-white text-3xl -ml-24">
          Daniel
          <span className="text-myGreen"> Vieira</span>
        </h2>
      </div>
      <nav className="text-white text-2xl ml-12 mr-36 mt-0.5">
        <ul className="flex gap-16">{NAV_SECTIONS.map(NavSeeder)}</ul>
      </nav>
    </header>
  );
}
