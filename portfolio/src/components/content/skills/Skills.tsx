import "./Skills.css";
import PageTitle from "../../misc/PageTitle";
import { Paper } from "@mui/material";
import { useContext, useRef, useEffect, useState } from "react";
import {
  LanguageContextType,
  LanguageContext,
} from "../../../model/LanguageContext";
import {
  ComponentProps,
  devSkillsAppString,
  devSkillsBackendString,
  devSkillsFrontendString,
  devSkillsString,
  otherSkillsAgileString1,
  otherSkillsAgileString2,
  otherSkillsClientString1,
  otherSkillsClientString2,
  otherSkillsGitString1,
  otherSkillsGitString2,
  otherSkillsTeamString1,
  otherSkillsTeamString2,
  taglineSkillsString1,
  taglineSkillsString2,
  taglineSkillsString3,
} from "../../../model/types";
import BulletPoint from "../../misc/BulletPoint";

export default function Skills({ onIntersectionChange }: ComponentProps) {
  const { language } = useContext<LanguageContextType>(LanguageContext);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
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
      aria-labelledby="skills-section-title"
      className="skills-section d-flex justify-content-center align-items-center col-12 position-relative"
    >
      <PageTitle title={"skills"} dir={"right"} />
      <div className="skills-container col-11 col-xxl-9 d-flex flex-column">
        <div className="col-12 d-flex align-items-center justify-content-center mb-5 mb-lg-0" id="skills-top-section">
          <h3 className="text-uppercase ">


            {windowWidth > 576 ? (
              <>
                {taglineSkillsString1[language]}
                &nbsp;
                {taglineSkillsString2[language]}
                <br />
                <span className="d-flex justify-content-end  align-items-center">
                  <div className="col-2 me-4 flex-grow-1" />
                  <p className="mb-0 ">
                    {taglineSkillsString3[language]}

                  </p>

                </span>
              </>

            ) : (
              <>
                {taglineSkillsString1[language]}
                <br />
                <span className="d-flex  align-items-center column-gap-3">
                  <div className="col-2 " />
                  <p className="mb-0">
                    {taglineSkillsString2[language]}
                  </p>
                </span> 
                
                
                
                {taglineSkillsString3[language]}
              </>

            )
            }
          </h3>
        </div>

        <div
          className="col-12 d-flex justify-content-center align-items-center flex-wrap"
          id="skills-bottom-section"
        >
          <div className="skill-box col-12 col-lg-3 flex-lg-grow-1">

            <h4>
              Frontend <br /> {devSkillsString[language]}
            </h4>

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
            <div className="skill-box-info p-4">
              <p className="skill-box-info-p">
               {devSkillsFrontendString[language]}
              </p>
            </div>
          </div>

          <div className="skill-box col-12 col-lg-3 flex-lg-grow-1">
            <h4>
              Backend <br /> {devSkillsString[language]}
            </h4>
            <div className="col-11 skill-description-container flex-wrap">

              <p className="col-6">{"</>"} Node.js</p>
              <p className="col-6">{"</>"} Express</p>
              <p className="col-6">{"</>"} MongoDB</p>
              <p className="col-6">{"</>"} Next.js</p>
              <p className="col-6">{"</>"} SQL</p>
              <p className="col-6">{"</>"} Firebase</p>

            </div>
            <div className="skill-box-info p-4">
              <p className="skill-box-info-p">
              {devSkillsBackendString[language]}
              </p>
            </div>
          </div>

          <div className="skill-box col-12 col-lg-3 flex-lg-grow-1">

            <h4>
              App <br /> {devSkillsString[language]}
            </h4>

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
            <div className="skill-box-info p-4">
              <p className="skill-box-info-p">
              {devSkillsAppString[language]}
              </p>
            </div>
          </div>
        </div>

        <div id="skills-divider" className="" />
        <ul id="skills-bullet-points" className="d-flex col-12 flex-wrap column-gap-3 row-gap-3">
          <BulletPoint string1={'SEO'} string2={'(Lighthouse)'} className={'skills-bullet'}/>
          <BulletPoint string1={otherSkillsAgileString1[language]} string2={otherSkillsAgileString2[language]} className={'skills-bullet'}/>
          <BulletPoint string1={otherSkillsClientString1[language]} string2={otherSkillsClientString2[language]} className={'skills-bullet'}/>
          <BulletPoint string1={'API'} string2={'Integration'} className={'skills-bullet'}/>
          <BulletPoint string1={otherSkillsGitString1[language]} string2={otherSkillsGitString2[language]} className={'skills-bullet'}/>
          <BulletPoint string1={otherSkillsTeamString1[language]} string2={otherSkillsTeamString2[language]} className={'skills-bullet'}/>
        </ul>
      </div>

      
      

    </section>
  );
}
