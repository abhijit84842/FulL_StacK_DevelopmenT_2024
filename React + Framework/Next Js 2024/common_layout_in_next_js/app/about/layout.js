"use client";
import { usePathname } from "next/navigation";
import React from "react";
import AboutTeachers from "./aboutteachers/page";
import Header from "../components/Header";
import Footer from "../components/Footer";

const layout = ({ children }) => {
  const pathName = usePathname();       // to get the path name from url

  return (
    <div>
      {pathName != "/about/aboutteachers" ? (
        <div>
          {/* <h1>Header is Present</h1> */}
          <Header/>
          {children}
          <Footer/>
          {/* <h1>Footer is Present</h1> */}
        </div>
      ) : (
        <AboutTeachers />
      )}
    </div>
  );
};

export default layout;
