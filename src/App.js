import Login from './pages/Login.js'
import StudentProfilePage from './pages/StudentProfilePage.js'
import StudentDashboard from './pages/StudentDashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StudentWelcomePage from './pages/StudentWelcomePage.js'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/profile' exact element={<StudentProfilePage />} />
          <Route path='/dashboard' exact element={<StudentDashboard />} />
          <Route path='/welcome' exact element={<StudentWelcomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
