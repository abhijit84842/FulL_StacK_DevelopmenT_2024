"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main-container">
      <h1>Do you want to get all product details? </h1>
      <div className="product-link">
        <Link href="/productlist">Go to Products Link</Link>
      </div>
    </main>
  );
}
