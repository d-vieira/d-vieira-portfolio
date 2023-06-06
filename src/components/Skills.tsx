import Stacks from "./Stacks";
import {
  STACKS_BACK_END,
  STACKS_FRONT_END,
  STACKS_OVERALL,
  STACKS_TESTING_LIBS,
} from "@/utils/variables";

export default function Skills() {
  return (
    <div className="h-full flex flex-col items-center max-md:-mt-1">
      <h1
        id="Habilidades"
        className="text-myLightGrey text-5xl text-center mt-32 mb-5"
      >
        Stacks
      </h1>
      <h2 className="text-myGreen text-xl mt-2 md:hidden">Linguagens / OPS</h2>
      <Stacks stacks={STACKS_OVERALL} />
      <h2 className="text-myGreen text-xl mt-12 mr-2 md:hidden">Front-End</h2>
      <Stacks stacks={STACKS_FRONT_END} />
      <h2 className="text-myGreen text-xl mt-12 mr-3 md:hidden">Back-End</h2>
      <Stacks stacks={STACKS_BACK_END} />
      <h2 className="text-myGreen text-xl mt-12 mr-2 md:hidden">Testes</h2>
      <Stacks stacks={STACKS_TESTING_LIBS} />
    </div>
  );
}
