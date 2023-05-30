import Education from "./Education";
import Hobbies from "./Hobbies";

export default function About() {
  return (
    <div id="Sobre" className="bg-white pb-28 -mt-1">
      <h1 className="text-myGreen font-bold text-5xl text-center mb-8">
        Sobre mim
      </h1>
      <div className="flex justify-center gap-12 max-md:flex-col max-md:items-center max-md:w-full">
        <Education />
        <Hobbies />
      </div>
    </div>
  );
}
