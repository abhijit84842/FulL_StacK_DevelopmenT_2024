import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <div>
      
        <Link href={"/about"}>About Page</Link>
        
        

      </div>
    </main>
  );
}
