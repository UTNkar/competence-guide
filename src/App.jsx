import {Routes, Route } from 'react-router-dom'
import './global.css'
// Custom components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Page imports
import Error404 from './pages/Error404'
import Home from './pages/Home'
import ProgramFinder from './pages/ProgramFinder'
import ComparePrograms from './pages/ComparePrograms'
import { Navigate, useParams} from 'react-router-dom'
import { I18nContext } from './utils/i18n/i18nContext';
import { getTranslation } from './utils/i18n'
const SUPPORTED_LANGUAGES = ['sv', 'en'];

const LanguageWrapper = ({ children }) => {
  const { lang } = useParams();

  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    return <Error404 />;
  }

  const translations = getTranslation(lang);

  return (
    <I18nContext.Provider value={translations}>
      {children}
    </I18nContext.Provider>
  );
};

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/sv" replace />} />
        <Route path=":lang">
          <Route index element={<LanguageWrapper><Home /></LanguageWrapper>} />
          <Route path='compare' element={<LanguageWrapper><ComparePrograms /></LanguageWrapper>} />
          <Route path='programs' element={<LanguageWrapper><ProgramFinder /></LanguageWrapper>} />
          <Route path='*' element={<LanguageWrapper><Error404 /></LanguageWrapper>} />
        </Route>

      </Routes>
      <Footer 
        // language={language}
        // passLanguageChange={handleLanguageChange}
      />
    </>
  )
}

export default App
