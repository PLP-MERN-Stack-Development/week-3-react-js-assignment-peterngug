import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import Users from './pages/Users' // Make sure this file exists
import { ThemeProvider } from './Context/ThemeContext'
import './App.css'
import BackgroundMarquee from './components/BackgroundMarquee'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <BackgroundMarquee />
        <div className="relative z-10">
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </MainLayout>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App