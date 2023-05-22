"use client";
import { NAV_SECTIONS } from "@/utils/variables";
import NavSeeder from "./NavSeeder";
import MobileNavMenu from "./MobileNavMenu";

export default function Header() {
  return (
    <header id="Início" className="flex justify-around pl-44 py-8">
      <div className="flex max-md:-ml-20 max-md:mr-20">
        <h2 className="text-white text-3xl -ml-24">
          Daniel
          <span className="text-myGreen"> Vieira</span>
        </h2>
      </div>
      <MobileNavMenu />
      <nav className="text-white text-2xl ml-12 mr-36 mt-0.5 max-md:hidden">
        <ul className="flex gap-16">{NAV_SECTIONS.map(NavSeeder)}</ul>
      </nav>
    </header>
  );
}
