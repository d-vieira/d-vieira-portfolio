"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarrouselSeeder from "./CarrouselSeeder";
import { PROJECTS } from "@/utils/variables";

export default function MyCarousel() {
  return (
    <Carousel
      emulateTouch
      autoPlay
      interval={4000}
      stopOnHover
      showStatus={false}
      showThumbs={false}
      ariaLabel="Carrossel de Projetos"
      className="max-md:w-full"
    >
      {PROJECTS.map(CarrouselSeeder)}
    </Carousel>
  );
}
