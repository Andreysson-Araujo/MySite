import React from "react";
import "../styles/Contact.css"

import { SiLinkedin } from "react-icons/si";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Contato </h1>
      <div className="contact-form-container">
        <h2>Email: andreyssonaraujo@gmail.com</h2>
        Linkedin <SiLinkedin size={40}/>
        <h3>Andreysson@Dev</h3>
      </div>
    </div>
  );
};

export default Contact;