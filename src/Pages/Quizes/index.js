import React , {PropTypes , Component} from 'react';
import Question from './Question'

const question ={
    question:"You prefer to crush your enemies with : ",
    answers: [
        "Monstrous force; heroes are meant to fall in fair combat",
        "Clever traps; heroes are suckers who fall for anything"
    ],
    id:34
}

class Quizzes extends Component {
    render(){
        return(
            <Question { ...question}/>
        );
    }
}


export default Quizzes;