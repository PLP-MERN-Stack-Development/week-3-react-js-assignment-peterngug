import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
      <nav className="bg-gray-600 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">MyApp</div>
        <div className="flex items-center space-x-4">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
          <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tasks">Tasks</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar