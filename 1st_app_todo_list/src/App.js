import "./App.css";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTask(tasks);
  });
  function addTask(name) {
    setTask((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  return (
    <main>
      <TaskForm onAdd={addTask} />
      {tasks.map((task) => (
        <Task {...task} />
      ))}
    </main>
  );
}

export default App;
