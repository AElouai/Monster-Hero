import React , {Component , PropTypes} from 'react';
import Question from './Question'
import {connect} from 'react-redux';
import * as actions from "../../actions/quiz.actions"
import { v4 } from 'uuid'

/*
const qZ ={
    question:"You prefer to crush your enemies with : ",
    answers: [
        "Monstrous force; heroes are meant to fall in fair combat",
        "Clever traps; heroes are suckers who fall for anything"
    ],
    id:34
};
*/

class Quizzes extends Component {

    constructor(props , context){
        super(props , context);
        let questions = JSON.parse(localStorage.getItem('questions'));
        this.state = {
            question : questions[0] ,
            at : 0,
            max :questions.length
        };
        this.OnClickSave = this.OnClickSave.bind(this);
    }

    componentWillMount(){
        console.log('componentWillMount');
    }
    OnClickSave(data){
        // debugger;
        const ato = this.state.at + 1;
        let questions = JSON.parse(localStorage.getItem('questions'));
        let question = questions[ato];
        console.warn(question );
        this.setState({ question: question, at : ato });
        this.props.saveResponse({ response : {  id : data.id , response : data.response } } );
    }

    render(){
        return(
            this.state.at > this.state.max ?
                <Question question={this.state.question}  onNewResponse={this.OnClickSave}  /> :
                <Question question={this.state.question}  onNewResponse={this.OnClickSave}  />
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
            dispatch(actions.saveResponse(response))
        }
    });

/*
<Question { ...question , OnClickSave } />
*/

// export default Quizzes;
export default connect(mapStateToProps,mapDispatchToProps)(Quizzes);