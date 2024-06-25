
import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { Paper } from '@mui/material';
import { footerString1, taglineString } from '../../model/types';
import { useContext } from 'react';
import { LanguageContextType, LanguageContext } from '../../model/LanguageContext';
function Footer() {
  const { language } = useContext<LanguageContextType>(LanguageContext);

  return (
    <footer id='footer' className='d-flex flex-column justify-content-center align-items-center'>
      <div id='footer-map' className='col-12'>
        <iframe title='My location on Google Maps' className='w-100 h-100' src="https://www.google.com/maps/embed/v1/place?q=Jordbrovej,+Aarhus+N,+Danmark&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=13">
        </iframe>
      </div>
      <section className='col-11 d-flex justify-content-center align-items-center column-gap-4 py-5 py-xxl-3 my-auto flex-wrap' aria-labelledby='footer-section-title'>
        <article className=' col-12 col-xxl-5 flex-lg-grow-1 d-flex flex-column justify-content-end pb-5'>
          <h2 id='footer-section-title'>{footerString1[language]}</h2>
          <p className=' fst-italic fw-light'>{taglineString[language]}</p>
          <ul className='d-flex column-gap-3'>
            <li>
              <a aria-label='github' className='social-link' href='https://github.com/' target="_blank" rel='noreferrer'>
                <GitHubIcon />
              </a>

            </li>
            <li>
              <a aria-label='linkedIn' className='social-link' href='https://linkedin.com/' target="_blank" rel='noreferrer'>
                <LinkedInIcon />
              </a>

            </li>
          </ul>
        </article>


        <ul id='footer-contact-info' className=' d-flex justify-content-center align-items-center py-3 py-xxl-0 col-12 col-xxl-6 gap-5 flex-wrap'>
          <li>
            <button>
              <MailIcon fontSize='large' />
              <p>nvtcacenco.dev@gmail.com</p>
            </button>
          </li>
          <li>
            <button>
              <SmartphoneIcon fontSize='large' />
              <p>+45 22 32 45 48</p>
            </button>
          </li>
        </ul>

      </section>

    </footer>


  );
}

export default Footer;
