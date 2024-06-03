"use client";
import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import NewProductSection from "./NewProductSection";
import TrendingSection from "./TrendingSection";
import NewProductProvider from "../../context/NewProductProvider";

const Home = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <NewProductProvider>
        <NewProductSection />
      </NewProductProvider>
      <TrendingSection />
    </div>
  );
};

export default Home;
