import Link from "next/link";
const Studentlist = () => {
  return (
    <div className="studentlist-container">
      <h1>Students List</h1>
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
  );
};

export default Studentlist;
