import React from 'react';
import { Grid, Card, CardContent, Typography, Avatar, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School'; // Use as Google Scholar icon (or any academic icon)

import raymond from '../images/Dr-Raymond.jpg';
import ayokunle from '../images/Dr_ayokunle.jpeg';
import abdultaofeek from '../images/Dr_Abdultaofeek Abayomi.jpg';
import badejo from '../images/Dr_Badejo.jpeg';
import ejidokun from '../images/dr-ejidokun.jpeg';
import thakur from '../images/Dr-Thakur1.jpeg';
import adeshina from '../images/dr-adeshina.jpg';
import popoola from '../images/dr-popoola.jpeg';
import subusisoMoyo from '../images/prof-subusiso-moyo.jpeg';
import maissaMbaye from '../images/prof-maissa-mbaye.jpeg';
import dameDiongue from '../images/prof-dame-diong.jpeg';
import ayodejiAdegoke from '../images/Ayodeji Adegoke.jpg';
import takengaClaude from '../images/Takenga Claude Mbusa.png';
import bankeOgunlana from '../images/Banke Ogunlana Passport.jpg';

import oshin from '../images/Dr Osin.jpg';
import idowu from '../images/DR.OLABODE-IDOWU.jpeg';
import funmi from '../images/dr-funmilayo-sijuade.jpeg';
import obiyemi from '../images/Obiyemi Obiseye.jpg';
import temi from '../images/dr-temitope-oluwatosin.jpeg';



const Investigatorteam = [
  {
    name: "Dr. Oluwadamilola Oshin",
    title: "Coordinator, ASPMIR Group and AI for Biomedical Signal Processing (AI4BSP) Working Group",
    img: oshin,
    linkedin: "https://www.linkedin.com/in/oluwadamilola-oshin-ph-d-72201448/",
    scholar: "#"
  },
  {
    name: "DR. OLABODE IDOWU-BISMARK",
    title: "Coordinator, AI for Communications Systems, Cloud & High Performance Computing (AI4ComSys and CHPC) Working Group",
    img: idowu,
    linkedin: "https://www.linkedin.com/in/emmanuel-adetiba-ph-d-bab79082/",
    scholar: "https://scholar.google.com/citations?user=3LTdUs0AAAAJ&hl=en"
  },
  {
    name: "Dr. Funmilayo Sijuade Moninuola",
    title: "Covenant University, Ota, Ogun State, Nigeria",
    img: funmi,
    linkedin: "#",
    scholar: "#"
  },
  {
    name: "Dr. Temitope Oluwatosin Takpor",
    title: "Covenant University, Ota, Ogun State, Nigeria",
    img: temi,
    linkedin: "#",
    scholar: "#"
  },
  {
    name: "Dr. Obiseye Obiyemi",
    title: "Durban University of Technology Durban, South Africa ",
    img: obiyemi,
    linkedin: "https://www.linkedin.com/in/obiseye-obiyemi-b2b2706a/",
    scholar: "https://scholar.google.com/citations?hl=en&user=IqEKNhAAAAAJ",
  },

];

const InvestigatorteamCard = ({ name, title, img, linkedin, scholar }) => (
  <Card>
    <CardContent style={{ textAlign: 'center' }}>
      <Avatar src={img} alt={name} style={{ width: 140, height: 140, margin: '0 auto' }} />
      <Typography
        variant="h6"
        style={{
          fontSize: '14px',
          fontWeight: '550',
          color: '#0658b6', // Set the color for the name
        }}
        gutterBottom
      >
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


const Coinvestigators = () => (
  <Grid container spacing={4} style={{ padding: '10px' }}>
    {Investigatorteam.map((prof, index) => (
      <Grid item xs={6} sm={4} md={4} key={index}>
        <InvestigatorteamCard
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

export default Coinvestigators;
