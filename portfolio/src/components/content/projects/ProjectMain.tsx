import { motion } from 'framer-motion';
import './Projects.css'
import Transition from './Transition'
function ProjectMain() {

    return (
        <motion.section
            
            id='ProjectMain' className='project-container col-12 d-flex justify-content-end align-items-center h-100'>

            <div className="text-container col-10 col-xl-6 d-flex justify-content-center align-items-center flex-column py-xl-0 py-5">
                <div className='title-container d-flex justify-content-center align-items-center align-items-xl-end px-5 '>
                    <h1 className='project-title-text'>PROJECTS</h1>
                </div>
                <div className='project-description-container d-flex justify-content-center align-items-center px-5 col-12'>
                    <p className='col-12 col-xl-8 project-description-txt'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum lorem lorem, tincidunt at fermentum quis, vestibulum non sapien.
                        Fusce ac ante at urna elementum accumsan. Quisque vel fringilla ipsum. Suspendisse potenti.
                        Aliquam euismod consequat nisl sed rhoncus. Etiam et pretium risus.
                    </p>
                </div>
            </div>
        </motion.section>


    );
}


export default function ProjectMainWithTransition(){
    return (Transition(ProjectMain))
}  