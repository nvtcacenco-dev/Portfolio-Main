import { motion } from 'framer-motion';
import './Projects.css'
import Transition from './Transition'
import ProjectButtons from './ProjectButtons';

function ProjectCryptoTracker(){

    return (
        <motion.section 
            id='ProjectCryptoTracker' className='project-container col-12 d-flex justify-content-end align-items-center h-100'>
            
            <div className="text-container col-10 col-xl-6 d-flex justify-content-center align-items-center flex-column py-xl-0 py-5">
                <div className='title-container d-flex justify-content-center align-items-center align-items-xl-end px-5 '>
                    <h1 className='project-title-text'>Crypto Tracker</h1>
                </div>
                <div className='project-description-container d-flex justify-content-center align-items-center px-5 col-12 flex-column'>
                    <p className='col-8 project-description-txt'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vestibulum lorem lorem, tincidunt at fermentum quis, vestibulum non sapien. 
                    </p>
                    <ProjectButtons/>
                </div>
            </div>
        </motion.section>
        
    
    );
}


export default function ProjectCryptoTrackerWithTransition(){
    return (Transition(ProjectCryptoTracker))
}  