import Link from "next/link";
import { SocialBaseProps } from "./socials/SocialBase";

export default function Socials({ socials }: { socials: SocialsProps[] }) {
  return (
    <div className="max-h-[170px] flex flex-wrap flex-col gap-5 mt-28 ml-[5%]">
      {socials.map(({ Social, title, url }) => {
        return (
          <Link
            className="hover:scale-125 duration-200"
            key={title}
            title={title}
            href={url}
            target="_blank"
          >
            <Social x={72} y={72} />
          </Link>
        );
      })}
    </div>
  );
}

type SocialsProps = {
  Social: React.ComponentType<SocialBaseProps>;
  title: string;
  url: string;
};
