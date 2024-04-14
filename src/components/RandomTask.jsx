import { useState } from "react";

export default function RandomTask({ tasks }) {
  const [randomTask, setRandomTask] = useState("");

  function randomize() {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    setRandomTask(tasks[randomIndex]);
  }

  return (
    <>
      <div className="rounded overflow-hidden shadow-lg w-2/6 shadow-red-900 bg-red-400 mb-5 mt-8 h-24">
        <div className="px-6 py-8 h-full flex flex-col justify-center items-center">
          <div className="flex items-center">
            <h2 className="font-bold text-xl mb-2 text-center text-white mt-6 mr-12">
              Random
            </h2>
            <button
              onClick={randomize}
              className="px-2 py-1  mt-4 text-white bg-red-700 rounded-md hover:bg-red-600 focus:outline-none"
            >
              Random
            </button>
          </div>
          <div className="font-bold text-xl mt-2 mb-4">
            <span>{randomTask}</span>
          </div>
        </div>
      </div>
    </>
  );
}
