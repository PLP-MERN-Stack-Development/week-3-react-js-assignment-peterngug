export default function Task({ id,title, completed, onToggle }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className="mr-2"
        />
        <span className={completed ? "line-through text-gray-500" : ""}>
          {title}
        </span>
      </div>
      <button className ="text-red-500 hover:text-blue-700" onClick={() => onToggle(id)}>
        {completed ? "Undo" : "Complete"} </button>

    </div>
  );
}