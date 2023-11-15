import { useState } from "react";

export default function TaskForm() {
  const [taskName, setTaskName] = useState("");
  return (
    <div>
      <form>
        <button>+</button>
        <input
          type="text"
          value={taskName}
          onChange={(ev) => setTaskName(ev.target.value)}
          placeHolder="Your next task..."
        />
      </form>
    </div>
  );
}
