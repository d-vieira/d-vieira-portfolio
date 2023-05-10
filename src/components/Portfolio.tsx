import MyCarousel from "./MyCarousel";

export default function Portfolio() {
  return (
    <div className="bg-myGreen bg-gradient-to-t from-myDarkGrey h-[700px] flex flex-col items-center">
      <h1 className="text-myDarkGrey text-5xl text-center mt-28">
        Meu Portfólio
      </h1>
      <MyCarousel />
    </div>
  );
}
