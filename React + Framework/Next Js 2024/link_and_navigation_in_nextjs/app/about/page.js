"use client";
import "./page.css";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div className="about-container">
      <h1>This is About Page</h1>
      <div className="nav-section">
        <button onClick={() => router.push("/")}>Home Page</button>
        <button onClick={() => router.push("/about/aboutstudent")}>
          About Students
        </button>
        <button onClick={() => router.push("/about/aboutcollege")}>
          About college
        </button>
        <button onClick={()=>router.push("./about/aboutcourse")}>About Course</button>
      </div>
    </div>
  );
};

export default About;
