"use client";
import React from "react";
import google from "@/assets/google.png";
import { signIn } from "next-auth/react";
import facebook from "@/assets/facebook.png";
import bg from "@/assets/signinbackground.png";
import Image from "next/image";

export default function Signup() {
  return (
    <div className="flex h-screen">
      {/* Left Section - Signup Content */}
      <div className="w-2/3 flex flex-col items-center justify-center bg-blue-100 p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Hello Star!</h2>
        <p className=" text-blue-900 mb-6">Sign in or Login to get Started!</p>
        {/* Social Login Options */}
        <div className="space-y-4 w-full max-w-xs">
          <button
            className=" px-4 flex items-center w-full py-3 bg-white shadow-md rounded-2xl text-gray-700 text-center"
            onClick={() => signIn("google")}
          >
            <Image className="mr-4" src={facebook} alt=""></Image>
            Google
          </button>

          <button
            className="px-4 flex items-center w-full py-3 bg-white shadow-md rounded-2xl text-gray-700 text-center"
            onClick={() => signIn("facebook")}
          >
            <Image className="mr-4" src={google} alt=""></Image>
            Facebook
          </button>
        </div>
      </div>

      {/* Right Section - Image or Content */}
      <div
        className="w-1/3 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg.src})` }} // Ensure the image path is correct
      >
        <div className="h-full flex items-center justify-center bg-black bg-opacity-40">
          <h2 className="text-white text-2xl font-bold">
            We want you to sing!
          </h2>
        </div>
      </div>
    </div>
  );
}
