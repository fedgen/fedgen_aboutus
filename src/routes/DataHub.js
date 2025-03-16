import React from 'react';
import '../App.css';
import containerImage from '../images/Container-image.png';
import ContactGrid from './ContactGrid'; // Import the ContactGrid component
import ProfileCard from './ProfileCard';
import Coreteamsection from './Coreteamsection';

import { Height } from '@mui/icons-material';
import Coinvestigators from './Coinvestigators';
import Cocollaborators from './Cocollaborators';


function FedSec() {
  return (
    <>
      <div className="central">
        <img src={containerImage} alt="My Local Image" className="right-image" style={{ height: '35vh' }} />
        <h2>FEDGEN DataHub</h2>
      </div>

      <div className="coming-soon">
        <h2><ul>Coming Soon</ul></h2>
      </div>


    </>



  );
}

export default FedSec;
