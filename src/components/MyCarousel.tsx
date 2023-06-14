"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function MyCarousel() {
  return (
    <div className="border border-myLightGrey p-1 w-[60%] h-[680px] mt-5 mb-20 max-md:w-[90%] 2xl:h-[510px]">
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        emulateTouch
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <div>
          <div className="h-[500px]">
            <Image
              className="rounded-xl object-fill"
              src="/strangerthings-project.jpg"
              alt="Imagem do App Stranger things"
              fill
            />
          </div>
          <a
            href="https://strangerthings-d-vieira.vercel.app/"
            target="_blank"
            title="Ir para o app Stranger Things"
            className="legend"
          >
            Stranger Things - App
          </a>
        </div>

        <div>
          <div className="h-[500px]">
            <Image
              className="rounded-xl object-fill"
              src="/trivia-game-project2.jpg"
              alt="Imagem do jogo de trivia"
              fill
            />
          </div>
        </div>

        <div>
          <div className="h-[500px]">
            <Image
              className="rounded-xl object-fill"
              src="/recipes-app-project.jpg"
              alt="Imagem do App de Receitas"
              fill
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
