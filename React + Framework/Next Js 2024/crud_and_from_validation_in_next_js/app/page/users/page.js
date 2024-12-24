import DisplayButton from "@/app/components/DisplayButton";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="flex justify-center  mt-20 text-5xl">
        All Users Details Here
      </h1>
      <div className="flex  flex-col items-center gap-10 text-2xl mt-20">
        <Link
          href={"/page/users/addusers"}
          className="bg-green-500 p-3 rounded-md"
        >
          Add Users
        </Link>

        <DisplayButton />
      </div>
    </div>
  );
};

export default page;
