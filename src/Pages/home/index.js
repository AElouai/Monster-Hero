import React from 'react';
import {Link} from 'react-router';
import Monster from './Monster';
import Header from '../../cummun/Header';
import Footer from '../../cummun/Footer';

const Home = ({ }) =>
    <div >
        <Header headerClass="right-header"  upperText="HERO" midText="or" lowerText="MONSTER"/>
        <Link to="question"><Monster/></Link>
        <Footer upperText="Let's find" midText="OUT" lowerText="Who you are ;D"/>
    </div>

export default Home;