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
    <div id="Contate-me" className="bg-myDarkGrey">
      <div className="flex">
        <DVLogo />

        <nav className="mt-52 ml-[6%]">
          <p title="Menu de navegação" className="text-myGreen font-bold mb-3">
            NAVEGAÇÃO
          </p>
          <ul className="text-white">{NAV_SECTIONS.map(NavSeeder)}</ul>
        </nav>

        <div className="mt-52 ml-[6%]">
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
