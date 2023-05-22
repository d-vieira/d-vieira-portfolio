import { NAV_SECTIONS } from "@/utils/variables";
import CloseButtonIcon from "./icons/CloseButtonIcon";
import HamburgerMenuIcon from "./icons/HamburgerMenuIcon";
import NavSeeder from "./NavSeeder";
import { useState } from "react";

export default function MobileNavMenu() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="w-[36px] h-[36px] p-1 hidden max-md:block -mt-0.5"
      >
        {open ? <CloseButtonIcon /> : <HamburgerMenuIcon />}
      </button>
      {open && (
        <ul className="bg-zinc-800 opacity-90 shadow-gray-500 shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] text-myGreen text-center font-semibold text-3xl w-full h-[480px] z-10 left-0 top-[70px] absolute flex flex-col gap-10 py-9">
          {NAV_SECTIONS.map(NavSeeder)}
        </ul>
      )}
    </div>
  );
}
