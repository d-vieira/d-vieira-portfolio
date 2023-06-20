"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarrouselSeeder from "./CarrouselSeeder";
import { PROJECTS } from "@/utils/variables";

export default function MyCarousel() {
  return (
    <Carousel
      emulateTouch
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      className="max-md:w-full"
    >
      {PROJECTS.map(CarrouselSeeder)}
    </Carousel>
  );
}
