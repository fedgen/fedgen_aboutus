import React from 'react';
import { Box, IconButton } from '@mui/material';
import { FaGoogle, FaLinkedin, FaInfoCircle } from 'react-icons/fa';

const ProfileCard = ({ infoLink, googleLink, linkedinLink }) => {
  return (
    <Box
      sx={{
        '.actions': {
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1rem',
        },
        '.actionButton': {
          margin: '0 0.5rem',
          color: 'red',
          backgroundColor: 'transparent',
          border: '1px solid white',
        },
      }}
    >
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

export default ProfileCard;
