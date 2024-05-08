import Link from "next/link";
import AddUsers from "./components/AddUsers";
import DisplayUsers from "./components/DisplayUsers";


export default function Home() {
  return (
    <main >
      <AddUsers/>
      <DisplayUsers/>
      <Link href="/userdetails">See User Id</Link>
    </main>
  );
}
