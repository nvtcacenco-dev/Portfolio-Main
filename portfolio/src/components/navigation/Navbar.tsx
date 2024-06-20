import { Link } from "react-scroll";
import "./Navbar.css";
import { Collapse, SvgIcon } from "@mui/material";
import { useContext, useEffect, useState, useRef } from "react";
import { handleSectionClick } from "../../model/functions";
import {
    LanguageContext,
    LanguageContextType,
} from "../../model/LanguageContext";
import { Language, languageString, navStrings } from "../../model/types";
import { Squash as Hamburger } from 'hamburger-react';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import SpeedIcon from '@mui/icons-material/Speed';
import LanguageIcon from '@mui/icons-material/Language';

interface NavbarProps {
    activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
    const [navClass, setNavClass] = useState<boolean>(false);

    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    const [elementHeight, setElementHeight] = useState<number>(0);

    const { language, setLanguage } = useContext<LanguageContextType>(LanguageContext);

    const widthSM = 576;

    function IconSwitch(iconName: string) {
        switch (iconName) {
            case "home":
                return <HomeIcon />
            case "about me":
                return <AccountCircleIcon />
            case "projects":
                return <WorkIcon />
            case "skills":
                return <SpeedIcon />
            default:
                break;
        }
    }

    const navLinkMap = navStrings.map((link, index) => (
        <li key={index} className="">
            <button
                className={`nav-link  ${activeSection === link.stringName ? "active" : ""}`}
                onClick={() => handleSectionClick(link.stringName)}
            >
                {windowWidth < widthSM ? (
                    <div className="d-flex align-items-center column-gap-2 px-2">
                        {IconSwitch(link.stringName)}
                        <p className="mb-0">
                            {link.stringRecord[language]}
                        </p>
                    </div>

                ) : (
                    <>{link.stringRecord[language]}</>
                )

                }



            </button>
        </li>
    ));
    const changeNavBarClr = () => {
        if (window.scrollY > 30) {
            setNavClass(true);
        } else {
            setNavClass(false);
        }
    };

    const handleScroll = () => {
        changeNavBarClr();
    };

    const handleNavOpen = () => {
        setIsNavOpen(!isNavOpen);
    }

    window.addEventListener("scroll", handleScroll);
    const navName = navClass === true ? "navbar-changed" : "";
    const expandedNavName = isNavOpen ? "nav-expanded" : "nav-collapsed";
    const enLangBtnName = language === "en" ? "lang-btn-active" : "";
    const dkLangBtnName = language === "dk" ? "lang-btn-active" : "";

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        function handleLangPrefStorage() {
            const storedLanguage = localStorage.getItem('language');
            console.log(storedLanguage);
            if (!storedLanguage || localStorage.getItem('language') === '') {
                localStorage.setItem("language", JSON.stringify(Language.ENGLISH));
                setLanguage(Language.ENGLISH);
            }
        }
        handleLangPrefStorage();
    }, [language]);

    useEffect(() => {
        function handleCollapsedNavPosition() {
            const collapsedNavElement = document.getElementById('nav-links-container-sm');
            if (collapsedNavElement && isNavOpen) {
                setElementHeight(collapsedNavElement.offsetHeight);
            }
        }

        handleCollapsedNavPosition();

    }, [windowWidth, isNavOpen])




    return (
        <nav
            className={`${navName} col-12 position-fixed top-0 d-flex justify-content-center align-items-center `}
            id="custom-nav"
        >
            <div className="col-11 col-lg-10 d-flex justify-content-between align-items-center h-100 position-relative z-1" >
                
                <div className="logo d-flex justify-content-center align-items-center">
                    <a href="/">
                        <SvgIcon>
                            <svg
                                viewBox="90.2931 0 100 49.8338"
                                width="100"
                                height="49.8338"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g
                                    id="SvgjsG1824"
                                    transform="matrix(3.3997230529785156, 0, 0, 3.3997230529785156, 87.37103271484375, -18.2935733795166)"
                                    fill="var(--dark-clr)"
                                >
                                    <path d="M15.088 13.6328 l-1.4551 6.3574 l-4.541 0 l-1.9336 -6.3574 l-0.22461 0 l-1.4746 6.3574 l-4.5996 0 l1.4746 -6.3574 l-0.88867 0 l1.8848 -8.1836 l5.3613 0 l1.582 5.1367 l1.2012 -5.1367 l4.6191 0 l-1.8945 8.1836 l0.88867 0 z M25.459109375 13.3594 l-1.4844 6.6797 l-4.9512 0 l1.5234 -6.6797 l-0.88867 0 l0.98633 -4.2773 l-3.9063 0 l0.85938 -3.7012 l12.676 0 l-0.83008 3.7012 l-3.8965 0 l-0.95703 4.2773 l0.86914 0 z" />
                                </g>
                            </svg>
                        </SvgIcon>
                    </a>
                </div>
                {windowWidth < widthSM && (<Hamburger size={20} onToggle={handleNavOpen} />)}

                {windowWidth > widthSM && (<ul className="d-flex justify-content-center align-items-center h-100 column-gap-4">
                    {navLinkMap}
                    <li className="">
                        <button
                            className={`nav-link lang-btn ${enLangBtnName}`}
                            id="btn-en"
                            onClick={() => setLanguage(Language.ENGLISH)}
                        ></button>
                    </li>
                    <li className="">
                        <button
                            className={`nav-link lang-btn ${dkLangBtnName}`}
                            id="btn-dk"
                            onClick={() => setLanguage(Language.DANISH)}
                        ></button>
                    </li>
                </ul>)
                }

            </div>

            {windowWidth < widthSM && (<div id="nav-links-container-sm" className={`d-flex ${expandedNavName}`} style={{ bottom: -elementHeight }}>

                <ul className="d-flex flex-column h-100 justify-content-center">
                    {navLinkMap}
                    <hr className="m-0"/>
                    <li className="d-flex align-items-center column-gap-2 px-2">
                        <LanguageIcon/>
                        <p className="mb-0 me-auto">{languageString[language]}</p>
                        <button
                            className={`nav-link lang-btn ${enLangBtnName}`}
                            id="btn-en"
                            onClick={() => setLanguage(Language.ENGLISH)}
                        />
                        <button
                            className={`nav-link lang-btn ${dkLangBtnName}`}
                            id="btn-dk"
                            onClick={() => setLanguage(Language.DANISH)}
                        />
                    </li>


                </ul>

            </div>)}


        </nav>
    );
}
