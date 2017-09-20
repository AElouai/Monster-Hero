import React , { Component } from 'react';
import {Link} from 'react-router';
import Profile from './profile'
import './index.css'
import Header from '../../cummun/Header';
import axios from 'axios';
import {response} from "../../reducers/quiz.reducers";

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data : {
                name : "unknown",
                age : 0,
                bio : "unknown",
                img : "http://www.getsmartcontent.com/content/uploads/2014/08/shutterstock_149293433.jpg"
            }
        };
    }
    componentWillMount(){
        console.log("componentWillMount " );
        this.setState({ loading: true });
        console.warn(this.props.response);
        axios.post(`http://localhost:3300/api/result`,{ response  :this.props.response})
            .then(res => {
                console.log("DATA =========>>>>>>",res.data);
                this.setState({
                    loading: false,
                    data : res.data
                })
            });


    }

    componentDidMount() {
        console.log("componentDidMount " );

        console.log("this.state " ,this.state);

    }

    render(){
        return(
            this.state.loading == true ?
                <div>Loading Data </div> :
                <Profile
                    name={this.state.data.name}
                    age={this.state.data.age}
                    bio={this.state.data.bio}
                    img = {this.state.data.img} />
        );
    }
}

export default Result;