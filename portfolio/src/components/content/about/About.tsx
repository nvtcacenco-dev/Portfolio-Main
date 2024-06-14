import React, { useContext, useRef } from 'react';

import './About.css'

import cvImg from '../../../img/cv_img.jpg'
import { Link } from 'react-scroll';
import { Button, Paper, SvgIcon, duration } from '@mui/material';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import PageTitle from '../../misc/PageTitle';
import { motion } from 'framer-motion';
import arrowIcon from '../../../img/arrow.svg'
import { useEffect, useState } from 'react';
import { LanguageContext, LanguageContextType } from '../../../model/LanguageContext';
import { ComponentProps, aboutTaglineStringPart1, aboutTaglineStringPart2, aboutTaglineStringPart3, btnContactMeString } from '../../../model/types';


export default function About({ onIntersectionChange }: ComponentProps) {
    const { language } = useContext<LanguageContextType>(LanguageContext);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const aboutRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    onIntersectionChange('about me');
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        });

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [onIntersectionChange]);
    
    return (
        <section ref={aboutRef} id='about' className='about-section d-flex justify-content-center align-items-center col-12 position-relative'>
            <div className='about-container col-10 col-lg-9 d-flex px-lg-0 flex-wrap row-gap-5'>
                <div className='col-12 col-lg-7 d-flex align-content-center flex-column'>
                    <h2 className='col-12 mb-5 mb-lg-0' /* variants={textContainer} */  >
                        <motion.p
                            className='mb-0'
                            initial={{ opacity: 0, translateY: -50 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {aboutTaglineStringPart1[language]}
                        </motion.p>

                        <motion.span
                            id='title-text-transform'
                            initial={{ opacity: 0, translateX: 100 }}
                            whileInView={{ opacity: 1, translateX: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {windowWidth > 576 && (<div className='col-2' id='title-text-dash' />)}

                            <p className='col-9 mb-0 flex-grow-1'>
                                {aboutTaglineStringPart2[language]}
                            </p>
                        </motion.span>
                        <motion.p
                            className='mb-0'
                            initial={{ opacity: 0, translateY: 100 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {aboutTaglineStringPart3[language]}
                        </motion.p>
                    </h2>
                    {windowWidth < 576 && (
                        <div className='col-12 col-lg-5 px-lg-3 d-flex justify-content-center align-items-end' id='img-container'>
                            <motion.div
                                id='img-box'
                                className='col-10 position-relative'
                                initial={{ opacity: 0, translateX: 300 }}
                                whileInView={{ opacity: 1, translateX: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div id='personal-img'></div>
                                <motion.div
                                    id='img-box-style'
                                    initial={{ opacity: 0, rotate: 0 }}
                                    whileInView={{ opacity: 1, rotate: 10 }}

                                    transition={{ duration: 0.8, delay: 1 }}
                                    viewport={{ once: true }} />
                            </motion.div>

                        </div>)}
                    <div className='d-flex' id='about-description-container'>
                        <motion.div
                            initial={{ opacity: 0, translateY: 100 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='col-12 col-lg-7'
                        >

                            <p className='col-12' id='about-description'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                In rhoncus leo sed rutrum elementum.
                                Aenean lectus nisi, feugiat in egestas sed,
                                blandit sit amet nulla. Sed at mattis arcu,
                                id luctus tortor. Phasellus ut eros at lectus suscipit rutrum vel a felis.
                                Nullam convallis lorem neque, at tincidunt odio tempus nec.
                                Duis pharetra et libero sit amet pharetra. Sed euismod at magna nec ultricies.
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                Praesent in sapien varius, lobortis ex sit amet, euismod sapien.
                            </p>
                            <div className='col-12 d-flex' id='contact-me-btn-container'>
                                <Button className='col-6' id='contact-me-btn'>
                                    <p>{btnContactMeString[language]}</p>
                                </Button>
                            </div>
                        </motion.div>
                        {windowWidth > 576 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 2, delay: 1 }}
                                viewport={{ once: true }}
                                className='col-5' id='about-description-arrow-container'
                            >


                                <div id='about-description-arrow' />


                            </motion.div>)}


                    </div>
                </div>
                {windowWidth > 576 && (
                    <div className='col-12 col-lg-5 px-3 d-flex justify-content-center align-items-end' id='img-container'>
                        <motion.div
                            id='img-box'
                            className='col-10 position-relative'
                            initial={{ opacity: 0, translateX: 300 }}
                            whileInView={{ opacity: 1, translateX: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div id='personal-img'></div>
                            <motion.div
                                id='img-box-style'
                                initial={{ opacity: 0, rotate: 0 }}
                                whileInView={{ opacity: 1, rotate: 5 }}

                                transition={{ duration: 0.8, delay: 1 }}
                                viewport={{ once: true }} />
                        </motion.div>

                    </div>)}
            </div>

            <PageTitle title={'about'} dir={'right'} />

        </section>
    )
}
