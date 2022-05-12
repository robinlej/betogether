import Login from './pages/Login.js'
import StudentProfilePage from './pages/StudentProfilePage.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/'
            exact
            element={ <Login /> }
          />
          <Route
            path='/profile'
            exact
            element={ <StudentProfilePage /> }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
