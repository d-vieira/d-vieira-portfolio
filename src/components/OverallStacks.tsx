import Link from "next/link";
import JSIcon from "./stacks/JSIcon";
import TSIcon from "./stacks/TSIcon";
import PythonIcon from "./stacks/PythonIcon";
import NodeJsIcon from "./stacks/NodeJsIcon";
import DockerIcon from "./stacks/DockerIcon";
import GitIcon from "./stacks/GitIcon";
import GithubIcon from "./stacks/GithubIcon";
import {
  STACKS_CARDS_CSS,
  STACKS_ICONS_HEIGHT,
  STACKS_ICON_WIDTH,
} from "@/utils/variables";

export default function OverallStacks() {
  return (
    <div className="flex gap-6 mt-12">
      {overall.map(({ Stack, title, url }, index) => {
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

const overall = [
  { Stack: JSIcon, title: "JavaScript", url: "https://www.javascript.com/" },
  {
    Stack: TSIcon,
    title: "TypeScript",
    url: "https://www.typescriptlang.org/",
  },
  { Stack: PythonIcon, title: "Python", url: "https://www.python.org/" },
  { Stack: NodeJsIcon, title: "Node.js", url: "https://nodejs.org/" },
  { Stack: DockerIcon, title: "Docker", url: "https://www.docker.com/" },
  { Stack: GitIcon, title: "Git", url: "https://git-scm.com/" },
  { Stack: GithubIcon, title: "GitHub", url: "https://github.com/" },
];
