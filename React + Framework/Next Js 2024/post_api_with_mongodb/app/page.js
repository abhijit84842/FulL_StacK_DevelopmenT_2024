import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1> Product Home Page</h1>
      <Link href="/addproduct">Add Product</Link>
      <div>
      
        <Link href="/products">See Product List</Link>
      </div>
    </main>
  );
}
