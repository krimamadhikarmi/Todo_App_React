import React, { useState } from "react";
import { Button } from "./Button";

export function TaskForm({ onAddTask }) {
  const [list, setList] = useState("");

  function addTask() {
    if (list) {
      onAddTask(list);
      setList("");
    }
  }

  function changeHandle(event) {
    setList(event.target.value);
  }

  return (
    <div className="rounded overflow-hidden shadow-lg shadow-sky-900 bg-sky-300 mb-5 w-2/6 ml-14">
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
          <Button
            onClick={addTask}
            color="blue"
            className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none rounded-md"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
