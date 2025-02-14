import React from 'react'
import google from '@/assets/google.png'
import { signIn } from "next-auth/react"; 
import facebook from '@/assets/facebook.png'
import bg from '@/assets/signinbackground.png'
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex h-screen">
  {/* Left Section - Signup Content */}
  <div className="w-2/3 flex flex-col items-center justify-center bg-blue-100 p-8">
    <h2 className="text-2xl font-bold text-blue-900 mb-6">Hello Star!</h2>
    <p className=' text-blue-900 mb-6'>Sign in or Login to get Started!</p>
    <div className='mb-6'>
    <form className=" space-y-4">
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
    </form>
    </div>
    {/* Social Login Options */}
    <div className="flex w-full max-w-xs gap-x-4">
  <button
    className="px-4 flex items-center w-1/2 py-3 bg-white shadow-md rounded-2xl text-gray-700 text-center"

  >
    <Image className="mr-2" src={facebook} alt="Google" />
    Google
  </button>

  <button
    className="px-4 flex items-center w-1/2 py-3 bg-white shadow-md rounded-2xl text-gray-700 text-center"
  
  >
    <Image className="mr-2" src={google} alt="Facebook" />
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
      <h2 className="text-white text-2xl font-bold">We want you to sing!</h2>
    </div>
  </div>
</div>

  )
}
