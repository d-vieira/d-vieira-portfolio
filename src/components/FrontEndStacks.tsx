import Link from "next/link";
import ReactIcon from "./stacks/ReactIcon";
import NextIcon from "./stacks/NextIcon";
import TailwindIcon from "./stacks/TailwindIcon";
import Html5Icon from "./stacks/Html5Icon";
import Css3Icon from "./stacks/Css3Icon";
import {
  STACKS_CARDS_CSS,
  STACKS_ICONS_HEIGHT,
  STACKS_ICON_WIDTH,
} from "@/utils/variables";

export default function FrontEndStacks() {
  return (
    <div className="flex gap-6 mt-10">
      {frontEnd.map(({ Stack, title, url }, index) => {
        return (
          <Link
            key={index}
            className={STACKS_CARDS_CSS}
            href={url}
            title={title}
            target="_blank"
          >
            <Stack x={STACKS_ICON_WIDTH} y={STACKS_ICONS_HEIGHT} />
            {title}
          </Link>
        );
      })}
    </div>
  );
}

const frontEnd = [
  { Stack: ReactIcon, title: "React.js", url: "https://react.dev/" },
  { Stack: NextIcon, title: "Next.js", url: "https://nextjs.org/" },
  {
    Stack: TailwindIcon,
    title: "TailwindCSS",
    url: "https://tailwindcss.com/",
  },
  { Stack: Html5Icon, title: "HTML 5", url: "https://html.spec.whatwg.org/" },
  { Stack: Css3Icon, title: "CSS 3", url: "https://www.w3.org/Style/CSS/" },
];
