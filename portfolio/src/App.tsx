import React, { Suspense, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import HeroPage from './components/content/hero/HeroPage';
import Skills from './components/content/skills/Skills';
import { Element } from 'react-scroll';
import Footer from './components/footer/Footer';
import About from './components/content/about/About';
import Projects from './components/content/projects/Projects';
import Navbar from './components/navigation/Navbar';
import { Fab } from '@mui/material';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { handleSectionClick } from './model/functions';

function App() {
  const [fabClass, setFabClass] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const showFab = () => {
    const scrollVal = windowWidth > 992 ? 400 : 100; 
    if (window.scrollY > scrollVal) {
      setFabClass(true);

    } else {
      setFabClass(false);

    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = () => {
    showFab();
  };
 

  window.addEventListener('scroll', handleScroll);
  const fabName = fabClass === true ? 'fab-visible' : 'fab-hidden';
  const [activeSection, setActiveSection] = useState<string>('home');

  // Function to handle intersection changes
  const handleIntersectionChange = (sectionName: string) => {
    setActiveSection(sectionName);
  };
  return (
    <>
      <Navbar activeSection={activeSection} />
      <main className='content-container p-0' >
        <HeroPage onIntersectionChange={handleIntersectionChange} />
        <About onIntersectionChange={handleIntersectionChange} />
        <Projects onIntersectionChange={handleIntersectionChange} />
        <Skills onIntersectionChange={handleIntersectionChange} />
        <Fab aria-label='Back to top' className={`${fabName}`} id='floating-action-btn' disabled={!fabClass} onClick={() => setTimeout(function() {window.scrollTo(0, 0);},1)}>
          <KeyboardArrowUpIcon fontSize='large' />
        </Fab>
      </main>
      <Footer/>
    </>
  );
}

export default App;
