import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactHead from './ContactHead/ContactHead';
import ContactInfo from './ContactInfo/ContactInfo';

const Contact = () => {
    return (
        <div id="contact" className="pt-28">
            <ContactHead></ContactHead>
            <ContactInfo></ContactInfo>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Contact;