
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1> Product Home Page</h1>
      <Link href="/addproduct" >Add Product</Link>
    </main>
  );
}
