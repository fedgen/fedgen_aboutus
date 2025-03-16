import React from 'react';
import "../App.css";
import containerImage from '../images/Container-image.png';

function CloudRAN() {
    const works = [
        { title: 'Dynamic Spectrum Access with Deep Reinforcement Learning' },
        { title: 'Radio Environment Mapping with Generative Artificial Intelligence' },
        { title: 'Wideband Spectrum Sensing and Characterisation in Cognitive CloudRAN with Deep Multi-Task Learning' },

    ];

    return (
        <>
            <div className="central">
                <img src={containerImage} alt="My Local Image" className="right-image" style={{ height: '35vh' }} />
                <h2>Cognitive CloudRAN for TVWS/5G/6G</h2>
            </div>

            <div className="related-works-section">
                <h2>Existing Works</h2>
                <div className="works-container">
                    {works.map((work, index) => (
                        <div key={index} className="work-card">
                            <p>{work.title}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}

export default CloudRAN;
