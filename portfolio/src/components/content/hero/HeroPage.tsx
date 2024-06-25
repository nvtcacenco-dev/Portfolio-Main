import './HeroPage.css'

import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { handleSectionClick } from "../../../model/functions";

import {
    LanguageContext,
    LanguageContextType,
} from "../../../model/LanguageContext";

import {
    ComponentProps,
    btnGetMyInfoString,
    btnHireMeString,
    btnSeeProjectsString,
    devString,
    taglineString,
    welcomeTagString,
} from "../../../model/types";

export default function HeroPage({ onIntersectionChange }: ComponentProps) {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const { language } = useContext<LanguageContextType>(LanguageContext);
    const homeRef = useRef<HTMLDivElement>(null);
    const animationDuration = 0.75;
    const animationDelay = 1.75;
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
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        onIntersectionChange("home");
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
            }
        );

        if (homeRef.current) {
            observer.observe(homeRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [onIntersectionChange]);

    return (
        <section
            ref={homeRef}
            id="home"
            aria-labelledby="hero-section-title"
            className="hero-section d-flex justify-content-center align-items-center flex-wrap flex-column"
        >
            <article
                className="col-11 col-xxl-10 position-relative d-flex flex-column"
                id="description-box"
            >
                <motion.div className="description">

                    <div role="paragraph">
                        <motion.p
                            className="welcome-tag"
                            initial={{ opacity: 0, translateY: -100 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: animationDuration, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            &#8212; {welcomeTagString[language]}
                        </motion.p>
                        <motion.h1
                            id="hero-section-title"
                            className="description-title"
                            initial={{ opacity: 0, translateY: 100 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: animationDuration, delay: 0 }}
                            viewport={{ once: true }}
                        >
                            Nicolae Tcacenco
                        </motion.h1>
                        <motion.p
                            className="description-title"
                            id="outlined-text"
                            initial={{ opacity: 0, translateX: 200 }}
                            whileInView={{ opacity: 1, translateX: 0 }}
                            transition={{
                                duration: animationDuration,
                                delay: animationDuration,
                            }}
                            viewport={{ once: true }}
                        >
                            FRONTEND {windowWidth < 576 && <br />} & WEB
                        </motion.p>
                        <motion.p
                            className="description-title"
                            initial={{ opacity: 0, translateY: 100 }}
                            whileInView={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: animationDuration, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {language && devString[language]}
                        </motion.p>
                    </div>
                    <motion.p
                        className="description-tag"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: animationDuration, delay: animationDelay }}
                        viewport={{ once: true }}
                    >
                        {taglineString[language]}
                    </motion.p>
                </motion.div>
                <motion.div
                    className="contact-btn-container col-12 col-xl-4 d-flex"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: animationDuration, delay: animationDelay }}
                    viewport={{ once: true }}
                >
                    <Button
                        aria-label="See My Projects"
                        disableRipple
                        className="quick-btn fill"
                        onClick={() => handleSectionClick("projects")}
                    >
                        <p className="btn-txt m-0">
                            {" "}
                            {language && btnSeeProjectsString[language]}
                        </p>
                    </Button>
                    <Button
                        aria-label="Hire Me"
                        disableRipple
                        data-content1={btnHireMeString[language]}
                        data-content2={btnGetMyInfoString[language]}
                        className="quick-btn slide"
                        onClick={() => handleSectionClick("footer")}
                    ></Button>
                </motion.div>
                {windowWidth > 370 && (<div
                    className="col-12 d-flex justify-content-center justify-content-lg-end align-items-center column-gap-4 "
                    id="description-skills-container"
                >
                    <motion.div
                        className="skill-container"
                        initial={{ opacity: 0, translateX: 50 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{
                            duration: animationDuration,
                            delay: animationDuration + 0.2,
                        }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="skill-icon-decoration"
                            id="skill-icon-decoration-js"
                        />
                        <div className="skill-icon" />
                        <p className="skill-icon-name">JavaScript</p>
                    </motion.div>

                    <motion.div
                        className="skill-container"
                        initial={{ opacity: 0, translateX: 50 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{
                            duration: animationDuration,
                            delay: animationDuration + 0.3,
                        }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="skill-icon-decoration"
                            id="skill-icon-decoration-ts"
                        />
                        <div className="skill-icon" />
                        <p className="skill-icon-name">TypeScript</p>
                    </motion.div>

                    <motion.div
                        className="skill-container"
                        initial={{ opacity: 0, translateX: 50 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{
                            duration: animationDuration,
                            delay: animationDuration + 0.4,
                        }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="skill-icon-decoration"
                            id="skill-icon-decoration-html"
                        />
                        <div className="skill-icon" />
                        <p className="skill-icon-name">HTML5</p>
                    </motion.div>

                    <motion.div
                        className="skill-container"
                        initial={{ opacity: 0, translateX: 50 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{
                            duration: animationDuration,
                            delay: animationDuration + 0.5,
                        }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="skill-icon-decoration"
                            id="skill-icon-decoration-css"
                        />
                        <div className="skill-icon" />
                        <p className="skill-icon-name">CSS3</p>
                    </motion.div>

                    <motion.div
                        className="skill-container"
                        initial={{ opacity: 0, translateX: 50 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{
                            duration: animationDuration,
                            delay: animationDuration + 0.6,
                        }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="skill-icon-decoration"
                            id="skill-icon-decoration-react"
                        />
                        <div className="skill-icon" />
                        <p className="skill-icon-name">React</p>
                    </motion.div>

                    <motion.div
                        className="skill-container"
                        initial={{ opacity: 0, translateX: 50 }}
                        whileInView={{ opacity: 1, translateX: 0 }}
                        transition={{
                            duration: animationDuration,
                            delay: animationDuration + 0.7,
                        }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="skill-icon-decoration"
                            id="skill-icon-decoration-next"
                        />
                        <div className="skill-icon" />
                        <p className="skill-icon-name">Next.js</p>
                    </motion.div>
                </div>)}

            </article>
            {windowWidth > 768 &&
                (
                    <motion.div
                        className="scroll-banner col-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: animationDuration, delay: animationDelay }}
                        viewport={{ once: true }}
                    >
                        <div className="scroll-link col-12">
                            <div className="">
                                <button
                                    aria-label="scroll down"
                                    className="mouse"
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => handleSectionClick("about")}
                                ></button>
                            </div>
                        </div>
                    </motion.div>
                )

            }


        </section>
    );
}
