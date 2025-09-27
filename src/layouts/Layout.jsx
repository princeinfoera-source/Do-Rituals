import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <div className="bg-gray-50 font-sans min-h-screen">
      <Header setHeaderHeight={setHeaderHeight} />
      <main
        className="container min-w-full"
        style={{ paddingTop: headerHeight }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
