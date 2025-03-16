import React from 'react';
import "../App.css";
import containerImage from '../images/Container-image.png';

function EDGEAI() {
    const works = [
        { title: 'AIRFARE-EWS : ArtificialIntelligence based Early Warning system for Rift ValleyFever Detection.' },
        { title: 'Early Detection of Malaria with Volatile Organic Compound in Breath and EdgeAI' },


    ];

    return (
        <>
            <div className="central">
                <img src={containerImage} alt="My Local Image" className="right-image" style={{ height: '35vh' }} />
                <h2>EdgeAI-IoT for Health Applications</h2>
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

export default EDGEAI;
