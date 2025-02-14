"use client";

import React from "react";
import { useAuth } from "../lib/config/AuthContext"; // Ensure you're importing useAuth
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assests/assets";

export default function Signup() {
  const [user, logOut, signIn] = useAuth(); // Destructure signIn from useAuth

  const handleGoogleSignIn = async () => {
    try {
      await signIn(); // Call signIn from the context
    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section - Signup Content */}
      <div className="w-2/3 flex flex-col items-center justify-center bg-blue-100 p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Hello Star!</h2>
        <p className="text-blue-900 mb-6">Sign in to get Started!</p>
        <div className="mb-6">
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
        </div>

        {/* Social Login Options */}
        <div className="flex w-full max-w-xs gap-x-4">
          <button
            className="px-4 flex items-center w-1/2 py-3 bg-white shadow-md rounded-2xl text-gray-700 text-center"
            onClick={handleGoogleSignIn} // Ensure this calls handleGoogleSignIn
          >
            <Image className="mr-2" src={assets.google} alt="Google" />
            Google
          </button>

          <button
            className="px-4 flex items-center w-1/2 py-3 bg-white shadow-md rounded-2xl text-gray-700 text-center"
            onClick={() => signIn("facebook")}
          >
            <Image className="mr-2" src={assets.facebook} alt="Facebook" />
            Facebook
          </button>
        </div>
        <p className="text-blue-900 my-6">
          Already have an account?{" "}
          <Link
            href="/Login"
            className="font-bold text-blue-600 hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>

      {/* Right Section - Image or Content */}
      <div
        className="w-1/3 bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.signinbackground})` }}
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
