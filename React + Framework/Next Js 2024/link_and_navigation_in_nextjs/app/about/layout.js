"use client";
import { usePathname } from "next/navigation";
import AboutCourse from "./aboutcourse/page";

const Layout = ({ children }) => {
  const pathName = usePathname(); // to get the path name
  console.log(pathName);
  return (
    <div>
      {pathName != "/about/aboutcourse" ? (
        <div>
          <h1>Common Layout Header</h1>
          {children}
          <h1>Common Layout Footer</h1>
        </div>
      ) : (
        <AboutCourse />
      )}
    </div>
  );
};

export default Layout;
