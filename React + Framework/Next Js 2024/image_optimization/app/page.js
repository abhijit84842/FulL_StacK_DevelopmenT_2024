import Image from "next/image";
import profile from "../public/vercel.svg"

export default function Home() {
  return (
    <main>
      <h1>Image Optimization in Next Js</h1>
      <Image 
      src={profile}
      height={300}
      weight={300}
      />
    </main>
  );
}
