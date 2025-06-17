import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-200 min-h-[60vh] flex flex-col items-center justify-center rounded-lg shadow-lg">
      <div className="bg-white/80 dark:bg-gray-800/80 p-8 rounded-xl shadow-xl max-w-xl w-full text-center">
        <img
          src="/gs.png"
          alt="App Logo"
          className="mx-auto mb-6 w-20 h-20 animate-bounce"
        />
        <h1 className="text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-4 drop-shadow">
          Welcome to My Task App!
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-8">
          Organize your tasks, manage users, and boost your productivity.<br />
          Use the navigation bar above to get started.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/tasks">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
              View Tasks
            </button>
          </Link>
          <Link to="/users">
            <button className="bg-white hover:bg-blue-100 text-blue-700 font-semibold px-6 py-3 rounded-lg shadow border border-blue-300 transition">
              Manage Users
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home