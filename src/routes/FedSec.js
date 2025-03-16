import React from 'react';
import "../App.css";
import containerImage from '../images/Container-image.png';

function RelatedWorks() {
    const works = [
        { title: 'Secure Federated Intrusion Detection Model (SecFedIDM)' },
        { title: 'Secure Federated Malware Detection Model (SecFedMDM)' },
        { title: 'Federated Homomorphic Data Encryption Model (FedHDEM)' },
        { title: 'Federated Hierarchical Anomaly Detection Model (FedHADM)' },
        { title: 'Data Anonymisation Metrics in Federated Clouds' },
        { title: 'Federated Service Level Agreement (FedSLA)' },
        { title: 'Federated Load Balancing (FedLoBA)' }
    ];

    return (
        <>
            <div className="central">
                <img src={containerImage} alt="My Local Image" className="right-image" style={{ height: '35vh' }} />
                <h2>SEC-FEDGEN</h2>
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

export default RelatedWorks;
