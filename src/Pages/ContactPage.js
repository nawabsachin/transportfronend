import React from 'react';
import'./ContactPage.css';
import ContactSection from '../contact';
import Footer from '../Footer';
import NavBarHarsh from '../NavBarHarsh';

const ContactPage = () => {
  return (
    <>
    <NavBarHarsh/>
    <div className='conact-div'><h1> Contact Us </h1></div>
        <ContactSection/>
    <Footer/>
    </>
  );
};

export default ContactPage;