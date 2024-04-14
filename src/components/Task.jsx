import { useState } from "react";
import  RandomTask  from "./RandomTask";
import { TaskDisplay } from "./TaskDisplay";

export function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [list, setList] = useState("");
 

  function addTask() {
    if (list) {
      setTasks([...tasks, list]);
      setList("");
    }
  }

  function changeHandle(event) {
    setList(event.target.value);
  }

  return (
    <>
      <div className="flex justify-center mt-16 mx-auto">
        <div className="rounded overflow-hidden shadow-lg shadow-sky-900 bg-sky-200 mb-5 w-2/6 ml-14">
          <div className="px-6 py-8 h-full flex">
            <div className="mt-2 ml-5">
              <input
                type="text"
                name="name"
                value={list}
                onChange={changeHandle}
                placeholder="Enter task"
                className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="ml-10  flex items-center">
              <button
                onClick={addTask}
                className="w-full mr-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-8">
        <TaskDisplay tasks={tasks}/>
        <RandomTask tasks={tasks}/>
      </div>
    </>
  );
}
