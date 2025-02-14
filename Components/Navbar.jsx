import React from "react";
import Image from "next/image";
import { assets } from "@/assests/assets";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between p-4 shadow-md">
      <button className="w-12 h-12 flex items-center justify-center  rounded-full">
        <Image src={assets.logo} alt="" width={30} height={30} />
      </button>
      <button
        onClick={() => router.push("/Signup")}
        className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full"
      >
        <Image alt="User Icon" src={assets.userIcon} width={25} height={25} />
      </button>
    </div>
  );
};

export default Navbar;
