import React from 'react';
import './App.css';
import { Grid, Card, CardContent, Typography, CardActions, Button, CardMedia, CardActionArea, Container } from "@mui/material";

const Content = ({ data }) => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={6} style={{ marginTop: "0px" }}>
                {data.map((result, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 350 }} style={{ marginLeft: "36px" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={result.img}
                                    sx={{ height: "200px", width: "100%", objectFit: "cover" }}
                                    alt="Article"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        style={{
                                            fontWeight: '300',
                                            fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji'
                                        }}
                                        component="div"
                                    >
                                        {result.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        style={{
                                            fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji'
                                        }}
                                    >
                                        {result.Description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>

                                <Button size="small" variant="outlined" onClick={() => window.location.href = result.link}>Read Article</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Content;
