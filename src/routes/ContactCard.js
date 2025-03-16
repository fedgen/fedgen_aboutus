import React from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import { FaGoogle, FaLinkedin, FaInfoCircle } from 'react-icons/fa';
import './ContactCard.css';

const ContactCard = ({ name, role, title, image, infoLink, googleLink, linkedinLink }) => {
  return (
    <Box className="contact-card">
      <img src={image} alt={name} className="contact-image" />
      <Typography variant="h6" className="name">{name}</Typography>
      <Typography variant="body1" className="role">{role}</Typography>
      <Typography variant="body2" className="title">{title}</Typography>
      <Box className="actions">
        <a href={infoLink} target="_blank" rel="noopener noreferrer">
          <IconButton className="actionButton"><FaInfoCircle /></IconButton>
        </a>
        <a href={googleLink} target="_blank" rel="noopener noreferrer">
          <IconButton className="actionButton"><FaGoogle /></IconButton>
        </a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <IconButton className="actionButton"><FaLinkedin /></IconButton>
        </a>
      </Box>
    </Box>
  );
};

export default ContactCard;
