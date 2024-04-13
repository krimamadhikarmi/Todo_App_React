import { useState } from "react";
import { Tittle } from "./Tittle";
export function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [list, setList] = useState("");
  const [randomTask, setRandomTask] = useState("");

  function addTask() {
    if (list) {
      setTasks([...tasks, list]);
      setList("");
    }
  }

  function changeHandle(event) {
    setList(event.target.value);
  }

  function randomize() {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    setRandomTask(tasks[randomIndex]);
  }

  return (
    <>
      <Tittle/>
      <div class="flex justify-center mt-16 mx-auto">
        <div class="rounded overflow-hidden shadow-lg shadow-sky-900 bg-sky-200 mb-5 w-2/6 ml-14">
          <div class="px-6 py-8 h-full flex">
            <div class="mt-2 ml-5">
              <input
                type="text"
                name="name"
                value={list}
                onChange={changeHandle}
                placeholder="Enter task"
                className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div class="ml-10  flex items-center">
              <button
                onClick={addTask}
                className="w-full mr-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Save
              </button>
              <button
                onClick={randomize}
                className="w-full px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none"
              >
                Random
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center space-x-8">
        <div class="rounded overflow-hidden shadow-lg shadow-purple-900 w-2/6 bg-purple-400 mb-5 mt-8">
          <div class="px-6 py-8 h-full flex flex-col justify-center">
            <h2 class="font-bold text-xl mb-2 text-center text-white">Tasks</h2>
            <div class="font-bold text-md text-white mb-2">
              {tasks.map((task, index) => (
                <div key={index}>{task}</div>
              ))}
            </div>
          </div>
        </div>

        <div class="rounded overflow-hidden shadow-lg w-2/6 shadow-red-900 bg-red-400 mb-5 mt-8 h-24">
          <div class="px-6 py-8 h-full flex flex-col justify-center">
          <h2 class="font-bold text-xl mb-2 text-center text-white mt-4">Random</h2>
            <div class="font-bold text-xl mb-2">
              <span> {randomTask}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
