import React from "react";
import { Outlet } from "react-router";
import Nabvar from "../../components/shared/Nabvar";
import Footer from "../../components/shared/Footer";

const MainLayoutes = () => {
  return (
    <div>
      <Nabvar />
      <div className="px-6 sm:px-10 lg:px-20">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayoutes;
