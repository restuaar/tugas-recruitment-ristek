import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';

const renderPage = (q) => {
  const page = q;
  return (
    <div className='App'>
      <div className='App-header'>
        {page}
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={renderPage(<Home/>)}/>
        <Route path='/profile' element={renderPage(<UserProfile/>)}/>
      </Routes>
    </Router>

  );
}

export default App;
