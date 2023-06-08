"use client";
import { NAV_SECTIONS } from "@/utils/variables";
import NavSeeder from "./NavSeeder";
import MobileNavMenu from "./MobileNavMenu";

export default function Header() {
  return (
    <header
      id="Início"
      className="flex items-center gap-24 max-md:justify-around"
    >
      <div className="flex">
        <h3 className="text-white text-3xl">
          Daniel
          <span className="text-myGreen"> Vieira</span>
        </h3>
      </div>
      <MobileNavMenu />
      <nav className="text-white text-2xl self-end max-md:hidden">
        <ul className="flex gap-16">{NAV_SECTIONS.map(NavSeeder)}</ul>
      </nav>
    </header>
  );
}
