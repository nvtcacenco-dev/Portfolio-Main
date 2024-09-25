import { useContext, useEffect, useRef, useState } from "react";

import "./Projects.css";
import 'swiper/css';
import 'swiper/css/pagination';

import PageTitle from "../../misc/PageTitle";
import { ComponentProps } from "../../../model/types";
import { LanguageContext, LanguageContextType } from "../../../model/LanguageContext";

import ProjectSliderXL from "./ProjectSliderXL";
import ProjectSliderSM from "./ProjectSliderSM";



export default function Projects({ onIntersectionChange }: ComponentProps) {

    const { language } = useContext<LanguageContextType>(LanguageContext);
    const [isProjectClicked, setIsProjectClicked] = useState<boolean[]>([false, false, false])
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const projectsRef = useRef<HTMLDivElement>(null);

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
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        onIntersectionChange("projects");
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
            }
        );

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [onIntersectionChange]);

    const handleProjectClick = (index: number) => {
        setIsProjectClicked(prevState => {
            const newState = [...prevState]
            newState[index] = !newState[index];
            return newState;
        });
    }

    const handleLayout = () =>{
        if (windowWidth >= 992) {
            return <ProjectSliderXL isProjectClicked={isProjectClicked} setIsProjectClicked={setIsProjectClicked} handleProjectClick={handleProjectClick}/>
        } 
        else {
            return <ProjectSliderSM isProjectClicked={isProjectClicked} setIsProjectClicked={setIsProjectClicked} handleProjectClick={handleProjectClick}/>
        }
    }
    return (
        <section
            aria-labelledby="projects-section-title"
            ref={projectsRef}
            id="projects"
            className="projects-section d-flex justify-content-end align-items-center col-12 position-relative"
        >
            <div className="projects-container col-12 col-lg-10">
                {handleLayout()}
            </div>
            <PageTitle title={"projects"} dir={"left"} />
        </section>
    );
}
