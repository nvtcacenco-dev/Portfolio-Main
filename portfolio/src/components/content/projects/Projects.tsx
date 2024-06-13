import * as React from 'react';
import { useRef, useState } from 'react';
import { Button } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

import './Projects.css';

import ProjectMainWithTransition from './ProjectMain';
import ProjectCarRentalWithTransition from './ProjectCarRental';
import Transition from './Transition';
import PageTitle from '../../misc/PageTitle';

const mainProj = React.lazy(() => import('./ProjectMain'));
const carRental = React.lazy(() => import('./ProjectCarRental'));
const webShop = React.lazy(() => import('./ProjectWebShop'));
const cryptoTracker = React.lazy(() => import('./ProjectCryptoTracker'));

type ProjectType = {
    projectName: string;
    status: boolean;
    Component: React.FC<any>;
};

const defaultProject: ProjectType = {
    projectName: 'Projects',
    status: true,
    Component: mainProj
};

const projects: ProjectType[] = [
    { projectName: 'Car Rental', status: false, Component: carRental },
    { projectName: "Web Shop", status: false, Component: webShop },
    { projectName: "Crypto Tracker", status: false, Component: cryptoTracker}
];

export default function Projects() {
   

    return (
        <section id='projects' className='projects-section d-flex justify-content-center align-items-center col-12 position-relative'>
            <div className='projects-container col-10'>

            </div>
            
            <PageTitle title={'PROJECTS'} dir={'left'}/>
            
        </section>
    );
}
