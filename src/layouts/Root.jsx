import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <>
      <Header></Header>
      <main className="py-5 px-3 md:px-5">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Root;
