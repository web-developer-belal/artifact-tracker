import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <Header></Header>
      <main className="py-5 px-3 md:px-5">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Root;
