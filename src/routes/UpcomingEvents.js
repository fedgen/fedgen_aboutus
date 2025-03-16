import React, { useState } from 'react';
import "../App.css";
import containerImage from '../images/Container-image.png';

function UpcomingEvents() {


    const Events = [
        { title: '3RD HIGH PERFORMANCE COMPUTING WORKSHOPS' },
        { title: 'FEDGEN BOOTCAMP 3.0.' },
        { title: 'MONTHLY ADVANCED RESEARCH TUTORIALS' },


    ];
   

    return (
        <>
            <div className="central">
                <img
                    src={containerImage}
                    alt="My Local Image"
                    className="right-image"
                    style={{ height: '35vh' }}
                />
                <h2>UPCOMING EVENTS</h2>
            </div>


            <div className="related-works-section">
                <h2>Upcoming Workshops, Bootcamps, Tutorial Meetings</h2>
                <div className="works-container">
                    {Events.map((Events, index) => (
                        <div key={index} className="work-card">
                            <p>{Events.title}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div className="Event-events-container">
                {/*
                {projects.map((project, index) => (
                    <div key={index} className="Event-project-card">
                        <img
                            src={require(`../images/${project.image}`)}
                            alt={project.title}
                            className="Event-project-image"
                         
                        />
                        <br />
                        <a href={project.link}>
                            <button className="Event-project-button">Register</button>
                        </a>
                    </div>
                ))}
                    */}
            </div>

            
        </>
    );
}

export default UpcomingEvents;
