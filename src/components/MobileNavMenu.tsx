import { NAV_SECTIONS } from "@/utils/variables";
import CloseButtonIcon from "./icons/CloseButtonIcon";
import HamburgerMenuIcon from "./icons/HamburgerMenuIcon";
import NavSeeder from "./NavSeeder";
import { useEffect, useRef, useState } from "react";

export default function MobileNavMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLUListElement>(null);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <div>
      <button
        onClick={handleClick}
        className="hidden max-md:block"
        aria-label="Nav menu"
      >
        {open ? <CloseButtonIcon /> : <HamburgerMenuIcon />}
      </button>
      {open && (
        <ul
          ref={ref}
          className="bg-zinc-800 opacity-90 shadow-gray-500 shadow-[0_0_20px_5px_rgba(0,0,0,0.3)] text-myGreen text-center font-semibold text-3xl w-full h-[480px] z-10 left-0 top-[70px] absolute flex flex-col gap-10 py-9"
        >
          {NAV_SECTIONS.map(({ name }) => (
            <NavSeeder key={name} name={name} callBack={handleClick} />
          ))}
        </ul>
      )}
    </div>
  );
}
