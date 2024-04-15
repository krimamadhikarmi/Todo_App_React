import { useState } from "react";
import { Button } from "./Button";
export default function RandomTask({ tasks }) {
const [randomTask, setRandomTask] = useState("");

  function randomize() {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    setRandomTask(tasks[randomIndex]);
  }

  return (
    <div className="bg-red-400 rounded-lg shadow-lg shadow-red-900  overflow-hidden w-1/4 mb-5 mt-8 h-32">
      <div className="px-6 py-8 h-full flex flex-col justify-center items-center">
        <div className="flex items-center">
          <h2 className="font-bold text-2xl mb-2 text-center text-white mr-12">
            Random
          </h2>
          <Button
              onClick={randomize}
              color={"red"}
          >
            Random</Button>
        </div>
        <div className="font-bold text-white text-xl mt-6">{randomTask}</div>
      </div>
    </div>
  );
}
