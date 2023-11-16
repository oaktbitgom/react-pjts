import "./App.css";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const numberCompleted = tasks.filter((t) => t.done).length;
  const numberTotal = tasks.length;

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks);
  }, []);

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;

      return newTasks;
    });
  }

  function getMessage() {
    const percentage = (numberCompleted / numberTotal) * 100;
    if (percentage === 0) {
      return "try to do at least one! 🙏";
    }
    if (percentage === 100) {
      return "Nice job for today! 🤩";
    }
    return "Keep it going 💪";
  }

  return (
    <main>
      <h1>
        {numberCompleted}/{numberTotal} Complete
      </h1>
      <h2>{getMessage()}</h2>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task {...task} onToggle={(done) => updateTaskDone(index, done)} />
      ))}
    </main>
  );
}

export default App;
