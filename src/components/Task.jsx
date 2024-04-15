import { useState } from "react";
import RandomTask from "./RandomTask";
import { TaskDisplay } from "./TaskDisplay";
import { TaskForm } from "./TaskForm";

export function Tasks() {
  const [tasks, setTasks] = useState([]);

  function addTask(list) {
    setTasks([...tasks, list]);
  }

  return (
    <>
      <div className="flex justify-center mt-16 mx-auto">
        <TaskForm onAddTask={addTask} />
      </div>
      <div className="flex justify-center space-x-8">
        <TaskDisplay tasks={tasks} />
        <RandomTask tasks={tasks} />
      </div>
    </>
  );
}
