import Link from "next/link";
import RTLIcon from "./stacks/RTLIcon";
import JestIcon from "./stacks/JestIcon";
import MochaIcon from "./stacks/MochaIcon";
import ChaiIcon from "./stacks/ChaiIcon";
import PytestIcon from "./stacks/PytestIcon";
import {
  STACKS_CARDS_CSS,
  STACKS_ICONS_HEIGHT,
  STACKS_ICON_WIDTH,
} from "@/utils/variables";

export default function TestingLibs() {
  return (
    <div className="flex gap-6 mt-10 mb-28">
      {testingLibs.map(({ Stack, title, url }, index) => {
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

const testingLibs = [
  { Stack: RTLIcon, title: "RTL", url: "https://testing-library.com/" },
  { Stack: JestIcon, title: "Jest", url: "https://jestjs.io/" },
  { Stack: MochaIcon, title: "Mocha", url: "https://mochajs.org/" },
  { Stack: ChaiIcon, title: "Chai", url: "https://www.chaijs.com/" },
  { Stack: PytestIcon, title: "Pytest", url: "https://docs.pytest.org/" },
];
