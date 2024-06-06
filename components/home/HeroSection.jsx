"use client";
import React, { useState } from "react";
import Container from "./Container";
import { Carousel } from "flowbite-react";

const HeroSection = () => {
  return (
    <Container>
      {/* <Card /> */}
      <div className="w-full md:h-96 h-60 my-2">
        <Carousel>
          <img
            src="/banner2.png"
            alt="..."
            className="w-full h-full object-cover"
          />
          <img src="/banner1.png" alt="..." className="w-full h-full" />
          <img src="/banner3.png" alt="..." className="w-full h-full" />
          <img src="/banner4.png" alt="..." className="w-full h-full" />
        </Carousel>
      </div>
    </Container>
  );
};

export default HeroSection;
