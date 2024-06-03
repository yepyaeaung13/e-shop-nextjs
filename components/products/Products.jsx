"use client";
import React, { useContext, useEffect, useState } from "react";
import { Card } from "flowbite-react";
import FilterItems from "./FilterItems";
import { allProductsContext } from "../../context/AllProductsProvider";
import Container from "../home/Container";
import Image from "next/image";

const Products = () => {
  const { allProducts, addCartItems } = useContext(allProductsContext);
  const [filterProduct, setFilterProduct] = useState(allProducts);
  const updateFilterProducts = (category) => {
    if (category === "All") {
      setFilterProduct(allProducts);
    } else {
      setFilterProduct(() => {
        return allProducts.filter((product) => product.category === category);
      });
    }
  };
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <div className="grid grid-cols-7 gap-2 my-5">
        <div className="md:col-span-1 col-span-2 selection:rounded-md bg-gray-100 h-[100vh] p-2">
          <FilterItems updateFilterProducts={updateFilterProducts} />
        </div>
        <div className="md:col-span-6 col-span-5">
          <h1 className="text-md font-bold font-serif">Products</h1>
          <div className="flex justify-between text-sm">
            <div>
              <p>Total Items : {filterProduct.length}</p>
            </div>
            <div className="flex gap-[1vw]">
              <div>
                <p>
                  Sort By : <span className="text-primary">Popular</span>
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-[1.2vw] py-[1vw]">
            {filterProduct.map((products) => {
              return (
                <Card
                  key={products.id}
                  className="hover:scale-[101%] border-slate-400 duration-200 hover:border-primary"
                  imgAlt={""}
                  imgSrc={""}
                >
                  <div className="flex flex-col gap-3 -m-3">
                    <div className="flex justify-center">
                      <Image
                        width={200}
                        height={200}
                        src={products.image}
                        alt={products.title}
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                    <a href="#" className="flex flex-col gap-1 mt-auto">
                      <h3 className="text-xs">{products.category}</h3>
                      <h2 className="text-md h-12 line-clamp-2 font-semibold tracking-tight text-gray-900 dark:text-white">
                        {products.title}
                      </h2>
                      <p className="line-clamp-3 text-xs">
                        {products.description}
                      </p>
                    </a>
                    <div className="flex items-center mt-auto">
                      <svg
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                        {products.rating.rate}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">
                        {"$" + products.price}
                      </span>
                      <button
                        onClick={() => {
                          addCartItems(products);
                        }}
                        className="rounded-md bg-primary px-3 py-1 text-center text-xs font-medium text-white focus:outline-none hover:bg-[#262b3d]"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Products;
