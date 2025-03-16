import React from 'react';
import '../App.css';
import containerImage from '../images/Container-image.png';
import ContactGrid from './ContactGrid'; // Import the ContactGrid component
import ProfileCard from './ProfileCard';
import Coreteamsection from './Coreteamsection';

import { Height } from '@mui/icons-material';
import Coinvestigators from './Coinvestigators';
import Cocollaborators from './Cocollaborators';


function People() {
  return (
    <>
      <div className="central">
        <img src={containerImage} alt="My Local Image" className="right-image" style={{ height: '35vh' }} />
        <h2>PEOPLE</h2>
      </div>

      <br />
      <div className="divider-container">
        <hr className="line" />
        <span className="text">Core Implementation team</span>
        <hr className="line" />
      </div>
      <Coreteamsection />

      <br />
      <br />
      <br />

      <div className="divider-container">
        <hr className="line" />
        <span className="text">Co-Investigators</span>
        <hr className="line" />
      </div>
      <Coinvestigators />
      <br />
      <br />
      <br />

      <div className="divider-container">
        <hr className="line" />
        <span className="text">Collaborators</span>
        <hr className="line" />
      </div>
      <Cocollaborators />




      <div className="student-team-section">
        <br />
        <br />
        <div className="divider-container">
          <hr className="line" />
          <span className="text">Postdocs/Ph.Ds</span>
          <hr className="line" />
        </div>

        <div className="student-team-container">


          <div className="student-team-member">

            <p className="role">Ayodele H. Ifijeh (FEDGEN Scholar)</p>
            <p className="name">Ph.D in ICE Ongoing at Covenant <br /> University, Ota, Nigeria.</p>
            <p className="name">2020-2025</p>
          </div>

          <div className="student-team-member">

            <p className="role">Comfort O. Lawal (FEDGEN Scholar)</p>
            <p className="name">Ph.D in ICE Ongoing at Covenant <br /> University, Ota, Nigeria.</p>
            <p className="name">2020-2025</p>

          </div>

          <div className="student-team-member">

            <p className="role">Omolola Ademola (FEDGEN Scholar)</p>
            <p className="name">Ph.D in ICE Ongoing at Covenant <br /> University, Ota, Nigeria.</p>
            <p className="name">2023-2027</p>

          </div>

          <div className="student-team-member">
            <p className="role">Comfort Some-fun (FEDGEN Scholar)</p>
            <p className="name">Ph.D in ICE Ongoing at Covenant <br /> University, Ota, Nigeria.</p>
            <p className="name">2023-2027</p>
          </div>

          <div className="student-team-member">

            <p className="role">Gabriel Sobola (FEDGEN Scholar)</p>
            <p className="name">Ph.D in ICE Ongoing at Covenant <br /> University, Ota, Nigeria.</p>
            <p className="name">2023-2027</p>

          </div>

          <div className="student-team-member">

            <p className="role">Uche J. Nnaji(FEDGEN Scholar)</p>
            <p className="name">Ph.D in Computer Science <br /> Ongoing at Covenant University,<br /> Ota, Nigeria.</p>
            <p className="name">2023-2027</p>

          </div>


        </div>
      </div>


      <div className="student-team-section">
        <br />

        <div className="divider-container">
          <hr className="line" />
          <span className="text">Industry/Clinical Experts</span>
          <hr className="line" />
        </div>

        <div className="student-team-container">





          <div className="student-team-member">
            <p className="role">Engr. Emmanuel Owolabi</p>
            <p className="name">Telecommunication Engineer</p>
          </div>

          <div className="student-team-member">
            <p className="role">Dr. Ademola Adeyeye (MBBS)</p>
            <p className="name">Medical Advisor</p>
          </div>

          <div className="student-team-member">
            <p className="role">Engr. Oladipupo Olaleye</p>
            <p className="name">Director of ICT, Living Faith Church Worldwide</p>
          </div>


          <div className="student-team-member">
            <p className="role">Tolulope Romiluyi</p>
            <p className="name">FEDGEN Cloud/HPC Consultant</p>
          </div>




        </div>
      </div>


      <div className="student-team-section">
        <br />
        <br />
        <div className="divider-container">
          <hr className="line" />
          <span className="text">Interns</span>
          <hr className="line" />
        </div>

        <div className="student-team-container">
          <div className="student-team-member">
            <p className="role">John S. Wejin</p>
            <p className="name">System & Cloud Engineering Intern</p>
          </div>

          <div className="student-team-member">
            <p className="role">Uche J. Nnaji</p>
            <p className="name">Software Development Intern</p>
          </div>

          <div className="student-team-member">
            <p className="role">Festus Ojesanmi</p>
            <p className="name">Software Development Intern</p>
          </div>

          <div className="student-team-member">
            <p className="role">Blessing Adekunle</p>
            <p className="name">Web/Software Development Intern</p>
          </div>

          <div className="student-team-member">
            <p className="role">Ayoola Akindele</p>
            <p className="name">Embedded System Development Intern</p>
          </div>

          <div className="student-team-member">
            <p className="role">Victor Akunde</p>
            <p className="name">Software Development Intern</p>
          </div>
        </div>
      </div>

    </>





  );
}

export default People;
