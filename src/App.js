// import LogContainer from './components/LogContainer.js'
import StudentProfilePage from './pages/StudentProfilePage.js'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      {/* <LogContainer /> */}
      <StudentProfilePage />
    </div>
    </Router>
  );
}

export default App;
