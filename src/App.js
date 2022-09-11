import './App.css';
import React, {useState, createContext} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import Menu from './components/Hamburger';


export const AppContext = createContext();

function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <AppContext.Provider value={{menuActive, setMenuActive}}>
      <div className='flex flex-col'>
        <Navbar />
        <div className='min-h-[78vh] relative'>
          {menuActive && <Menu />}
          {!menuActive && <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>}
        </div>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
