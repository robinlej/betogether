import Login from './pages/Login.js'
import StudentProfilePage from './pages/StudentProfilePage.js'
import StudentDashboard from './pages/StudentDashboard'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import StudentWelcomePage from './pages/StudentWelcomePage.js'
import { createContext, useState } from 'react'
// import TestComponent from './pages/signup-test.js'

export const UserContext = createContext()

export function setCookie(cname, cvalue, exdays) {
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  let expires = 'expires=' + d.toUTCString()
  document.cookie =
    cname + '=' + cvalue + ';' + expires + ';path=/; SameSite=Lax;'
}

function getCookie(cname) {
  let name = cname + '='
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return null
}

export function App() {

  const [token, setToken] = useState(getCookie('token'))

  return (
    <UserContext.Provider value={{ token, setToken }}>
      <div className='App'>
        <Router>
          <Routes>
            <Route
              path='/'
              exact
              element={
                token !== null ? <Navigate replace to='/welcome' /> : <Login />
              }
            />
            <Route path='/welcome' exact element={token !== null ? <StudentWelcomePage /> : <Navigate replace to='/' />} />
            <Route path='/profile' exact element={token !== null ? <StudentProfilePage /> : <Navigate replace to='/' />} />
            <Route path='/dashboard' exact element={token !== null ? <StudentDashboard /> : <Navigate replace to='/' />} />
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
  )
}