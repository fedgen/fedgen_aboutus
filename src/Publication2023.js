import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import Container from "@mui/material/Container";

import SecondData from './SecondData.json';

import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './App.css';


const CourseContent = () => {
    return (

        <>
            
            <Container maxWidth="lg">

                <Grid container spacing={4} style={{ marginTop: "0px" }}>
                    {SecondData.map((result, index) => (

                        <Grid item xs={1} sm={4} ms={4} key={index}>

                            <CardMedia
                                component="img"
                                image={result.img}
                                sx={{ height: "200px", width: "340px" }}
                                alt="green iguana"
                                style={{ borderRadius: "2px", objectFit: "center", display: "flex" }}/>


                            <Card sx={{ maxWidth: 360 }} style={{ marginLeft: "20px" }}>
                                <CardActionArea style={{ objectFit: "right" }}>

                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {result.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {result.Description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>

                                <CardActions>
                                    <Button size="small" variant="outlined">Share</Button>
                                    <Button size="small" variant="outlined">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>

                    ))}

                </Grid>
            </Container>
        </>
    )
}

export default CourseContent