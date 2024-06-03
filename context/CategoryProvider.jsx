"use client";
import React, { createContext, useState } from "react";

export const categoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    "All",
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ]);
  return (
    <categoryContext.Provider value={{ categories }}>
      {children}
    </categoryContext.Provider>
  );
};

export default CategoryProvider;
