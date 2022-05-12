// import LogContainer from './components/LogContainer.js'
import StudentProfilePage from './pages/StudentProfilePage.js'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      {/*<img className='home-logo' src='assets/img/logo-becode.png' alt='BeCode logo with the motto "In code we trust"' />
      <LogContainer /> */}
      <StudentProfilePage />
    </div>
    </Router>
  );
}

export default App;
