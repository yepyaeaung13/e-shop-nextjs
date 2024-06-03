"use client";
import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
// import specialEdition from "/airpods_max.jpeg";
import Link from "next/link";
import Image from "next/image";

const TrendingSection = () => {
  const [trendingItems, setTrendingItems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((json) => setTrendingItems(json));
  }, []);
  return (
    <Container>
      <div className="flex flex-col items-center my-5">
        <div className="flex md:flex-row flex-col mx-5 md:gap-16 gap-5">
          <div className="flex flex-col gap-3 mx-2">
            <div className="flex justify-center">
              <h1 className="text-primary text-2xl font-bold font-serif">
                Special Items
              </h1>
            </div>
            <div className="flex flex-col h-[400px] w-full md:w-96 justify-center border border-primary gap-5 rounded-md p-5">
              <div className="flex flex-col justify-start items-center">
                <h1 className="text-2xl text-primary font-bold font-serif">
                  Special
                </h1>
                <h1 className="text-2xl font-serif font-bold">
                  Limited Edition
                </h1>
                <Link
                  href="/products"
                  className="px-2 py-1 text-[1vw] bg-primary text-white rounded-md mt-2"
                >
                  shop now
                </Link>
              </div>
              <div className="flex justify-center">
                <Image
                  width={200}
                  height={200}
                  src="/airpods_max.jpeg"
                  alt=""
                  className="w-48 h-fu"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-center">
              <h1 className="text-primary text-2xl font-bold font-serif">
                Trending Items
              </h1>
            </div>
            <div className="h-[400px] grid grid-flow-row grid-rows-1 gap-2">
              {trendingItems.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`flex items-center gap-10 border mx-2 md:p-5 px-5 py-2 rounded-md border-primary`}
                  >
                    <span
                      className={`${
                        item.id === 1
                          ? "bg-primary text-white text-md px-3 py-1 rounded-full"
                          : "bg-gray-500 text-white text-md px-3 py-1 rounded-full"
                      }`}
                    >
                      {item.id}
                    </span>
                    <Image
                      width={200}
                      height={200}
                      src={item.image}
                      alt=""
                      className="w-16 h-16 object-cover"
                    />
                    <div className="flex flex-col gap-2 justify-center">
                      <h1 className="text-md font-bold">{item.title}</h1>
                      <p className="text-xs line-clamp-2">{item.description}</p>
                      <span className="text-sm font-bold">$ {item.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TrendingSection;
