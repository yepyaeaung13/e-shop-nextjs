import React from "react";

const Container = ({ children }) => {
  return (
    <section className="md:w-[1200px] w-full px-2 mx-auto">{children}</section>
  );
};

export default Container;
