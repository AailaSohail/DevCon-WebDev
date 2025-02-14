"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OrganizerHome() {
  const router = useRouter();
  const [rounds, setRounds] = useState([
    { id: 1, name: "Round 1", status: "Completed" },
    { id: 2, name: "Round 2", status: "Ongoing" },
  ]);

  // const createNewRound = () => {
  // const newRound = {
  //   id: rounds.length + 1,
  //   name: `Round ${rounds.length + 1}`,
  //   status: "Pending",
  // };
  // setRounds([...rounds, newRound]);
  // };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">Organizer Dashboard</h1>

      {/* Create Round Button */}
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-lg mb-6 hover:bg-blue-700"
        onClick={() => {
          router.push("/Organizer/createRound");
        }}
      >
        + Create New Round
      </button>

      {/* List of Existing Rounds */}
      <div className="w-full max-w-md bg-white p-5 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Existing Rounds</h2>
        {rounds.length > 0 ? (
          <ul>
            {rounds.map((round) => (
              <li
                key={round.id}
                className="p-3 mb-2 bg-gray-200 rounded-md flex justify-between items-center cursor-pointer hover:bg-gray-300"
                onClick={() => router.push(`/organizers/round/${round.id}`)}
              >
                <span>{round.name}</span>
                <span className="text-sm text-gray-600">{round.status}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No rounds created yet.</p>
        )}
      </div>
    </div>
  );
}
