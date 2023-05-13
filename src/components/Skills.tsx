import OverallStacks from "./OverallStacks";
import FrontEndStacks from "./FrontEndStacks";
import BackEndStacks from "./BackEndStacks";
import TestingLibs from "./TestingLibs";

export default function Skills() {
  return (
    <div
      id="Habilidades"
      className="bg-myDarkGrey h-full flex flex-col items-center"
    >
      <h1 className="text-myLightGrey text-5xl text-center mt-32">
        Minhas Stacks
      </h1>
      <OverallStacks />
      <FrontEndStacks />
      <BackEndStacks />
      <TestingLibs />
    </div>
  );
}
