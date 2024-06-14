import "./Skills.css";
import PageTitle from "../../misc/PageTitle";
import { Paper } from "@mui/material";
import { useContext, useRef, useEffect } from "react";
import {
  LanguageContextType,
  LanguageContext,
} from "../../../model/LanguageContext";
import {
  ComponentProps,
  devSkillsString,
  taglineSkillsString,
} from "../../../model/types";

export default function Skills({ onIntersectionChange }: ComponentProps) {
  const { language } = useContext<LanguageContextType>(LanguageContext);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersectionChange("skills");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [onIntersectionChange]);

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="skills-section d-flex justify-content-center align-items-center col-12 position-relative"
    >
      <div className="skills-container col-10 d-flex flex-column">
        <div className="col-12" id="skills-top-section">
          <h2 className=" text-uppercase">
            {taglineSkillsString[language]}
          </h2>
        </div>

        <div
          className="col-12 d-flex justify-content-center align-items-center flex-wrap"
          id="skills-bottom-section"
        >
          <div className="skill-box col-12 col-lg-3">

            <h3>
              Frontend <br /> {devSkillsString[language]}
            </h3>

            <div className="col-11 skill-description-container flex-wrap">

              <p className="col-6">{"</>"} JavaScript</p>
              <p className="col-6">{"</>"} TypeScript</p>
              <p className="col-6">{"</>"} React</p>
              <p className="col-6">{"</>"} Next.js</p>
              <p className="col-6">{"</>"} HTML</p>
              <p className="col-6">{"</>"} CSS</p>
              <p className="col-6">{"</>"} Bootstrap</p>
              <p className="col-6">{"</>"} Tailwind</p>

            </div>
          </div>

          <div className="skill-box col-12 col-lg-3">
            <h3>
              Backend <br /> {devSkillsString[language]}
            </h3>
            <div className="col-11 skill-description-container flex-wrap">

              <p className="col-6">{"</>"} Node.js</p>
              <p className="col-6">{"</>"} Express</p>
              <p className="col-6">{"</>"} MongoDB</p>
              <p className="col-6">{"</>"} Next.js</p>
              <p className="col-6">{"</>"} SQL</p>
              <p className="col-6">{"</>"} Firebase</p>

            </div>
          </div>

          <div className="skill-box col-12 col-lg-3">

            <h3>
              App <br /> {devSkillsString[language]}
            </h3>

            <div className="col-11 skill-description-container flex-wrap">

              <p className="col-6">
                {"</>"} React Native
              </p>

              <p className="col-6">
                {"</>"} Java
              </p>

              <p className="col-6">
                {"</>"} C#
              </p>

            </div>
          </div>
        </div>
      </div>

      <PageTitle title={"skills"} dir={"right"} />
      <Paper elevation={3}></Paper>
      
    </section>
  );
}
