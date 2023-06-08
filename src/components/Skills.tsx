import Stacks from "./Stacks";
import {
  STACKS_BACK_END,
  STACKS_FRONT_END,
  STACKS_OVERALL,
  STACKS_TESTING_LIBS,
} from "@/utils/variables";

export default function Skills() {
  return (
    <section className="h-full flex flex-col items-center -mt-1">
      <h3
        id="Habilidades"
        className="text-myLightGrey text-5xl text-center mt-32 mb-5 max-md:-mb-10"
      >
        Stacks
      </h3>
      <Stacks stacks={STACKS_OVERALL} group="Linguagens / OPS" />
      <Stacks stacks={STACKS_FRONT_END} group="Front-End" />
      <Stacks stacks={STACKS_BACK_END} group="Back-End" />
      <Stacks stacks={STACKS_TESTING_LIBS} group="Testes" />
    </section>
  );
}
