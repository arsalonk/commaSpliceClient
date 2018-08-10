import React from 'react';
import { connect } from 'react-redux';
import { setDisplayNull } from '../actions/feedback';
import './styles/feedback.css';
import { getQuestion } from '../actions/auth';


export class Feedback extends React.Component {

  setNull = () => {
    this.props.dispatch(setDisplayNull());
    this.props.dispatch(getQuestion(this.props.id))
    // console.log('setNull called from feedback component');
  }

  render(){
    if(this.props.currentAnswer !== null){
      return (
        <div className='feedback-display main-display'>
          <div className='feed'>
            <p 
              className={this.props.currentAnswer ? 'correctness-display correct-display' : 'correctness-display'}>
              {this.props.currentAnswer ? "Correct!" : "Incorrect"}
            </p>
            <p>The English translation for <span className='farsi-span'>{this.props.question.question}</span> is:</p>
            <p className='answer-display'>"{this.props.question.answer}"</p>
            <p className='accuracy-display'>Accuracy: {Math.ceil(this.props.question.correct/this.props.question.total*100)}% ({this.props.question.correct}/{this.props.question.total}) </p>

            <button className='feedback-form-button form-button' onClick={() => this.setNull()}>Next Question</button>          
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
      currentAnswer: state.display.currentAnswer,
      id: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(Feedback);
