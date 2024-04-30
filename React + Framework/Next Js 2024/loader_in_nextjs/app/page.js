import Link from "next/link";


export default function Home() {
  return (
    <main >
   <h1>This is Home Page...</h1>
   <Link href="/userdetails">User Details</Link>
    </main>
  );
}
