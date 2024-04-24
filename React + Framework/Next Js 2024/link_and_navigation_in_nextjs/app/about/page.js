"use client";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Information about this page</h1>
      <button onClick={() => router.push("/")}>Go to Home Page</button>
      <button onClick={() => router.push("/about/aboutstudent")}>
        About Students
      </button>
      <button onClick={() => router.push("/about/aboutcollege")}>
        About college
      </button>
    </div>
  );
};

export default About;
