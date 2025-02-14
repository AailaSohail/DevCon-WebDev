"use client";
import Navbar from "@/Components/Navbar";
import React, { useState } from "react";

// Sample data for contestants and available performance slots
const initialContestants = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Sarah Johnson" },
];

const availableSlots = [
  "Slot 1: 10:00 AM - 10:30 AM",
  "Slot 2: 10:30 AM - 11:00 AM",
  "Slot 3: 11:00 AM - 11:30 AM",
  "Slot 4: 11:30 AM - 12:00 PM",
];

const CreateRoundPage = () => {
  const [roundName, setRoundName] = useState("");
  const [assignments, setAssignments] = useState({});

  const handleRoundSave = () => {
    //api logics
  };

  // Handle round name change
  const handleRoundNameChange = (e) => {
    setRoundName(e.target.value);
  };

  // Handle time slot assignment to contestants
  const handleSlotChange = (contestantId, selectedSlot) => {
    setAssignments({
      ...assignments,
      [contestantId]: selectedSlot,
    });
  };

  // Remove the assigned slot for a contestant
  const handleRemoveSlot = (contestantId) => {
    const updatedAssignments = { ...assignments };
    delete updatedAssignments[contestantId];
    setAssignments(updatedAssignments);
  };

  // Filter out already assigned slots from the available slots
  const getAvailableSlots = (contestantId) => {
    const assignedSlots = Object.values(assignments);
    return availableSlots.filter((slot) => !assignedSlots.includes(slot));
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
        {/* Round Settings */}
        <div className="round-settings mb-4">
          <h2 className="text-3xl font-semibold text-center mb-4">
            Create Round
          </h2>
          <input
            type="text"
            placeholder="Enter round name"
            value={roundName}
            onChange={handleRoundNameChange}
            className=" p-3 border border-gray-300 rounded-lg  text-lg"
          />
        </div>

        {/* Contestants List with Dropdown for Time Slot */}
        <div className="contestants">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Assign Time Slots to Contestants
          </h3>
          <div className="contestant-list space-y-6">
            {initialContestants.map((contestant) => (
              <div
                key={contestant.id}
                className="contestant p-4 border border-gray-300 rounded-lg flex justify-between items-center"
              >
                <p className="text-xl font-medium text-gray-700">
                  {contestant.name}
                </p>

                <div className="w-1/2">
                  {/* Dropdown to select time slot */}
                  <select
                    value={assignments[contestant.id] || ""}
                    onChange={(e) =>
                      handleSlotChange(contestant.id, e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg text-lg"
                  >
                    <option value="">Select Time Slot</option>
                    {getAvailableSlots(contestant.id).map((slot, index) => (
                      <option key={index} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Display assigned slot */}
                {assignments[contestant.id] && (
                  <div className="assigned-slot text-green-500 mt-2 text-lg font-semibold">
                    Assigned Slot: {assignments[contestant.id]}
                    <button
                      onClick={() => handleRemoveSlot(contestant.id)}
                      className="ml-4 text-red-500 font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Button to save */}
        <div className="mt-8 text-center">
          <button
            className="bg-blue-600 text-white py-2 px-8 rounded-full text-xl font-semibold hover:bg-blue-700 transition duration-300"
            disabled={
              !roundName ||
              Object.keys(assignments).length !== initialContestants.length
            }
            onClick={handleRoundSave}
          >
            Save Round
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateRoundPage;
