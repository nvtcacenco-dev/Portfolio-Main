import * as React from 'react';
import './Footer.css';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Element } from 'react-scroll';
import { Tooltip } from '@mui/material';
import { useState } from 'react';

function Footer() {
  const [clicked, setClicked] = useState(false);
  const [clickedStatus, setClickedStatus] = useState<string>('Click to copy');
  const [textToCopy, setTextToCopy] = useState<string>('');

  function changeClickStatus(textContent: string) {
    if (!clicked) {
      setClicked(true);
      setClickedStatus('Copied!');
      setTextToCopy(textContent);
      navigator.clipboard.writeText(textContent);
    }
  }

  function resetClickStatus() {
    if (clicked) {
      setClicked(false);
      setClickedStatus('Click to copy');
      setTextToCopy('');
    }
  }

  return (
    <footer className='footer'>
      <Element className='footer-container' name='footer'>
        <Tooltip className='tool-tip' title={clickedStatus} arrow placement='top'>
          <section
            onClick={() => changeClickStatus('22324548')}
            onMouseLeave={resetClickStatus}
            className='footer-section'
          >
            <PhoneIcon className='icon-clr' />
            <p className='footer-info'>22324548</p>
          </section>
        </Tooltip>
        <Tooltip title={clickedStatus} arrow placement='top'>
          <section
            onClick={() => changeClickStatus('nico440b@gmail.com')}
            onMouseLeave={resetClickStatus}
            className='footer-section'
          >
            <MailIcon className='icon-clr' />
            <p className='footer-info'>nico440b@gmail.com</p>
          </section>
        </Tooltip>
        <a href='https://dk.linkedin.com/' target='_blank' rel="noopener noreferrer">
          <section className='footer-section'>
            <LinkedInIcon className='icon-clr' />
            <p className='footer-info'>LinkedIn Link</p>
          </section>
        </a>
        <a href='https://github.com/' target='_blank' rel="noopener noreferrer">
          <section className='footer-section'>
            <GitHubIcon className='icon-clr' />
            <p className='footer-info'>Github Link</p>
          </section>
        </a>

      </Element>
    </footer>
  );
}

export default Footer;
