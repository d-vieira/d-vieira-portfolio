import Code from "./icons/Code";
import ExternalLink from "./icons/ExternalLink";

type CarrouselSeeder = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  code?: string;
  url?: string;
};

export default function CarrouselSeeder({
  imgSrc,
  imgAlt,
  title,
  description,
  code,
  url,
}: CarrouselSeeder) {
  return (
    <div className="flex p-10 gap-10" key={title}>
      <picture className="max-md:hidden">
        <img
          className="h-[65vh] rounded-xl shadow-black shadow-lg"
          src={imgSrc}
          alt={imgAlt}
        />
      </picture>
      <div className="h-[65vh] flex-1 flex flex-col justify-evenly text-myDarkGrey bg-myLightGrey rounded-xl bg-opacity-70 shadow-black shadow-lg">
        <h4 className="text-2xl font-bold">{title}</h4>

        <p className="overflow-auto text-xl p-10 text-justify max-md:text-base max-md:p-5">
          {description}
        </p>

        <div className="flex self-center gap-5">
          {code && (
            <a
              href={code}
              target="_blank"
              title={`Ver o código de: ${title}`}
              className="hover:scale-105 hover:duration-500 hover:opacity-70"
            >
              <Code />
            </a>
          )}
          {url && (
            <a
              href={url}
              target="_blank"
              title={`Ir para: ${title}`}
              className="hover:scale-105 hover:duration-500 hover:opacity-70"
            >
              <ExternalLink />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
