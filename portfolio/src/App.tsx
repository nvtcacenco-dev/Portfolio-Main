import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navigation/Navbar';
import Description from './components/content/description/Description';
import Skills from './components/content/skills/Skills';
import { Element } from 'react-scroll';
import Footer from './components/footer/Footer';
import About from './components/content/about/About';
import Projects from './components/content/projects/Projects';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      
      <main className='content-container'>
        <Element className='home content-section' name='home'>
            <Description/>
        </Element>
        <Element className='projects content-section' name='projects'>
          <Projects/>
        </Element>
        <Element className='about-me content-section' name='about-me'>
          <About/>
        </Element>
        <Element className='skills-section content-section' name='skills'>
          <Skills/>
        </Element>
        
      </main>
      
      <Footer/>
      
      
    </div>
  );
}

export default App;
