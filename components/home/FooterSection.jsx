"use client";
import React, { useContext } from "react";
import Container from "./Container";
import { categoryContext } from "../../context/CategoryProvider";

const FooterSection = () => {
  const { categories } = useContext(categoryContext);
  return (
    <Container>
      <div className="grid grid-cols-7 md:gap-2 gap-1 my-3 justify-center border-t border-gray-400 py-[2vh]">
        <div className="md:col-span-3 col-span-1">
          <h1 className="font-bold font-serif">e-shop</h1>
        </div>
        <div className="flex flex-col gap-1 md:col-span-1 col-span-2">
          <h2 className="text-sm font-bold">Supports</h2>
          <div className="text-xs flex flex-col gap-1">
            <p className="">About Us</p>
            <p className="">Privacy Policy</p>
            <p className="">Return Policy</p>
          </div>
        </div>
        <div className=" flex flex-col gap-1 md:col-span-1 col-span-2">
          <h2 className="text-sm font-bold">Categories</h2>
          <div className="text-xs flex flex-col gap-2">
            {categories.map((category, idx) => {
              return (
                <p key={idx} className={`${idx === 0 ? "hidden" : ""}`}>
                  {category}
                </p>
              );
            })}
          </div>
        </div>
        <div className=" flex flex-col gap-1 col-span-2">
          <h2 className="text-sm font-bold">Payments</h2>
          <div className="text-xs flex md:flex-row flex-col md:gap-5 gap-1">
            <p className=" text-blue-600 font-bold">VISA</p>
            <p className=" text-primary font-bold">MasterCard</p>
            <p className=" text-blue-600 font-bold">KPay</p>
            <p className=" text-primary font-bold">AYAPay</p>
          </div>
        </div>
      </div>
      {/* <TopNavbar /> */}
    </Container>
  );
};

export default FooterSection;
