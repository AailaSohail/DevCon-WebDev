// import React from 'react'
// import google from '@/assets/google.png'
// import { signIn } from "next-auth/react"; 
// import facebook from '@/assets/facebook.png'
// import bg from '@/assets/signinbackground.png'
// import Image from "next/image";
// import Link from 'next/link';

// export const Signup = () => {
//   return (
//     <div className="flex h-screen">
//   {/* Left Section - Signup Content */}
//   <div className="w-2/3 flex flex-col items-center justify-center bg-blue-100 p-8">
//     <h2 className="text-2xl font-bold text-blue-900 mb-6">Hello Star!</h2>
//     <p className=' text-blue-900 mb-6'>Sign in to get Started!</p>
//     <div className='mb-6'>
//     <form className=" space-y-4">
//       <input
//         type="email"
//         placeholder="Email"
//         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <input
//         type="comfirm-password"
//         placeholder="Comfirm Password"
//         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />

//     </form>
//     </div>
//     {/* Social Login Options */}
//     <div className="flex w-full max-w-xs gap-x-4">
//   <button
//     className="px-4 flex items-center w-1/2 py-3 bg-white shadow-md rounded-2xl text-gray-700 text-center"
//     onClick={() => signIn("google")}
//   >
//     <Image className="mr-2" src={facebook} alt="Google" />
//     Google
//   </button>

//   <button
//     className="px-4 flex items-center w-1/2 py-3 bg-white shadow-md rounded-2xl text-gray-700 text-center"
//     onClick={() => signIn("facebook")}
//   >
//     <Image className="mr-2" src={google} alt="Facebook" />
//     Facebook
//   </button>
// </div>
// <p className="text-blue-900 my-6">
//   Already have an account?{" "}
//   <Link href="/Login" className="font-bold text-blue-600 hover:underline">
//     Log in
//   </Link>
// </p>
//   </div>

//   {/* Right Section - Image or Content */}
//   <div
//     className="w-1/3 bg-cover bg-center"
//     style={{ backgroundImage: `url(${bg.src})` }} // Ensure the image path is correct
//   >
    
//     <div className="h-full flex items-center justify-center bg-black bg-opacity-40">
//       <h2 className="text-white text-2xl font-bold">We want you to sing!</h2>
//     </div>
//   </div>


// </div>

//   )
// }


"use client";
import React, { useState } from "react";
import Image from "next/image";
import google from "@/assets/google.png";
import facebook from "@/assets/facebook.png";
import bg from "@/assets/signinbackground.png";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // For navigation after successful signup

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      console.log("📡 Sending request to /api/users");
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          role: "user", // Default role
        }),
      });
console.log('after thge req')
      const data = await response.json();
      setLoading(false);

      if (!response.ok) {
        setError(data.message);
        return;
      }

      alert("Signup Successful! Redirecting to login...");
      router.push("/Login"); // Redirect to login page
    } catch (error) {
      console.log("client sode error")
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section - Signup Form */}
      <div className="w-2/3 flex flex-col items-center justify-center bg-blue-100 p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Hello Star!</h2>
        <p className="text-blue-900 mb-6">Sign up to get started!</p>

        <form className="space-y-4 w-full max-w-xs" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {/* Social Login */}
        <div className="flex w-full max-w-xs gap-x-4 mt-4">
          <button
            className="px-4 flex items-center w-1/2 py-3 bg-white shadow-md rounded-2xl text-gray-700 text-center"
            onClick={() => signIn("google")}
          >
            <Image className="mr-2" src={google} alt="Google" />
            Faceboook
          </button>
          <button
            className="px-4 flex items-center w-1/2 py-3 bg-white shadow-md rounded-2xl text-gray-700 text-center"
            onClick={() => signIn("facebook")}
          >
            <Image className="mr-2" src={facebook} alt="Facebook" />
            Google
          </button>
        </div>

        <p className="text-blue-900 my-6">
          Already have an account?{" "}
          <a href="/Login" className="font-bold text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>

      {/* Right Section - Image */}
      <div
        className="w-1/3 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="h-full flex items-center justify-center bg-black bg-opacity-40">
          <h2 className="text-white text-2xl font-bold">We want you to sing!</h2>
        </div>
      </div>
    </div>
  );
};
