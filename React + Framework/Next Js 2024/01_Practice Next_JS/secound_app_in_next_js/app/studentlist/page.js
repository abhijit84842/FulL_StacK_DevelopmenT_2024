import Link from "next/link"
export default function page(){
    return <div>
        <h1>THIS IS STUDENTS LIST</h1>
        <ul>
        <li>
          <Link href="/studentlist/Abhijit">Abhijit</Link>
        </li>
        <li>
          <Link href="/studentlist/Ayan">Ayan</Link>
        </li>
        <li>
          <Link href="/studentlist/Rajat">Rajat</Link>
        </li>
        <li>
          <Link href="/studentlist/Shreya">Shreya</Link>
        </li>
        <li>
          <Link href="/studentlist/Akashdip">Akashdip</Link>
        </li>
      </ul>
    </div>
}