import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

// Page imports
import Error404 from './pages/Error404';
import Home from './pages/Home';
import ProgramFinder from './pages/ProgramFinder';

function App() {
  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/programs" element={<ProgramFinder/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
    <Footer/>
  </Router>
  )
}

export default App
