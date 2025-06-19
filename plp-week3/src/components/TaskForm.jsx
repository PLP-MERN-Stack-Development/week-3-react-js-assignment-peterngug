import {useState} from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">
        Add Task
      </button>
    </form>
  );
}

// This component allows users to add new tasks to the list.
// It uses a controlled input to manage the task title and calls the onAdd function
