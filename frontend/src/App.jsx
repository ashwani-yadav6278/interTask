
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import Navbar from './components/Navbar';


function App() {
  
  return (
    
    <BrowserRouter>
    <>
    <Navbar />
    <Routes>
      
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
    </BrowserRouter>
    
  )
    
  
}

export default App
