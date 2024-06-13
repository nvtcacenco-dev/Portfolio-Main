import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Description from './components/content/description/Description';
import Skills from './components/content/skills/Skills';
import { Element } from 'react-scroll';
import Footer from './components/footer/Footer';
import About from './components/content/about/About';
import Projects from './components/content/projects/Projects';
import Navbar from './components/navigation/Navbar';
import { Fab } from '@mui/material';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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


  function handleClick() {

    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      })
    }

  }

  window.addEventListener('scroll', handleScroll);
  const fabName = fabClass === true ? 'fab-visible' : 'fab-hidden';

  return (
    <div className="App d-flex flex-column flex-lg-row m-0 overflow-x-hidden">


      <Navbar />
      <main className='content-container p-0' >

        <Description />


        <About />


        <Projects />



        <Skills />

        <Fab className={`${fabName}`} id='floating-action-btn' disabled={!fabClass} onClick={() => handleClick()}>
          <KeyboardArrowUpIcon fontSize='large' />
        </Fab>
      </main>



      {/* <Footer/> */}


    </div>
  );
}

export default App;
