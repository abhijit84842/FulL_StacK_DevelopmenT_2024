import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1 className="flex justify-center text-5xl font-semibold mt-10">Home Page</h1>
      <div className="flex justify-center mt-20">
      <Link href={"/page/users"} className="text-2xl bg-green-500 p-5 rounded-md ">Go to User Page</Link>

      </div>
    

    </main>
  );
}
