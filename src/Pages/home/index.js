import React from 'react';
import {Link} from 'react-router';
import Monster from './Monster';
import Header from './Header';
import Footer from './Footer';

const Home = ({ }) =>
    <div >
        <Header/>
        <Link to="result"><Monster/></Link>
        <Footer/>
    </div>

export default Home;