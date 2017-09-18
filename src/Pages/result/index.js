import React from 'react';
import {Link} from 'react-router';
import Profile from './profile'
import './index.css'
import Header from '../cummun/Header';


const Result = () =>
    <div>
        <Header headerClass="center-header"  upperText="HERO" midText="or" lowerText="MONSTER"/>
        <Profile
            name="Tyrion Lanister"
            age={39}
            bio="Arrested for riding a dragon drunk."
            img = "https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C.jpg" />
    </div>


export default Result;