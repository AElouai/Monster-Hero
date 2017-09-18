import React , { Component } from 'react';
import {Link} from 'react-router';
import Profile from './profile'
import './index.css'
import Header from '../cummun/Header';
import axios from 'axios';


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

        axios.post(`http://localhost:3300/api/type`)
            .then(res => {
                console.log("DATA =========>>>>>>",res.data);
                this.props = res.data;
                this.state = {
                    loading: false,
                    data : res.data
                }
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
            <div className="bodyClass">
                <Header headerClass="center-header"  upperText="HERO" midText="or" lowerText="MONSTER"/>
                <div className="row">
                    <div className="col-sm-12 col-xs-12 col-md-3"></div>
                    <div className="col-sm-12 col-xs-12 col-md-6">
                        <Profile
                            name={this.state.data.name}
                            age={this.state.data.age}
                            bio={this.state.data.bio}
                            img = {this.state.data.img} />
                    </div>
                    <div className="col-sm-12 col-xs-12 col-md-3"></div>
                </div>

            </div>
        );
    }
}


export default Result;