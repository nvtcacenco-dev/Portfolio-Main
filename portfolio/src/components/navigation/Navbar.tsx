import React, { useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { Collapse, SvgIcon } from "@mui/material";
import { Squash as Hamburger } from 'hamburger-react';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import SpeedIcon from '@mui/icons-material/Speed';
import LanguageIcon from '@mui/icons-material/Language';
import { handleSectionClick } from "../../model/functions";
import { LanguageContext, LanguageContextType } from "../../model/LanguageContext";
import { Language, languageString, navStrings } from "../../model/types";
import './Navbar.css';

interface NavbarProps {
    activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
    const [navClass, setNavClass] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const [elementHeight, setElementHeight] = useState<number>(0);

    const { language, setLanguage } = useContext<LanguageContextType>(LanguageContext);

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
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setNavClass(true);
            } else {
                setNavClass(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleCollapsedNavPosition = () => {
            const collapsedNavElement = document.getElementById('nav-links-container-sm');
            if (collapsedNavElement && isNavOpen) {
                setElementHeight(collapsedNavElement.offsetHeight);
            }
        };
        handleCollapsedNavPosition();
    }, [windowWidth, isNavOpen]);

    const IconSwitch = useCallback((iconName: string) => {
        switch (iconName) {
            case "home":
                return <HomeIcon />;
            case "about me":
                return <AccountCircleIcon />;
            case "projects":
                return <WorkIcon />;
            case "skills":
                return <SpeedIcon />;
            default:
                return null;
        }
    }, []);

    const navLinkMap = useMemo(() =>
        navStrings.map((link, index) => (
            <li key={index}>
                <button
                    className={`nav-link ${activeSection === link.stringName ? "active" : ""}`}
                    onClick={() => handleSectionClick(link.stringName)}
                >
                    {windowWidth < 576 ? (
                        <div className="d-flex align-items-center column-gap-2 px-2">
                            {IconSwitch(link.stringName)}
                            <p className="mb-0">
                                {link.stringRecord[language]}
                            </p>
                        </div>
                    ) : (
                        <>{link.stringRecord[language]}</>
                    )}
                </button>
            </li>
        ))
    , [activeSection, windowWidth, language, IconSwitch]);

    const navName = useMemo(() => (navClass ? "navbar-changed" : ""), [navClass]);
    const expandedNavName = useMemo(() => (isNavOpen ? "nav-expanded" : "nav-collapsed"), [isNavOpen]);
    const enLangBtnName = useMemo(() => (language === Language.ENGLISH ? "lang-btn-active" : ""), [language]);
    const dkLangBtnName = useMemo(() => (language === Language.DANISH ? "lang-btn-active" : ""), [language]);

    return (
        <nav className={`${navName} col-12 position-fixed top-0 d-flex justify-content-center align-items-center`} id="custom-nav">
            <div className="col-11 col-lg-10 d-flex justify-content-between align-items-center h-100 position-relative z-1">
                <div className="logo d-flex justify-content-center align-items-center">
                    <a aria-label={`${navStrings[0].stringRecord[language]}`} role="link" href="/">
                        <svg viewBox="90.2931 0 100 49.8338" width="100" height="49.8338" xmlns="http://www.w3.org/2000/svg">
                            <g id="SvgjsG1824" transform="matrix(3.3997230529785156, 0, 0, 3.3997230529785156, 87.37103271484375, -18.2935733795166)" fill="var(--dark-clr)">
                                <path d="M15.088 13.6328 l-1.4551 6.3574 l-4.541 0 l-1.9336 -6.3574 l-0.22461 0 l-1.4746 6.3574 l-4.5996 0 l1.4746 -6.3574 l-0.88867 0 l1.8848 -8.1836 l5.3613 0 l1.582 5.1367 l1.2012 -5.1367 l4.6191 0 l-1.8945 8.1836 l0.88867 0 z M25.459109375 13.3594 l-1.4844 6.6797 l-4.9512 0 l1.5234 -6.6797 l-0.88867 0 l0.98633 -4.2773 l-3.9063 0 l0.85938 -3.7012 l12.676 0 l-0.83008 3.7012 l-3.8965 0 l-0.95703 4.2773 l0.86914 0 z" />
                            </g>
                        </svg>
                    </a>
                </div>
                {windowWidth < 576 && <Hamburger label="Show nav menu" size={20} onToggle={setIsNavOpen} />}
                {windowWidth > 576 && (
                    <ul className="d-flex justify-content-center align-items-center h-100 column-gap-4">
                        {navLinkMap}
                        <li>
                            <button
                                className={`nav-link lang-btn ${enLangBtnName}`}
                                id="btn-en"
                                aria-label="English"
                                onClick={() => setLanguage(Language.ENGLISH)}
                            ></button>
                        </li>
                        <li>
                            <button
                                className={`nav-link lang-btn ${dkLangBtnName}`}
                                id="btn-dk"
                                aria-label="Danish"
                                onClick={() => setLanguage(Language.DANISH)}
                            ></button>
                        </li>
                    </ul>
                )}
            </div>
            {windowWidth < 576 && (
                <div id="nav-links-container-sm" className={`d-flex ${expandedNavName}`} style={{ bottom: -elementHeight }}>
                    <ul className="d-flex flex-column h-100 justify-content-center">
                        {navLinkMap}
                        <hr className="m-0"/>
                        <li className="d-flex align-items-center column-gap-2 px-2">
                            <LanguageIcon/>
                            <p className="mb-0 me-auto">{languageString[language]}</p>
                            <button
                                className={`nav-link lang-btn ${enLangBtnName}`}
                                id="btn-en"
                                aria-label="English"
                                onClick={() => setLanguage(Language.ENGLISH)}
                            />
                            <button
                                className={`nav-link lang-btn ${dkLangBtnName}`}
                                id="btn-dk"
                                aria-label="Danish"
                                onClick={() => setLanguage(Language.DANISH)}
                            />
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
