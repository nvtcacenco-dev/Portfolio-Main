import './Description.css'


import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UseAnimations from "react-useanimations";
import arrowDown from 'react-useanimations/lib/arrowDownCircle';
import ScrollDownArrow from '../../misc/ScrollDownArrow';

function DescriptionBox() {

    const [isOver, setOver] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Engineer.", "Web Developer.", "Frontend Developer."];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(250)
    const period = 3000;

    const [isVisible, setVisible] = useState(true);
    const visibility = isVisible ? "visible" : "hidden";


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])

    useEffect(() => {
        let blinker = setInterval(() => {
            if (isVisible) {
                setVisible(false)
            } else {
                setVisible(true)
            }

        }, 700)
        return () => { clearInterval(blinker) }
    }, [isVisible])


    function tick() {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(100)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(250);
        }
    }

    return (
        <section className='description-container'>
            {/* <div className='brand-clr-box'></div> */}
            <section className='description'>
                
                <h6 className='welcome-tag'> &#8212; Hello, I am</h6>
                <h1 className='description-title'>Nicolae Tcacenco
                    
                </h1>
                <div className='wrap'><h1 className='typing-text'>{text}</h1>
                    <div className='typing-divider'>K</div>
                    </div> 
                <h4 className='description-tag'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
            </section>
            <section className='contact-btn-container'>
                <Link activeClass='active' className='page-link' smooth={true} spy={true} offset={-50} duration={1000} to="projects">
                    <Button disableRipple className='quick-btn fill'><p className='btn-txt'> See My Work</p></Button>
                </Link>
                <Link activeClass='active' className='page-link' smooth={true} spy={true} offset={0} duration={2000} to="footer">
                    <Button disableRipple className='quick-btn slide'></Button>
                </Link>
                
                
            </section>

            <section className='scroll-banner'>
                <Link activeClass='active' className='scroll-link' smooth={true} spy={true} offset={-50} duration={1000} to="projects">
                    <div className=''>
                        <div className='mouse'></div>
                    </div>
                    {/* <div className='arrow-container'>
                        <span className="arrow right"></span>

                        
                    </div> */}
                </Link>
            </section> 
        </section>
    );
}
export default DescriptionBox;


