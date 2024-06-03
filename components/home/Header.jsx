"use client";
import React from "react";
import Container from "./Container";
import MainNavbar from "./MainNavbar";
import TopNavbar from "./TopNavbar";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-primary">
      <Container>
        <TopNavbar />
        <MainNavbar />
      </Container>
    </div>
  );
};

export default Header;
