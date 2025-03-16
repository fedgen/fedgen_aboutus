import React from 'react';
import "../App.css";

import containerImage from '../images/Container-image.png';

function Project() {
    const projects = [
        { title: 'FEDGEN PHIS', image: 'Fedgen-HealthEduApp.jpeg', link: 'https://fedgen.net/phis', description: 'FEDGEN public health information system' },
        { title: 'FEDGEN DataHub', image: 'FEDGEN Datahub.png', description: 'FEDGEN DataHub' },
        { title: 'FEDLogHub', image: 'object_store.png', link: 'http://165.73.201.7:9001/login', description: 'FEDLoghub' },
        { title: 'FEDGEN CodingHub', image: 'FEDGEN-Codinghub.png', link: 'http://codinghub.fedgen.net', description: 'FEDGEN CodingHub' },
        { title: 'FEDARGOS', image: 'Fegden-monitor.png', link: 'http://monitor.fedgen.net', description: 'FEDGEN Monitor' },
        { title: 'SEC-FEDGEN', image: 'FEDSEC.png', link: 'http://localhost:3000/fedgen-landing-page#/FedSec', description: 'FEDSEC' },
        { title: 'Cognitive CloudRAN for TVWS/5G/6G', image: 'Cognitive CloudRAN.png', link: 'http://localhost:3000/fedgen-landing-page#/CloudRAN', description: 'CloudRAN' },
        { title: 'EdgeAI-IoT for Health Applications', image: 'EDGE-AI.png', link: 'http://localhost:3000/fedgen-landing-page#/EdgeAI', description: 'CloudRAN' },
    ];

    return (
        <>
            <div className="central">
                <img src={containerImage} alt="My Local Image" className="right-image" style={{ height: '35vh' }} />
                <h2>PROJECTS</h2>
            </div>

            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        {project.link ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={require(`../images/${project.image}`)} alt={project.title} className="project-image" />
                                <div className="project-title">{project.title}</div>
                            </a>
                        ) : (
                            <div>
                                <img src={require(`../images/${project.image}`)} alt={project.title} className="project-image" />
                                <div className="project-title">{project.title}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Project;
