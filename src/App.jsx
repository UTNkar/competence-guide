import {Routes, Route } from 'react-router-dom'
import './global.css'
import { useState } from "react"
import i18n from "./utils/i18n"

// Custom components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Page imports
import Error404 from './pages/Error404'
import Home from './pages/Home'
import ProgramFinder from './pages/ProgramFinder'
import ComparePrograms from './pages/ComparePrograms'
import { useLocation, useNavigate } from 'react-router-dom'



function App() {
  const languages = {
  en: "English",
  sv: "Svenska"
  };

  const location = useLocation();
  const navigate = useNavigate();

  const [language, setLanguage] = useState(i18n.language);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    const [language, ...path] = location.pathname.slice(1).split("/");

    if (language in languages) {
      navigate(
        {
          ...location,
          pathname: `/${[lang, ...path].join("/")}`
        },
        { replace: true }
      );
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path=":language">
          <Route index element={<Home />} />
          <Route path='compare' element={<ComparePrograms />} />
          <Route path='programs' element={<ProgramFinder />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
      <Footer 
        language={language}
        passLanguageChange={handleLanguageChange}
      />
    </>
  )
}

export default App
