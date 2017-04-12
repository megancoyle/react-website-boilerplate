import React, { Component } from 'react';
import '../../stylesheets/Footer.scss';

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="container">
            <p>© {date}</p>
    </footer>
  )
}

export default Footer;
