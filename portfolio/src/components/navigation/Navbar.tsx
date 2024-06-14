import { Link } from "react-scroll";
import "./Navbar.css";
import { SvgIcon } from "@mui/material";
import { useContext, useEffect, useState, useRef } from "react";
import { handleSectionClick } from "../../model/functions";
import {
    LanguageContext,
    LanguageContextType,
} from "../../model/LanguageContext";
import { Language, navStrings } from "../../model/types";

interface NavbarProps {
    activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
    const [navClass, setNavClass] = useState<boolean>(false);

    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const { language, setLanguage } = useContext<LanguageContextType>(LanguageContext);

    const navLinkMap = navStrings.map((link, index) => (
        <li key={index} className="">
            <button
                className={`nav-link ${activeSection === link.stringName ? "active" : ""}`}
                onClick={() => handleSectionClick(link.stringName)}
            >
                {link.stringRecord[language]}
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

    window.addEventListener("scroll", handleScroll);
    const navName = navClass === true ? "navbar-changed" : "";
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
            const storedLanguage = localStorage.getItem("language");
            if (!storedLanguage) {
                localStorage.setItem("language", JSON.stringify(Language.ENGLISH));
                setLanguage(Language.ENGLISH);
            }
        }
        handleLangPrefStorage();
    }, [language]);

    return (
        <nav
            className={`${navName} col-12 position-fixed top-0 d-flex justify-content-center `}
            id="custom-nav"
        >
            <div className="col-10 d-flex justify-content-between">
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
                <ul className="d-flex justify-content-center align-items-center h-100 column-gap-4">
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
                </ul>
            </div>
        </nav>
    );
}
