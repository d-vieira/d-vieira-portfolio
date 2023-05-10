"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function MyCarousel() {
  return (
    <div className="border border-myLightGrey p-1 w-[680px] mt-5 mb-20">
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
          <div className="relative h-[363px]">
            <Image
              className="rounded-xl object-fill"
              src="/trivia-game-project2.jpg"
              alt="Imagem do jogo de trivia"
              fill
            />
          </div>
        </div>

        <div>
          <div className="relative h-[363px]">
            <Image
              className="rounded-xl object-fill"
              src="/recipes-app-project.jpg"
              alt="Imagem do App de Receitas"
              fill
            />
          </div>
        </div>

        <div>
          <div className="relative h-[363px]">
            <Image
              className="rounded-xl object-fill"
              src="/strangerthings-project.jpg"
              alt="Imagem do App Stranger things"
              fill
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
