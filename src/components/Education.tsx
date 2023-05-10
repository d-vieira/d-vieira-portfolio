import Institution from "./icons/Institution";
import LinkIcon, { linkIconProps } from "./icons/LinkIcon";

export default function Education() {
  return (
    <div className="text-myDarkGrey border rounded-sm drop-shadow-md shadow-md pb-8 pt-2 w-1/3 flex flex-col items-center">
      <Institution />
      <h2 className="font-bold text-3xl mb-2.5">FORMAÇÃO</h2>
      <section className="flex flex-col text-left">
        <LinkIcon
          url="https://www.betrybe.com/"
          title="TRYBE - Escola de tecnologia"
        />
        <ul>{certificates.map(linkSeeder)}</ul>
      </section>
    </div>
  );
}

const certificates = [
  {
    title: "Fundamentos do Desenvolvimento Web",
    url: "https://www.credential.net/0e269823-1061-401c-b68b-11300173c3f8",
  },
  {
    title: "Desenvolvimento em Front-End",
    url: "https://www.credential.net/0ddcbb10-372d-447c-998b-bbd63a3f535a",
  },
  {
    title: "Desenvolvimento em Back End",
    url: "https://www.credential.net/e21f6d24-001b-4ccb-a77b-afe2ce5aed11",
  },
  {
    title: "Ciência da Computação",
    url: "https://www.credential.net/100489e6-1885-4c32-957d-c4c3312ee9b8",
  },
];

const linkSeeder = ({ title, url }: linkIconProps) => {
  return (
    <li key={title}>
      <LinkIcon url={url} title={title} />
    </li>
  );
};
