import React from "react";
import Image from "next/image";
import { assets } from "@/assests/assets";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center p-4 sticky top-0 z-50 bg-white shadow-md">
      <button className="w-12 h-12 flex items-center justify-center  rounded-full">
        <Image src={assets.logo} alt="" width={30} height={30} />
      </button>
      <p className="font-semibold">Singing Competition</p>
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
