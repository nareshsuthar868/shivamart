import React from 'react';

const ContactUsButton = () => {
  const whatsappLink = 'https://wa.me/9660104545'; // Replace with your WhatsApp number

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <button style={styles.button}>
        Contact Us on WhatsApp
      </button>
    </a>
  );
};

// Button styles
const styles = {
  button: {
    border: '1px solid #7620ff',
    backgroundColor: '#7620ff',
    width: '100%',
    padding: '15px',
    outline: 'none',
    color: '#fff',
    borderRadius: '1rem',
    cursor: 'pointer',
    transition: '.3s ease'
  },
};

export default ContactUsButton;
