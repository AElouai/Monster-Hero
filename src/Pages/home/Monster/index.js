import './index.css';
import React from 'react';
import Click from '../click'
const Monster = ({ selected=false }) =>
    <div className="container">
        <div className="monster"></div>
        <div className="hair"></div>
        <div className="face">
            <div className="eyes">
                <div className="iris"></div>
            </div>
        </div>
        <div className="mouth"></div>
        <div className="drool"></div>
        <div className="teeth">
            <div></div>
            <div></div>
        </div>
        <div className="text"></div>
    </div>



export default Monster;