import './index.css';
import React from 'react';

const Footer = ({ upperText="" ,midText="" ,lowerText="" }) =>
    <div className="footerR">
        <h1>{upperText} <span>{midText}</span>{lowerText}</h1>
    </div>

export default Footer;