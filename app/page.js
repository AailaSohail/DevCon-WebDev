import FinalRankingChart from "@/Components/FinalRankingChart";
import Navbar from "@/Components/Navbar";
"use client"
import Image from "next/image";
import { Signup } from "./Signup/page";

export default function Home() {
  return (
    <>
    <Signup/>
      <Navbar />
      <div className=" items-center justify-items-center min-h-screen">
        <button>
          <div className="bg-green-800 text-white p-3 px-16 rounded-lg mt-10">
            Vote Now!
          </div>
        </button>
        <h3 className="font-bold mt-10">
          When competition ends, results appear here
        </h3>

        <FinalRankingChart />
      </div>
    </>
  );
}
