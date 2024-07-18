import Link from "next/link";     // Link is server-side component

export default function Home() {


  return (
    <main className="main-container">
      <h1>Fetch Data With API in Server Component</h1>
      <Link href="/product">See all Products</Link>

    </main>
  );
}
