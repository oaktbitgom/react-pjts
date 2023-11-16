import Checkbox from "./Checkbox";

export default function Task({ name, done, onToggle }) {
  return (
    <div className={"task " + (done ? "done" : "")}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      {name}
    </div>
  );
}
