import React from 'react';
import { Grid, Card, CardContent, Typography, Avatar, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School'; // Using this as a placeholder for Google Scholar icon

// Images
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
import takengaClaude from '../images/Takenga Claude Mbusa.png';
import bankeOgunlana from '../images/Banke Ogunlana Passport.jpg';

// Team data array
const CocollaboratorsTeam = [
  {
    name: "Dr. Joke A. Badejo",
    title: "University of Kent, Canterbury, United Kingdom",
    img: badejo,
    linkedin: "#",
    scholar: "#"
  },
  {
    name: "Dr. Raymond Jule Kala",
    title: "International University of Grand Bassam, Ivory Coast",
    img: raymond,
    linkedin: "https://www.linkedin.com/in/sweetwilliams-faith-54ab74117",
    scholar: "#"
  },
  {
    name: "Dr. Ayokunle A. Awelewa",
    title: "Covenant University, Ota, Nigeria",
    img: ayokunle,
    linkedin: "https://www.linkedin.com/in/john-wejin-431141112/",
    scholar: "#"
  },
  {
    name: "Prof. Dame Diongue",
    title: "Gaston Berger University, St Louis, Senegal",
    img: dameDiongue,
    linkedin: "https://www.linkedin.com/in/uche-josiah-47386618b/",
    scholar: "#"
  },
  {
    name: "Dr. Abdultaofeek Abayomi",
    title: "Mangosuthu University of Technology, Durban, South Africa",
    img: abdultaofeek,
    linkedin: "https://www.linkedin.com/in/festusojesanmi/",
    scholar: "#"
  },
  {
    name: "Dr. Eyitayo Ejidokun",
    title: "Afe Babalola University, Ado-Ekiti, Nigeria",
    img: ejidokun,
    linkedin: "https://www.linkedin.com/in/festusojesanmi/",
    scholar: "#"
  },
  {
    name: "Dr. Segun Popoola",
    title: "Anglia Ruskin University, Cambridge, United Kingdom",
    img: popoola,
    linkedin: "https://www.linkedin.com/in/festusojesanmi/",
    scholar: "#"
  },
  {
    name: "Dr. Tolulope Adeshina",
    title: "The University of British Columbia, Canada",
    img: adeshina,
    linkedin: "https://www.linkedin.com/in/festusojesanmi/",
    scholar: "#"
  },
  {
    name: "Prof. Maissa Mbaye",
    title: "Gaston Berger University, Senegal",
    img: maissaMbaye,
    linkedin: "https://www.linkedin.com/in/festusojesanmi/",
    scholar: "#"
  },
  {
    name: "Prof. Surendra Thakur",
    title: "KZN eSkills CoLab, Durban University of Technology, South Africa",
    img: thakur,
    linkedin: "https://www.linkedin.com/in/festusojesanmi/",
    scholar: "#"
  },
  {
    name: "Prof. Sibusiso Moyo",
    title: "Stellenbosch University, South Africa",
    img: subusisoMoyo,
    linkedin: "https://www.linkedin.com/in/festusojesanmi/",
    scholar: "#"
  },
  {
    name: "Prof. Claude Takenga",
    title: "Université Libre des Pays des Grands Lacs, Goma, DR Congo / Infokom GmbH, Germany",
    img: takengaClaude,
    linkedin: "https://www.linkedin.com/in/festusojesanmi/",
    scholar: "#"
  },
  {
    name: "Prof. Olubanke Ogunlana",
    title: "Covenant University, Ota, Nigeria",
    img: bankeOgunlana,
    linkedin: "https://www.linkedin.com/in/festusojesanmi/",
    scholar: "#"
  }
];

// Individual team member card
const CocollaboratorsTeamCard = ({ name, title, img, linkedin, scholar }) => (
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

// Main grid layout for the team
const Cocollaborators = () => (
  <Grid container spacing={4} style={{ padding: '10px' }}>
    {CocollaboratorsTeam.map((prof, index) => (
      <Grid item xs={6} sm={4} md={4} key={index}>
        <CocollaboratorsTeamCard
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

export default Cocollaborators;
