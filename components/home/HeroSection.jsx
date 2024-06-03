"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "./Container";
import Image from "next/image";
// import banner2 from "/banner1.png";
// import banner1 from "/banner2.png";
// import banner3 from "/banner3.png";
// import banner4 from "/banner4.png";

const HeroSection = () => {
  const [slides, setSlides] = useState([
    "/banner2.png",
    "/banner1.png",
    "/banner3.png",
    "/banner4.png",
  ]);
  return (
    <Container>
      {/* <Card /> */}
      <Carousel className="md:h-[480px]h-[290px] md:w-[1050px] sm:w-[500px] w-[400px] mx-auto border my-2">
        <CarouselContent>
          {slides.map((slide, idx) => {
            return (
              <CarouselItem key={idx}>
                <Image
                  width={700}
                  height={400}
                  src={slide}
                  priority
                  alt=""
                  className="w-full md:object-cover object-fill object-center md:h-[480px] h-[200px] rounded-2xl"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
};

export default HeroSection;
