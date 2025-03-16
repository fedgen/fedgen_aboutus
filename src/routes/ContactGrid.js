import React from 'react';
import ContactCard from './ContactCard';
import './ContactGrid.css'; // Import the CSS file for styling

const ContactGrid = ({ contacts }) => {
  return (
    <div className="contact-grid">
      {contacts.map((contact, index) => (
        <ContactCard
          key={index}
          name={contact.name}
          role={contact.role}
          title={contact.title}
          image={contact.image}
          infoLink={contact.infoLink}
          googleLink={contact.googleLink}
          linkedinLink={contact.linkedinLink}
        />
      ))}
    </div>
  );
};

export default ContactGrid;
