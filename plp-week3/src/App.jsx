import { useState } from "react";
import Task from "./components/Task.jsx"; 
import TaskForm from "./components/TaskForm.jsx";



export default function App() {
  
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a Todo App", completed: false },
  ]);

  const handleToggle = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAdd = (title) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TaskForm onAdd={handleAdd} />
      <div className="space-y-2">
        {tasks.map(task => (
          <Task key={task.id} {...task} onToggle={handleToggle} />
        ))}
      </div>
    </div>
  );
}