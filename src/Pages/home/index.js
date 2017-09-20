import React , {Component} from 'react';
import {Link} from 'react-router';
import Monster from './Monster';
import Header from '../../cummun/Header';
import Footer from '../../cummun/Footer';
import axios from 'axios';


class Home extends Component {

    componentWillMount(){
        console.log("componentWillMount " );
        this.setState({ loading: true });
        axios.post(`http://localhost:3300/api/questions`)
            .then(res => {
                console.log("DATA =========>>>>>>",res.data);
                localStorage.setItem('questions',JSON.stringify(res.data));
                localStorage.setItem('questionsAte',0);
            });
    }

    render(){
        return(
            <div >
                <Header headerClass="right-header"  upperText="HERO" midText="or" lowerText="MONSTER"/>
                <Link to="question"><Monster/></Link>
                <Footer upperText="Let's find" midText="OUT" lowerText="Who you are ;D"/>
            </div>
        );
    }
}

export default Home;




