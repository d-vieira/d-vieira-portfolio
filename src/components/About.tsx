import Education from "./Education";
import Hobbies from "./Hobbies";

export default function About() {
  return (
    <section id="Sobre" className="bg-white pb-28 -mt-1">
      <h3 className="text-myGreen font-bold text-5xl text-center mb-8">
        Sobre mim
      </h3>
      <div className="flex px-60 gap-12 max-md:flex-col max-md:items-center max-md:px-10">
        <Education />
        <Hobbies />
      </div>
    </section>
  );
}
