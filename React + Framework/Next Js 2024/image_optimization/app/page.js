import Image from "next/image";
import profile from "../public/vercel.svg";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main>
      <h1>Image Optimization in Next Js</h1>
      {/* <h1 style={{ fontFamily: "Roboto", fontWeight: 100 }}>
        This is Next Js Font With Link Tag
      </h1> */}
      {/* <Image src={profile} height={100} weight={100} /> */}

      {/* <img src={profile.src} alt="loading" /> */}

      <h1 className={roboto.className}>Font With Next JS font features</h1>

      <Image
        src={
          "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        width={500}
        height={500}
      />
    </main>
  );
}
