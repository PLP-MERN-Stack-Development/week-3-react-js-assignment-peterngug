import { useState } from 'react'
import useLocalStorage from '../utils/useLocalStorage'
import Button from '../components/button'
import Card from '../components/card'

const Tasks = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", [])
  const [input, setInput] = useState("")
  const [filter, setFilter] = useState("all")

  const addTask = () => {
    if (!input.trim()) return
    const newTask = { id: Date.now(), text: input, completed: false }
    setTasks([...tasks, newTask])
    setInput("")
  }

  const toggleTask = (id) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))

  const deleteTask = (id) =>
    setTasks(tasks.filter(t => t.id !== id))

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

  return (
    <Card title="Task Manager">
      <div className="mb-4">
        <input
          className="border px-3 py-2 rounded w-full dark:bg-gray-700"
          placeholder="New task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="primary" onClick={addTask} className="mt-2">Add Task</Button>
      </div>

      <div className="mb-4">
        <Button variant={filter === "all" ? "primary" : "secondary"} onClick={() => setFilter("all")}>All</Button>
        <Button variant={filter === "active" ? "primary" : "secondary"} onClick={() => setFilter("active")} className="ml-2">Active</Button>
        <Button variant={filter === "completed" ? "primary" : "secondary"} onClick={() => setFilter("completed")} className="ml-2">Completed</Button>
      </div>

      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} className="flex justify-between items-center p-2 border-b">
            <span className={task.completed ? "line-through text-gray-900" : ""}>{task.text}</span>
            <div>
              <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
              <Button variant="danger" onClick={() => deleteTask(task.id)} className="ml-2">Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default Tasks