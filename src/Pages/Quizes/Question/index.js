import React , {PropTypes} from 'react';
import './index.css'
import { v4 } from 'uuid'

const Profile = ({ question="" , answers=[] }) =>
    <div id="quizzie">
        <h1>What Type Of Being Are You?</h1>
        <ul className="quiz-step step1 current">
            <li className="question">
                <div className="question-wrap">
                    <h2>Question #1: { question }</h2>
                </div>
            </li>
            {answers.map(function(el){
                return <li key={v4()} className="quiz-answer low-value" data-quizIndex="2">
                        <div className="answer-wrap">
                            <p className="answer-text">{el}</p>
                        </div>
                    </li>
            })}
        </ul>

    </div>





/*    <div className="row">
        <div className="row">{question}</div>
        <div className="row">
            {answers.map(function(el){
                return <div className="col-md-4" key={v4()} > {el} </div>
            })}
        </div>

    </div>*/

Profile.prototype = {
    question: PropTypes.string,
    answers : PropTypes.array
};
export default Profile;