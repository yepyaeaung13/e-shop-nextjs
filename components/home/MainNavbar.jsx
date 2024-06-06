"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { allProductsContext } from "../../context/AllProductsProvider";

const MainNavbar = () => {
  const [hide, setHide] = useState(true);
  const toggleHide = () => {
    setHide(!hide);
  };
  const { cartItems } = useContext(allProductsContext);

  return (
    <div className="text-white flex justify-between gap-3 items-center py-2">
      <div className="">
        <h1 className="text-3xl font-bold font-serif text-nowrap">e-shop</h1>
      </div>
      <div className="flex items-center md:gap-5 gap-2">
        <div className="flex justify-center">
          <input
            type="text"
            name="search_box"
            id="searchBox"
            className="w-[30vw] md:block hidden py-0 px-2 border-none text-black focus:outline-none focus:border-none focus:ring-0 rounded-md"
            placeholder="Search Products"
          />
          <button className="bg-[#262b3d] py-2 px-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4"
            >
              {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        {/* for md view  */}
        <nav className="md:flex gap-5 items-center hidden">
          <Link href="/" className="hover:bg-[#262b3d] py-1 px-2 rounded-md">
            Home
          </Link>
          <Link
            href="/products"
            className="hover:bg-[#262b3d] py-1 px-2 rounded-md"
          >
            Products
          </Link>
          <Link
            href="/contacts"
            className="hover:bg-[#262b3d] py-1 px-2 rounded-md"
          >
            Contacts
          </Link>
        </nav>

        <div className="flex items-center gap-[2vw]">
          {/* for sm view  */}
          <nav className="relative md:hidden">
            <button
              onClick={toggleHide}
              className="flex items-center bg-[#262b3d] py-1 px-2 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 pointer-events-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <nav
              className={`absolute top-8 px-2 py-2 rounded-sm right-0 flex flex-col bg-primary md:w-80 w-40 ${
                hide ? "hidden" : ""
              }`}
            >
              <Link
                className="hover:bg-[#262b3d] py-1 px-2 rounded-md"
                href="/"
              >
                Home
              </Link>
              <Link
                className="hover:bg-[#262b3d] py-1 px-2 rounded-md"
                href="/products"
              >
                Products
              </Link>
              <Link
                className="hover:bg-[#262b3d] py-1 px-2 rounded-md"
                href="/contacts"
              >
                Contacts
              </Link>
            </nav>
          </nav>
          <div
            id="cart"
            className={`relative py-1 px-2 rounded-md bg-[#262b3d] animate__animated`}
          >
            <Link href="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 pointer-events-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </Link>
            <span className="absolute -top-3 right-0">{cartItems.length}</span>
          </div>
          <div className="bg-[#262b3d] p-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 pointer-events-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
