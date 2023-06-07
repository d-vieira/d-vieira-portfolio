import { NAV_SECTIONS, SOCIALS } from "@/utils/variables";
import NavSeeder from "./NavSeeder";
import Email from "./Email";
import Phone from "./Phone";
import Location from "./Location";
import Socials from "./Socials";
import DVLogo from "./DVLogo";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <div className="bg-myDarkGrey flex flex-col items-center">
      <div className="flex gap-14 p-12 max-md:flex-col">
        <DVLogo />

        <nav className="max-md:text-center max-md:text-xl">
          <p title="Menu de navegação" className="text-myGreen font-bold mb-3">
            NAVEGAÇÃO
          </p>
          <ul className="text-white">{NAV_SECTIONS.map(NavSeeder)}</ul>
        </nav>

        <div className="max-md:text-center max-md:text-xl">
          <p
            title="Menu de informações"
            className="text-myGreen font-bold mb-3"
          >
            INFORMAÇÕES
          </p>
          <Email />
          <Phone />
          <Location />
        </div>

        <Socials socials={SOCIALS} />
      </div>
      <Copyright />
    </div>
  );
}
