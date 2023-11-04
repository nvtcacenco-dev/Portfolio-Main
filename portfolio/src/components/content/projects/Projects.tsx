import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Paper } from '@mui/material';

import './Projects.css'
import ParticlesBg from '../../misc/ParticlesBg';
import { useEffect, useRef, useState } from 'react';




export default function Projects() {
    const [selected, setSelected] = React.useState<null | HTMLElement>(null);
    const [selectedCard, setSelectedCard] = React.useState<null | HTMLElement>(null);

    const handleClick = (e: { target: any; }) => {
        if (selected === e.target || e.target.className !== "card-media") {
            if (selected === e.target) {
                e.target.parentElement.className = "card-content"
            }
            setSelected(null)
        }
        else {
            if (selected && selected.parentElement) {
                selected.parentElement.className = "card-content"
            }

            setSelected(e.target)
        }


    }

    useEffect(() => {
        if (selected) {
            if (selected.parentElement)
                selected.parentElement.className = "card-content selected-card"
        }

    }, [selected])



    return (
        <section className='projects-content'>

            <h1 id='section-title'>Projects</h1>
            <section className='projects-container'>
                <div className='card-big'>
                    <div className='card-content' onClick={handleClick}>
                        <div className='card-media' id='project1-media'>

                        </div>
                        <div className='card-actions'>
                            <p className='card-title'>Car Rental</p>
                            <div className='card-divider'></div>
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

                </div>
                <div className='card-small'>
                    <div className='card-content' onClick={handleClick}>
                        <div className='card-media' id='project2-media'>

                        </div>
                        <div className='card-actions'>
                            <p className='card-title'>E-commerce</p>
                            <div className='card-divider'></div>
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

                </div>
                <div className='card-small'>
                    <div className='card-content' onClick={handleClick}>
                        <div className='card-media' id='project3-media'>

                        </div>
                        <div className='card-actions'>
                            <p className='card-title'>Crypto Tracker</p>
                            <div className='card-divider'></div>
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

                </div>
                <div className='card-big'>
                    <div className='card-content' onClick={handleClick}>
                        <div className='card-media' id='project4-media'>

                        </div>
                        <div className='card-actions'>
                            <p className='card-title'>Restaurant</p>
                            <div className='card-divider'></div>
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

                </div>



            </section>

            
        </section>
    )
}