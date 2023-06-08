import { stackBaseProp } from "./stacks/StackBase";

export default function Stacks({
  stacks,
  group,
}: {
  stacks: StacksProps[];
  group: string;
}) {
  return (
    <div className="max-md:flex max-md:flex-col max-md:items-center">
      <h4 className="text-myGreen text-xl mt-12 md:hidden">{group}</h4>
      <div className="flex max-md:flex-wrap max-md:w-[90%]">
        {stacks.map(({ Stack, title, url }) => {
          return (
            <a
              key={title}
              className="bg-myLightGrey rounded-md w-32 h-32 flex flex-col items-center m-4 hover:scale-110 duration-700 2xl:w-40 2xl:h-40"
              href={url}
              title={title}
              target="_blank"
            >
              <Stack x={96} y={96} className="2xl:pt-4" />
              {title}
            </a>
          );
        })}
      </div>
    </div>
  );
}

type StacksProps = {
  Stack: React.ComponentType<stackBaseProp>;
  title: string;
  url: string;
};
