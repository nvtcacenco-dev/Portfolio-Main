import { Button } from '@mui/material';
import './Projects.css'

export default function ProjectButtons(){
    return(
        <div className='col-12 d-flex justify-content-center align-items-center column-gap-2'>
                        <Button className="project-action-btn">Website</Button>
                        <Button className="project-action-btn">Code</Button>
        </div>
    )
}