import Link from "next/link";
export default function Home() {
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
      </div>
    </main>
  );
}
