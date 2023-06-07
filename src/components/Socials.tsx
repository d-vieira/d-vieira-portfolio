import { SocialBaseProps } from "./socials/SocialBase";

export default function Socials({ socials }: { socials: SocialsProps[] }) {
  return (
    <div className="grid grid-cols-3 gap-5">
      {socials.map(({ Social, title, url }) => {
        return (
          <a
            className="hover:scale-125 duration-200"
            key={title}
            title={title}
            href={url}
            target="_blank"
          >
            <Social x={72} y={72} />
          </a>
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
