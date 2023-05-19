import Stacks from "./Stacks";
import {
  STACKS_BACK_END,
  STACKS_FRONT_END,
  STACKS_OVERALL,
  STACKS_TESTING_LIBS,
} from "@/utils/variables";

export default function Skills() {
  return (
    <div className="bg-myDarkGrey h-full flex flex-col items-center">
      <h1
        id="Habilidades"
        className="text-myLightGrey text-5xl text-center mt-32 mb-5"
      >
        Stacks
      </h1>
      <Stacks stacks={STACKS_OVERALL} />
      <Stacks stacks={STACKS_FRONT_END} />
      <Stacks stacks={STACKS_BACK_END} />
      <Stacks stacks={STACKS_TESTING_LIBS} />
    </div>
  );
}
