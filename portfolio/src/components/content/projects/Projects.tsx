import { useEffect, useRef, useState } from "react";

import "./Projects.css";

import PageTitle from "../../misc/PageTitle";
import { ComponentProps } from "../../../model/types";

export default function Projects({ onIntersectionChange }: ComponentProps) {
    const projectsRef = useRef<HTMLDivElement>(null);
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
    return (
        <section
            aria-labelledby="projects-section-title"
            ref={projectsRef}
            id="projects"
            className="projects-section d-flex justify-content-center align-items-center col-12 position-relative"
        >
            <div className="projects-container col-10"></div>

            <PageTitle title={"projects"} dir={"left"} />
        </section>
    );
}
