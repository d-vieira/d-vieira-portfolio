import Link from "next/link";
import { stackBaseProp } from "./stacks/StackBase";

export default function Stacks({ stacks }: { stacks: StacksProps[] }) {
  return (
    <div className="flex">
      {stacks.map(({ Stack, title, url }) => {
        return (
          <Link
            key={title}
            className="bg-myLightGrey rounded-md w-32 h-32 flex flex-col items-center m-4 hover:scale-110 duration-700"
            href={url}
            title={title}
            target="_blank"
          >
            <Stack x={96} y={96} />
            {title}
          </Link>
        );
      })}
    </div>
  );
}

type StacksProps = {
  Stack: React.ComponentType<stackBaseProp>;
  title: string;
  url: string;
};
