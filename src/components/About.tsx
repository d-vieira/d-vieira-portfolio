import Education from "./Education";
import Hobbies from "./Hobbies";

export default function About() {
  return (
    <div className="bg-white pb-28">
      <h1 className="text-myGreen font-bold text-5xl text-center mb-8">
        Sobre mim
      </h1>
      <div className="flex justify-center gap-12">
        <Education />
        <Hobbies />
      </div>
    </div>
  );
}
