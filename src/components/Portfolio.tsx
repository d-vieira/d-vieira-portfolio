import MyCarousel from "./MyCarousel";

export default function Portfolio() {
  return (
    <section className="h-[100vh] flex flex-col items-center bg-gradient-to-b from-myGreen to-myDarkGrey from-60%">
      <h3 id="Portfólio" className="text-myDarkGrey text-5xl text-center mt-10">
        Portfólio
      </h3>
      <MyCarousel />
    </section>
  );
}
