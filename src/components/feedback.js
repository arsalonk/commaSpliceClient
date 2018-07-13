import React from 'react';
import { connect } from 'react-redux';
import { setDisplayNull } from '../actions/feedback';
import './styles/feedback.css';
import { getQuestion } from '../actions/auth';


export class Feedback extends React.Component {

  setNull = () => {
    this.props.dispatch(setDisplayNull());
    this.props.dispatch(getQuestion(this.props.id))
    console.log('setNull called from feedback component');
  }

  render(){
    if(this.props.currentAnswer !== null){
      return (
        <div className='feedback-display main-display'>
        <div className='feed'>
          <p>You are {this.props.correct ? "CORRECT" : "WRONG"}</p>
          <p>The English translation for {this.props.question.question} is {this.props.question.answer}</p>
          <p>You have answered this question correctly {this.props.question.correct}/{this.props.question.total} times</p>
          <button onClick={() => this.setNull()}>Next Question</button>          
        </div>

        </div>
      )      
    }else{
      return null;
    }
  }

}
const mapStateToProps = state => {
  return {
      question: state.auth.question,
      currentAnswer: state.auth.currentAnswer,
      id: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(Feedback);
