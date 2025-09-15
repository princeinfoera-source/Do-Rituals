import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = () => {
  return (
    <div className="bg-gray-50 font-sans min-h-screen">
      <Header />
      <main className="container mx-auto min-h-[50vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};


export default Layout;