import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Paper } from '@mui/material';

import './Projects.css'
import ParticlesBg from '../../misc/ParticlesBg';




export default function Projects() {
    
    
    return (
        <section className='projects'>
            
            <h1 id='section-title'>Projects</h1>
            <div className='projects-container'>
                <Paper elevation={4} className='card-big'>
                    <div className='card-content'>
                        <div className='card-media' id='project1-media'>
            
                        </div>
                        <div className='card-actions'>
                            <p className='card-title'>Car Rental</p>
                            
                            <div className='card-btn-container'>
                            <Button className='project-btn'>
                                Website
                            </Button>
                            <Button className='project-btn'>
                                Code
                            </Button>
                            </div>
                        </div>
                        
                    
                    </div>
                    
                </Paper>
                <Paper elevation={4} className='card-small'>
                    <div className='card-content'>
                        <div className='card-media' id='project2-media'>
            
                        </div>
                        <div className='card-actions'>
                            <p className='card-title'>E-commerce</p>
                            
                            <div className='card-btn-container'>
                            <Button className='project-btn'>
                                Website
                            </Button>
                            <Button className='project-btn'>
                                Code
                            </Button>
                            </div>
                        </div>
                        
                    
                    </div>
                    
                </Paper>
                <Paper elevation={4} className='card-small'>
                    <div className='card-content'>
                        <div className='card-media' id='project3-media'>
            
                        </div>
                        <div className='card-actions'>
                            <p className='card-title'>Crypto Tracker</p>
                            
                            <div className='card-btn-container'>
                            <Button className='project-btn'>
                                Website
                            </Button>
                            <Button className='project-btn'>
                                Code
                            </Button>
                            </div>
                        </div>
                        
                    
                    </div>
                    
                </Paper> 
                <Paper elevation={4} className='card-big'>
                    <div className='card-content'>
                        <div className='card-media' id='project4-media'>
            
                        </div>
                        <div className='card-actions'>
                            <p className='card-title'>Restaurant</p>
                            
                            <div className='card-btn-container'>
                            <Button className='project-btn'>
                                Website
                            </Button>
                            <Button className='project-btn'>
                                Code
                            </Button>
                            </div>
                        </div>
                        
                    
                    </div>
                    
                </Paper>
            </div>
        </section>
    )
}