import "./App.css";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  function addTask(name) {
    setTask((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  return (
    <main>
      <TaskForm onAdd={addTask} />
      {task.map((task) => (
        <Task {...task} />
      ))}
    </main>
  );
}

export default App;
