import './index.css';
import React from 'react';

const Header = ({ upperText="" ,midText="" ,lowerText="" , headerClass=""}) =>
    <header className={headerClass}>
        <h1>{upperText} <span>{midText}</span> {lowerText}</h1>
    </header>

export default Header;