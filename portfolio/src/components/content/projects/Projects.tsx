import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Projects.css'



export default function Projects() {
    return (
        <section className='projects'>
            <h1 id='section-title'>Projects</h1>
            <div className='projects-container'>
                <Card elevation={4} className='card-big'>
                    <CardActionArea>
                        <div className='card-media' id='project1-media'>

                        </div>

                        <div className='project-title'>
                            <h5>Car rental company</h5>
                        </div>

                    </CardActionArea>
                    <CardActions className='btn-section'>
                        <Button className='project-btn'>
                            Website
                        </Button>
                        <Button className='project-btn'>
                            Code
                        </Button>
                    </CardActions>
                </Card>
                <Card elevation={4} className='card-small '>
                    <CardActionArea>
                        <div className='card-media' id='project2-media'>
                        </div>

                        <div className='project-title'>
                            <h5>Web shop</h5>
                        </div>
                    </CardActionArea>
                    <CardActions className='btn-section'>
                        <Button className='project-btn'>
                            Website
                        </Button>
                        <Button className='project-btn'>
                            Code
                        </Button>
                    </CardActions>
                </Card>
                <Card elevation={4} className='card-small '>
                    <CardActionArea>
                        <div className='card-media' id='project3-media'>
                        </div>
                        <div className='project-title'>
                            <h5>Crypto tracker</h5>
                        </div>

                    </CardActionArea>
                    <CardActions className='btn-section'>
                        <Button className='project-btn'>
                            Website
                        </Button>
                        <Button className='project-btn'>
                            Code
                        </Button>
                    </CardActions>
                </Card>
                <Card elevation={4} className='card-big'>
                    <CardActionArea>
                        <div className='card-media' id='project4-media'>
                        </div>

                        <div className='project-title'>
                            <h5>Restaurant</h5>
                        </div>
                    </CardActionArea>
                    <CardActions className='btn-section'>
                        <Button className='project-btn'>
                            Website
                        </Button>
                        <Button className='project-btn'>
                            Code
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </section>
    )
}