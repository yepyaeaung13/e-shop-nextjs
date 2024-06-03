"use client";
import React, { useContext, useEffect } from "react";
import { Card } from "flowbite-react";
import Swal from "sweetalert2";
import { allProductsContext } from "../../context/AllProductsProvider";
import Container from "../home/Container";
import Image from "next/image";

const Cart = () => {
  const { cartItems, deleteCartItems, updateCartItems, emptyCartItems } =
    useContext(allProductsContext);
  useEffect(() => {
    scrollTo(0, 0);
  });
  const handleCheckOut = () => {
    if (cartItems.length !== 0) {
      Swal.fire({
        title: "Order Success",
        text: "Thank you for your order!",
        icon: "success",
      });
      emptyCartItems();
    } else {
      Swal.fire({
        title: "Cart is empty!",
        text: "There is no items!",
        icon: "question",
      });
    }
  };
  return (
    <Container>
      <div className="flex gap-5 items-center text-sm py-1">
        <div className="flex items-center">
          <span>
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
          </span>
          <h2 className="">Cart</h2>
        </div>
        <div>Items : {cartItems.length}</div>
      </div>
      <div className="grid md:grid-cols-7 grid-rows-1 my-1 rounded-md">
        <div className="md:col-span-5 h-[60vh] md:h-[85vh] grid md:grid-cols-2 px-1 grid-cols-1 gap-3 overflow-y-scroll">
          {cartItems.map((products) => {
            return (
              <Card
                key={products.id}
                className="max:w-1/2 h-36 relative hover:scale-[101%] border-slate-400 duration-200 hover:border-primary"
              >
                <div className="grid grid-cols-6 gap-3 -m-3">
                  <div className="col-span-2 flex justify-center">
                    <Image
                      width={200}
                      height={200}
                      src={products.image}
                      alt={products.title}
                      className="h-24 w-24 object-contain"
                    />
                  </div>
                  <div className="col-span-4 flex flex-col gap-3">
                    <a href="#" className="flex flex-col gap-1 mt-auto">
                      <h3 className="text-xs">{products.category}</h3>
                      <h2 className="text-md line-clamp-1 font-semibold tracking-tight text-gray-900 dark:text-white">
                        {products.title}
                      </h2>
                      <p className="line-clamp-2 text-xs">
                        {products.description}
                      </p>
                    </a>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">
                        {"$" + (products.price * products.qty).toFixed(2)}
                      </span>
                      <div className="flex gap-3 items-center justify-between">
                        <button
                          onClick={() => {
                            updateCartItems(products.id, -1);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4 pointer-events-none"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 12h14"
                            />
                          </svg>
                        </button>
                        <span className="text-right">{products.qty}</span>
                        <button
                          onClick={() => {
                            updateCartItems(products.id, 1);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4 pointer-events-none"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    deleteCartItems(products.id);
                  }}
                  className="absolute top-2 right-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 pointer-events-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </Card>
            );
          })}
        </div>
        <div className="md:col-span-2">
          <div className="m-2 bg-zinc-100 rounded-md p-2 h-[80vh] flex flex-col gap-2">
            <h2 className="text-xl font-bold">Summary</h2>
            <ul className="flex flex-col gap-2 border-t p-2 border-zinc-400 overflow-y-scroll">
              {cartItems.map((item) => {
                return (
                  <li key={item.id} className="grid grid-cols-4 gap-2 text-sm">
                    <span className="col-span-3 line-clamp-1">
                      {item.title}
                    </span>
                    <span className="col-span-1 text-right">{`$${(
                      item.price * item.qty
                    ).toFixed(2)}`}</span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-auto">
              <li className="grid grid-cols-4 gap-2 text-sm py-3 border-b border-t border-zinc-400">
                <span className="col-span-3 line-clamp-1">Sales Tax</span>
                <span className="col-span-1 text-right">included</span>
              </li>
            </div>
            <div>
              <li className="grid grid-cols-4 gap-2 text-md">
                <span className="col-span-3 line-clamp-1 font-bold">Total</span>
                <span className="col-span-1 font-bold text-right">{`$${cartItems
                  .reduce((pv, cv) => pv + cv.qty * cv.price, 0)
                  .toFixed(2)}`}</span>
              </li>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleCheckOut}
                className="uppercase text-sm bg-primary rounded-md text-white w-full py-1"
              >
                checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
