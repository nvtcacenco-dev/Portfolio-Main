import React from 'react';

import './About.css'

import cvImg from '../../../img/cv_img.jpg'
import { Link } from 'react-scroll';
import { Button, Paper } from '@mui/material';
import FileOpenIcon from '@mui/icons-material/FileOpen';

function About(){
    return(
        <section className='aboutme-container'>
            
            <section className='about-pic'>
                <div className='pic-container'  >
                  
                </div>
            </section>
            <section className='about-section'>
                <p className='about-title'>About me</p>
                <h2>Get To Know Me</h2>
                <h4>
                    A HTML Email Developer with a comprehensive understanding of email design. 
                    From translating design mockups into HTML email documents, 
                    I create original and effective designs that take all project deliverables into account. 
                    Personal development is very important to me and I'm constantly improving my skills and knowledge to get the best results from every campaign. 
                    My meticulous attention to detail and ability to work within tight deadlines ensures I deliver projects on time, on budget, and on specification
                </h4>
                <Button className='btn-cv fill2'>
                    <p className='btn-cv-txt' >My CV</p>
                    <FileOpenIcon className='open-cv-icon'/>
                </Button>
            </section>
            {/* <section className='scroll-banner'>
                <Link activeClass='active' className='scroll-link' smooth={true} spy={true} offset={-100} to="about-me">
                    <div className='arrow-container'>
                        <span className="arrow right"></span>
                    </div>
                </Link>
            </section>  */}
        </section>
    )
}

export default About;