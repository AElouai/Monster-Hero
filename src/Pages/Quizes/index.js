import React , {Component} from 'react';
import Question from './Question'
import {connect} from 'react-redux';
import * as quizActions from "../actions/quiz.actions"
import { v4 } from 'uuid'

const question ={
    question:"You prefer to crush your enemies with : ",
    answers: [
        "Monstrous force; heroes are meant to fall in fair combat",
        "Clever traps; heroes are suckers who fall for anything"
    ],
    id:34
};

class Quizzes extends Component {

    constructor(props , context){
        super(props , context);
        this.state = { loading: true };
        this.OnClickSave = this.OnClickSave.bind(this);
    }

    OnClickSave(event){
        this.props.dispatch(quizActions.saveResponse({ response : {  id : question.id , response : event } } ) );
        this.setState({ loading: event });
        console.warn(this.props.response);
    }

    componentWillMount(){
        console.log("componentWillMount" , question);
    }
    render(){
        return(
            <div id="quizzie">
                <h1>What Type Of Being Are You?</h1>
                <ul className="quiz-step step1 current">
                    <li className="question">
                        <div className="question-wrap">
                            <h2>Question #1: { question.question }</h2>
                        </div>
                    </li>
                    { question.answers.map((el)=>{
                            return <li key={v4()} className="quiz-answer low-value"  >
                            <div className="answer-wrap">
                            <p onClick={ ()=> this.OnClickSave(el) } className="answer-text" >{el}</p>
                            </div>
                            </li>
                        })
                    }
                </ul>

                <div>{this.state.loading==true ? ' loading ':
                    this.props.response.map((elmnt)=>{
                        <p>{elmnt}</p>
                    })
                }</div>
            </div>
        );
    }
}

function mapStateToProps(state , ownProps) {
    console.log("mapStateToProps", state);
    console.log("typeof this.props.response", typeof  state.response);
    console.log("this.props.response",state.response);


    return {
        response : state.response
    }
}

/*
<Question { ...question , OnClickSave } />
*/

// export default Quizzes;
export default connect(mapStateToProps)(Quizzes);