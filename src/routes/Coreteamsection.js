import React from 'react';
import { Grid, Card, CardContent, Typography, Avatar, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School'; // Use as Google Scholar icon (or any academic icon)

import Sweets from '../images/group1.png';
import Bola from '../images/group3.png';
import John from '../images/group6.jpeg';
import Festus from '../images/group5.jpeg';
import Ajayi from '../images/group4.jpeg';
import Adetiba from '../images/group2.jpeg';
import Uche from '../images/group7.jpg';

const Coreteam = [
  {
    name: "Engr. Matthew Boladele AKANLE",
    title: "Lead System Engineer",
    img: Bola, // Replace with actual image path
    linkedin: "https://www.linkedin.com/in/matthew-boladele-akanle-1431a2117/",
    scholar: "#"
  },
  {
    name: "Prof. E. Adetiba",
    title: "Founding Principal Investigator",
    img: Adetiba, // Replace with actual image path
    linkedin: "https://www.linkedin.com/in/emmanuel-adetiba-ph-d-bab79082/",
    scholar: "https://scholar.google.com/citations?user=3LTdUs0AAAAJ&hl=en"
  },
  {
    name: "Mrs Priscilla O. AJAYI",
    title: "Lead Software Developer",
    img: Ajayi, // Replace with actual image path
    linkedin: "https://www.linkedin.com/in/priscilla-ajayi/",
    scholar: "#"
  },
  {
    name: "Engr. (Mrs) Olubunmi F. Sweetwilliams",
    title: "System Engineer",
    img: Sweets,
    linkedin: "https://www.linkedin.com/in/sweetwilliams-faith-54ab74117",
    scholar: "#"
  },
  {
    name: "John Wejin",
    title: "System Engineering Intern",
    img: John,
    linkedin: "https://www.linkedin.com/in/john-wejin-431141112/",
    scholar: "https://scholar.google.com/citations?user=n0iFp4oAAAAJ&hl=en&oi=ao"
  },
  {
    name: "Uche J. Nnaji",
    title: "System Engineering Intern ",
    img: Uche,
    linkedin: "https://www.linkedin.com/in/uche-josiah-47386618b/",
    scholar: "https://scholar.google.com/citations?user=ss-zOksAAAAJ&hl=en&oi=ao"
  },

  {
    name: "Festus Ojesanmi",
    title: "Software Development Intern ",
    img: Festus,
    linkedin: "https://www.linkedin.com/in/festusojesanmi/",
    scholar: "#"
  },
];

const CoreteamCard = ({ name, title, img, linkedin, scholar }) => (
  <Card>
    <CardContent style={{ textAlign: 'center' }}>
      <Avatar src={img} alt={name} style={{ width: 140, height: 140, margin: '0 auto' }} />
      <Typography variant="h6" style={{ fontSize: '14px', fontWeight: '550', color: "#1164CA" }} gutterBottom>
        {name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {title}
      </Typography>
      <div>
        <IconButton component="a" href={linkedin} target="_blank" aria-label="LinkedIn">
          <LinkedInIcon />
        </IconButton>
        <IconButton component="a" href={scholar} target="_blank" aria-label="Google Scholar">
          <SchoolIcon />
        </IconButton>
      </div>
    </CardContent>
  </Card>
);

const Coreteamsection = () => (
  <Grid container spacing={4} style={{ padding: '10px', color: "#1164CA" }}>
    <Grid item xs={12}>
      <CoreteamCard
        name={Coreteam[1].name}
        title={Coreteam[1].title}
        img={Coreteam[1].img}
        linkedin={Coreteam[1].linkedin}
        scholar={Coreteam[1].scholar}
      />
    </Grid>
    {Coreteam.slice(0, 1).concat(Coreteam.slice(2)).map((prof, index) => (
      <Grid item xs={6} sm={4} md={4} key={index}>
        <CoreteamCard
          name={prof.name}
          title={prof.title}
          img={prof.img}
          linkedin={prof.linkedin}
          scholar={prof.scholar}
        />
      </Grid>
    ))}
  </Grid>
);

export default Coreteamsection;
