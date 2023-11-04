import React, { useState } from 'react';

import hmtlLogo from "../../../img/logo_html.svg"
import cssLogo from "../../../img/logo_css.svg"
import jsLogo from "../../../img/logo_js.svg"
import tsLogo from "../../../img/logo_ts.svg"
import reactLogo from "../../../img/logo_react.svg"
import nodejsLogo from "../../../img/logo_nodejs.svg"
import expressjsLogo from "../../../img/logo_expressjs.svg"
import mongoLogo from "../../../img/logo_mongodb.svg"

import Paper from '@mui/material/Paper';

import './Skills.css'

interface SkillState {
  clicked: boolean;
}

function Skills() {
  const elevation = 4;

  const [skillsState, setSkillsState] = useState<Record<string, SkillState>>({
    clickedHTML: { clicked: false },
    clickedCSS: { clicked: false },
    clickedJS: { clicked: false },
    clickedTS: { clicked: false },
    clickedREACT: { clicked: false },
    clickedNODE: { clicked: false },
    clickedEXP: { clicked: false },
    clickedMONGO: { clicked: false },
  });

  const handleToggle = (key: string) => {
    setSkillsState((prevState) => ({
      ...prevState,
      [key]: { clicked: !prevState[key]?.clicked },
    }));
  };

  const skillNames: Record<string, string> = {
    clickedHTML: 'HTML',
    clickedCSS: 'CSS',
    clickedJS: 'JavaScript',
    clickedTS: 'TypeScript',
    clickedREACT: 'React',
    clickedNODE: 'Node.js',
    clickedEXP: 'Express.js',
    clickedMONGO: 'MongoDB',
  };

  return (
    <section className='skills'>
      <h1>Skills</h1>
      <section className='skills-container'>
        {Object.entries(skillsState).map(([key, skill], index) => (
          <section
            className={`skills-card ${
              skill.clicked ? 'clicked' : ''
            }`}
            key={key}
          >
            <Paper
              onClick={() => handleToggle(key)}
              className='skills-card-summary'
              elevation={elevation}
            >
              {/* Use key to determine which logo to display */}
              <img className='card-img' src={getLogo(key)} alt={key} />
              <div className='skills-tag'>
                <h5>
                  {key.includes('JS') ? (
                    <>
                      <b>Java</b>Script
                    </>
                  ) : key.includes('TS') ? (
                    <>
                      <b>Type</b>Script
                    </>
                  ) : (
                    skillNames[key]
                  )}
                </h5>
              </div>
            </Paper>
            <div
              className='skills-card-expanded'
              style={{
                paddingLeft: skill.clicked ? '1rem' : '0px',
                paddingRight: skill.clicked ? '1rem' : '0px',
                width: skill.clicked
                  ? 'clamp(8rem, 8rem + 4vw, 14rem)'
                  : '0px',
              }}
            >
              <p className='skills-description'>
                Description for {skillNames[key]}
              </p>
            </div>
          </section>
        ))}
      </section>
      
    </section>
  );
}

function getLogo(key: string) {
  switch (key) {
    case 'clickedHTML':
      return hmtlLogo;
    case 'clickedCSS':
      return cssLogo;
    case 'clickedJS':
      return jsLogo;
    case 'clickedTS':
      return tsLogo;
    case 'clickedREACT':
      return reactLogo;
    case 'clickedNODE':
      return nodejsLogo;
    case 'clickedEXP':
      return expressjsLogo;
    case 'clickedMONGO':
      return mongoLogo;
    default:
      return '';
  }
}

export default Skills;
