import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './global.css'

// Custom components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Page imports
import Error404 from './pages/Error404'
import Home from './pages/Home'
import ProgramFinder from './pages/ProgramFinder'
import ComparePrograms from './pages/ComparePrograms'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/compare' element={<ComparePrograms />} />
        <Route path='/' element={<Home />} />
        <Route path='/programs' element={<ProgramFinder />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
