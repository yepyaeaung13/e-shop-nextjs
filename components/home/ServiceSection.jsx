"use client";
import React from "react";
import Container from "./Container";
// import freeShipping from "/delivery.png";
// import blackFriday from "/discount.png";
// import firstPurchase from "/payments.png";
import Link from "next/link";

const ServiceSection = () => {
  return (
    <Container>
      <div className="flex md:gap-5 gap-2 md:flex-row flex-col md:justify-between md:h-[400px] my-10 md:mx-14 mx-2">
        <div
          className="bg-contain border border-primary md:w-1/2 w-full md:h-full h-40 rounded-lg md:p-5 p-2 bg-gray-100 bg-blend-multiply bg-no-repeat bg-center"
          style={{
            backgroundImage: `url("/delivery.png")`,
          }}
        >
          <div className="w-60">
            <h1 className="text-xl font-serif font-bold">Free Shipping</h1>
            <p className="mt-4 text-sm">
              Special for orders over mmk 100,000. Available in Yangon
            </p>
            <Link
              href="/products"
              className="px-2 py-1 text-xs bg-primary text-white rounded-md mt-2"
            >
              shop now
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col md:gap-5 gap-2">
          <div
            className="bg-contain border border-primary md:h-1/2 h-40 rounded-lg md:p-5 p-2 bg-gray-100 bg-blend-multiply bg-no-repeat bg-center"
            style={{
              backgroundImage: `url("/discount.png")`,
            }}
          >
            <div className="w-60">
              <h1 className="text-xl font-serif font-bold">
                Black Friday Clearnace
              </h1>
              <p className="mt-4 text-sm">Up To 80% off</p>
              <Link
                href="/products"
                className="px-2 py-1 text-xs bg-primary text-white rounded-md mt-2"
              >
                shop now
              </Link>
            </div>
          </div>
          <div
            className="bg-contain border border-primary md:h-1/2 h-40 rounded-lg md:p-5 p-2 bg-gray-100 bg-blend-multiply bg-no-repeat bg-center"
            style={{
              backgroundImage: `url("/payments.png")`,
            }}
          >
            <div className="w-60">
              <h1 className="text-xl font-serif font-bold">
                First Purchase <br />
                20% Discount
              </h1>
              <p className="mt-4 text-sm">Use FIRSTPAY code</p>
              <Link
                href="/products"
                className="px-2 py-1 text-xs bg-primary text-white rounded-md mt-2"
              >
                shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServiceSection;
