"use client"; // when we use any hooks then we have to convert it in client component...//

import Link from "next/link";
// import { useRouter } from "next/router";      / **Dont import useRouter from next/router **/

import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  const Navigation = (name) => {
    router.push(name);
  };
  return (
    <main>
      <div>
        <h1>This is Home page</h1>
        <div>
          <Link href="/login">Go to Login Page</Link>
        </div>
        <div>
          <Link href="/about">Go to about Page</Link>
        </div>
        <button onClick={() => Navigation("/login")}>Login Button</button>
        <button onClick={() => Navigation("/about")}>About Button</button>
      </div>
    </main>
  );
}
