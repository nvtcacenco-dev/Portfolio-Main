import * as React from 'react';


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


import './Navbar.css'
import { useState } from 'react';
import { Link } from "react-scroll";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [clrChange, setColor] = useState(false);
  const changeNavBarClr = () => {
    if (window.scrollY >= 30) {
      setColor(true)
    }
    else {
      setColor(false)
    }
  }


  window.addEventListener("scroll", changeNavBarClr);
  const className = clrChange === true ? "app-bar-changed" : "app-bar";
  const idName = clrChange === true ? "box-changed" : "";

  return (
    <AppBar className={className} position="sticky">

      <Toolbar className='nav-bar' disableGutters sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: { xs: 'center', md: 'flex-end' } }}>

        <section className='logo-group'>

          <div className='box ' id={idName}>
            <Link activeClass='inactive' smooth={true} spy={true} offset={-500} duration={1000} to="home">NVT</Link>
          </div>

        </section>
        <section className='pages-group' >

          <Link activeClass='active' className='page-link' smooth={true} spy={true} offset={-500} duration={1000} to="home">
            <Button className='pages-button' key="Home" sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button>
          </Link>

          <Link activeClass='active' className='page-link' smooth={true} spy={true} offset={-50} duration={1000} to="projects">
            <Button className='pages-button' key="Projects" sx={{ my: 2, color: 'white', display: 'block' }}>Projects</Button>
          </Link>


          <Link activeClass='active' className='page-link' smooth={true} spy={true} offset={-50} duration={1000} to="about-me">
            <Button className='pages-button' key="About Me" sx={{ my: 2, color: 'white', display: 'block' }}>About Me</Button>
          </Link>

          <Link activeClass='active' className='page-link' smooth={true} spy={true} offset={-50} duration={1000} to="skills">
            <Button className='pages-button' key="Skills" sx={{ my: 2, color: 'white', display: 'block' }}>Skills</Button>
          </Link>

        </section>
        <Box className='icons-group' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

          <a href='https://dk.linkedin.com/' target='_blank' rel="noopener noreferrer">
            <IconButton className='icon-button' aria-label="linked-in" size="large">
              <LinkedInIcon fontSize="inherit" />
            </IconButton>
          </a>
          <a href='https://github.com/' target='_blank' rel="noopener noreferrer">
            <IconButton className='icon-button' aria-label="github" size="large">
              <GitHubIcon fontSize="inherit" />
            </IconButton>
          </a>

        </Box>

      </Toolbar>

    </AppBar> 

    
  ); 
}
export default ResponsiveAppBar;