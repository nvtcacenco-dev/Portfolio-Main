import './Description.css'


import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


function DescriptionBox() {

    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    
    const animationDuration = 1;
    const animationDelay = 2;

    function handleClick(section: string) {

        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            })
        }

    }
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <section id='home' className='description-container d-flex justify-content-center align-items-center flex-wrap flex-column'>

            <div className='col-10 position-relative d-flex flex-column' id='description-box'>
                <motion.ul className='description'>

                    <motion.p
                        className='welcome-tag'
                        initial={{ opacity: 0, translateY: -100 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: animationDuration, delay: 0.4 }}
                        viewport={{ once: true }}>
                        &#8212; Hello, I am
                    </motion.p>
                    <motion.p
                        className='description-title'
                        initial={{ opacity: 0, translateY: 100 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: animationDuration, delay: 0 }}
                        viewport={{ once: true }}>
                        Nicolae Tcacenco
                    </motion.p>

                    <motion.p
                        className='description-title'
                        id='outlined-text'
                        initial={{ opacity: 0, translateX: 200 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: animationDuration, delay: animationDuration }}
                        viewport={{ once: true }}>
                        FRONTEND {windowWidth < 576 && (<br/>)} & WEB
                    </motion.p>
                    <motion.p
                        className='description-title'
                        initial={{ opacity: 0, translateY: 100 }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: animationDuration, delay: 0.2 }}
                        viewport={{ once: true }}>
                        DEVELOPER
                    </motion.p>
                    <motion.p
                        className='description-tag'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: animationDuration, delay: animationDelay }}
                        viewport={{ once: true }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </motion.p>
                </motion.ul>
                <motion.div
                    className='contact-btn-container col-12 col-lg-4 d-flex'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: animationDuration, delay: animationDelay }}
                    viewport={{ once: true }}
                >
                    <Button disableRipple className='quick-btn fill' onClick={() => handleClick('projects')}><p className='btn-txt m-0'> See My Work</p></Button>
                    <Button disableRipple className='quick-btn slide' onClick={() => handleClick('footer')}></Button>
                </motion.div>

                <div className='col-12 d-flex justify-content-center justify-content-lg-end align-items-center column-gap-4' id='description-skills-container'>
                    <motion.div
                        className='skill-container'
                        initial={{ opacity: 0, translateX: 100 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: animationDuration, delay: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className='skill-icon-decoration' id='skill-icon-decoration-js' />
                        <div className='skill-icon' />
                        <p className='skill-icon-name'>JavaScript</p>

                    </motion.div>

                    <motion.div
                        className='skill-container'
                        initial={{ opacity: 0, translateX: 100 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: animationDuration, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className='skill-icon-decoration' id='skill-icon-decoration-ts' />
                        <div className='skill-icon' />
                        <p className='skill-icon-name'>TypeScript</p>

                    </motion.div>

                    <motion.div
                        className='skill-container'
                        initial={{ opacity: 0, translateX: 100 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: animationDuration, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className='skill-icon-decoration' id='skill-icon-decoration-html' />
                        <div className='skill-icon' />
                        <p className='skill-icon-name'>HTML5</p>

                    </motion.div>

                    <motion.div
                        className='skill-container'
                        initial={{ opacity: 0, translateX: 100 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: animationDuration, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className='skill-icon-decoration' id='skill-icon-decoration-css' />
                        <div className='skill-icon' />
                        <p className='skill-icon-name'>CSS3</p>

                    </motion.div>

                    <motion.div
                        className='skill-container'
                        initial={{ opacity: 0, translateX: 100 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{ duration: animationDuration, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className='skill-icon-decoration' id='skill-icon-decoration-react' />
                        <div className='skill-icon' />
                        <p className='skill-icon-name'>React</p>

                    </motion.div>

                </div>
            </div>

            <motion.div
                className='scroll-banner col-12'
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: animationDuration, delay: animationDelay }}
                viewport={{ once: true }}>
                <div className='scroll-link col-12' >
                    <div className=''>
                        <div className='mouse' onClick={() => handleClick('about')}></div>
                    </div>

                </div>
            </motion.div>

        </section>
    );
}
export default DescriptionBox;


