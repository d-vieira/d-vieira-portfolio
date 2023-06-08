import InstitutionIcon from "./icons/InstitutionIcon";
import LinkIcon, { linkIconProps } from "./icons/LinkIcon";

export default function Education() {
  return (
    <div className="flex-1 pt-2 pb-20 flex flex-col items-center text-myDarkGrey border rounded-sm drop-shadow-md shadow-md max-md:px-5 max-md:w-72">
      <InstitutionIcon />
      <h4 className="font-bold text-3xl mb-2.5">FORMAÇÃO</h4>
      <div className="flex flex-col text-left">
        <LinkIcon
          url="https://www.betrybe.com/"
          title="TRYBE - Escola de tecnologia"
        />
        <ul>{certificates.map(linkSeeder)}</ul>
      </div>
    </div>
  );
}

const certificates = [
  {
    title: "Desenvolvimento Web",
    url: "https://www.credential.net/417ba17c-c44a-435c-ad5a-ddd064286fd5",
  },
];

const linkSeeder = ({ title, url }: linkIconProps) => {
  return (
    <li key={title}>
      <LinkIcon url={url} title={title} />
    </li>
  );
};
