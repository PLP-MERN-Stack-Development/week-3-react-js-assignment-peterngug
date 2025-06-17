import { useEffect, useState } from 'react'
import Card from '../components/card'
import Button from '../components/button'

const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const limit = 10

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}&_page=${page}`)
        const data = await res.json()
        if (data.length < limit) setHasMore(false)
        setUsers(prev => [...prev, ...data])
      } catch (err) {
        setError("Failed to load users")
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [page])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const loadMore = () => {
    if (!loading && hasMore) setPage(p => p + 1)
  }

  return (
    <Card title="User List">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="relative mb-6">
          <input
            placeholder="🔍 Search by name..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 pl-10 border border-blue-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white transition"
          />
          <span className="absolute left-3 top-2.5 text-blue-400 dark:text-blue-200">
            <svg width="16" height="16" fill="currentColor"><path d="M11.742 10.344a6.471 6.471 0 001.486-4.144C13.228 2.925 10.303 0 6.614 0 2.925 0 0 2.925 0 6.614c0 3.689 2.925 6.614 6.614 6.614a6.471 6.471 0 004.144-1.486l4.243 4.243a1 1 0 001.414-1.414l-4.243-4.243zM6.614 11.228A4.614 4.614 0 112.001 6.614a4.614 4.614 0 014.613 4.614z"/></svg>
          </span>
        </div>
        <Button
          variant="secondary"
          onClick={loadMore}
          className="sm:ml-4"
          disabled={loading || !hasMore}
        >
          {hasMore ? (loading ? "Loading..." : "Load More") : "No More Users"}
        </Button>
      </div>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <ul className="divide-y divide-blue-100 rounded-lg shadow bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        {filteredUsers.length === 0 && !loading && (
          <li className="p-6 text-center text-gray-400">No users found.</li>
        )}
        {filteredUsers.map(user => (
          <li
            key={user.id}
            className="flex items-center justify-between p-4 transition hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg"
          >
            <div>
              <span className="font-semibold text-blue-700 dark:text-blue-200 text-lg hover:underline cursor-pointer">
                {user.name}
              </span>
              <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
              <div className="text-xs text-blue-400 dark:text-blue-300">{user.company?.name}</div>
            </div>
            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs px-3 py-1 rounded-full shadow">
              {user.username}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default Users