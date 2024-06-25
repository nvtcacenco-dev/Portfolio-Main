import { useRef } from 'react';

import './About.css'
import PageTitle from '../../misc/PageTitle';
import { useEffect, useState } from 'react';
import { ComponentProps } from '../../../model/types';
import AboutLayoutXL from './AboutLayoutXL';
import AboutLayoutMD from './AboutLayoutMD';
import AboutLayoutSM from './AboutLayoutSM';


export default function About({ onIntersectionChange }: ComponentProps) {
   
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

    const handleLayout = () =>{
        if (windowWidth >= 1200) {
            return <AboutLayoutXL/>
        } else if (windowWidth >= 768) {
            return <AboutLayoutMD/>
        } else {
            return <AboutLayoutSM/>
        }
    }
        
    

    return (
        <section aria-labelledby="about-section-title" ref={aboutRef} id='about' className='about-section d-flex justify-content-center align-items-center col-12 position-relative'>
            <PageTitle title={'about'} dir={'right'} />
            <article className='about-container col-11 col-xxl-9 d-flex px-lg-0 flex-wrap row-gap-5 justify-content-center align-items-center'>
                {handleLayout()}
            </article>

            

        </section>
    )
}
