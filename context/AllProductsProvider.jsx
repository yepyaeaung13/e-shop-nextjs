"use client";

import React, { createContext, useEffect, useState } from "react";

export const allProductsContext = createContext();

const AllProductsProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setAllProducts(json));
  }, []);

  const [cartItems, setCartItems] = useState([]);

  const addCartItems = (items) => {
    const isItems = cartItems.filter((el) => el.id === items.id);
    if (isItems.length !== 0) {
      setCartItems((currentItems) => {
        return currentItems.map((el) => {
          if (el.id === items.id) {
            return { ...el, qty: el.qty + 1 };
          }
          return el;
        });
      });
    } else {
      setCartItems([{ ...items, qty: 1 }, ...cartItems]);
    }
  };
  const deleteCartItems = (id) => {
    setCartItems((current) => {
      return current.filter((el) => el.id !== id);
    });
  };

  const updateCartItems = (id, qty) => {
    setCartItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id) {
          if (item.qty > 1 || qty !== -1)
            return { ...item, qty: item.qty + qty };
        }
        return item;
      });
    });
  };
  const emptyCartItems = () => {
    setCartItems([]);
  };
  return (
    <allProductsContext.Provider
      value={{
        allProducts,
        cartItems,
        addCartItems,
        deleteCartItems,
        updateCartItems,
        emptyCartItems,
      }}
    >
      {children}
    </allProductsContext.Provider>
  );
};

export default AllProductsProvider;
