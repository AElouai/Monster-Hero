import React , {Component , PropTypes} from 'react';
import Question from './Question'
import {connect} from 'react-redux';
import * as quizActions from "../../actions/quiz.actions"
import { v4 } from 'uuid'
import { saveResponse } from '../../actions/quiz.actions'

const question ={
    question:"You prefer to crush your enemies with : ",
    answers: [
        "Monstrous force; heroes are meant to fall in fair combat",
        "Clever traps; heroes are suckers who fall for anything"
    ],
    id:34
};


export const Quizzes = connect(
    null,
    dispatch =>
        ({
            question ,
            onNewResponse(response) {
                dispatch(saveResponse(response))
            }
        })
)(Question);


/*
class Quizzes extends Component {

    constructor(props , context){
        super(props , context);
        this.OnClickSave = this.OnClickSave.bind(this);
    }

    OnClickSave(event){
        this.props.saveResponse({ response : {  id : question.id , response : event } } );
    }

    render(){
        return(
            <div id="quizzie">
                <h1>What Type Of Being Are You?</h1>
                <ul className="quiz-step step1 current">
                    <li className="question">
                        <div className="question-wrap">
                            <h2>Question #1: {question.question}</h2>
                        </div>
                    </li>
                    {question.answers.map((el)=>{
                            return <li key={v4()} className="quiz-answer low-value"  >
                            <div className="answer-wrap">
                            <p onClick={()=> this.OnClickSave(el)} className="answer-text" >{el}</p>
                            </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

Quizzes.propTypes = {
    response : React.PropTypes.func,
    dispatch : React.PropTypes.array
};

const mapStateToProps = (state , ownProps) => {
    return {
        response : state.response
    }
};

const mapDispatchToProps = dispatch =>
    ({
        saveResponse(response) {
            dispatch(quizActions.saveResponse(response))
        }
    });

/!*
<Question { ...question , OnClickSave } />
*!/

// export default Quizzes;
export default connect(mapStateToProps,mapDispatchToProps)(Quizzes);*/
