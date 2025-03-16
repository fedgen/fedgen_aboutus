import React from 'react';
import './LeadershipCloud.css';

import landmarkLogo from './images/landmark-logo.png';
import afeBabalolaLogo from './images/Afe.png';
import ulpglCongoLogo from './images/ulpgl.png';
import gastonBergerLogo from './images/gb.png';
import grandBassamLogo from './images/ugb-logo.png';
import CULogo from './images/covenant-logo.png';


function Leadership() {
  const leadershipData = [
    {
      university: 'Covenant University',
      color: '#A020F0',
      logo: CULogo, 
    },

    {
      university: 'Landmark University',
      color: '#008000',
      logo: landmarkLogo, 
    },
    {
      university: 'Afe Babalola University',
      color: '#3865A6',
      logo: afeBabalolaLogo, 
    },
    {
      university: 'ULPGL Democratic Republic of Congo',
      color: '#3865A6',
      logo: ulpglCongoLogo, 
    },
    {
      university: 'Gaston Berger University, St Louis, Senegal',
      color: '#B35C35',
      logo: gastonBergerLogo, 
    },
    {
      university: 'International University of Grand Bassam, Grand Bassam',
      color: '#202349',
      logo: grandBassamLogo,
    },
  ];

  return (
    <div className="leadership-section">
      <h1 className="leadership-title">FEDGEN Academic Partners</h1>
      <div className="leadership-card-container">
        {leadershipData.map((group, index) => (
          <div key={index} className="leadership-card" style={{ borderTopColor: group.color }}>
            <h2>{group.university}</h2>
            <img 
              src={group.logo} 
              alt={`${group.university} logo`} 
              className="leadership-logo" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leadership;
