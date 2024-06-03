"use client";
import React, { createContext, useEffect, useState } from "react";

export const NewProductContext = createContext();

const NewProductProvider = ({ children }) => {
  const [newProducts, setNewProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => setNewProducts([...json]));
  }, []);
  return (
    <NewProductContext.Provider value={{ newProducts }}>
      {children}
    </NewProductContext.Provider>
  );
};

export default NewProductProvider;
