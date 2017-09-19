import React , {PropTypes} from 'react';
import './index.css'
import { v4 } from 'uuid'

const Profile = ({  question ,  onNewResponse }) =>
    <div id="quizzie">
        <h1>What Type Of Being Are You?</h1>
        <ul className="quiz-step step1 current">
            <li className="question">
                <div className="question-wrap">
                    <h2>Question #1: { question.question }</h2>
                </div>
            </li>
            {question.answers.map(function(el){
                return <li key={v4()} className="quiz-answer low-value"  >
                        <div className="answer-wrap">
                            <p onClick={() =>onNewResponse({ id : question.id, response : el })} className="answer-text">{el}</p>
                        </div>
                    </li>
            })}
        </ul>

    </div>

Profile.prototype = {
    question: PropTypes.object,
    // answers : PropTypes.array,
    // id : PropTypes.number,
    onNewResponse: PropTypes.func
};
export default Profile;