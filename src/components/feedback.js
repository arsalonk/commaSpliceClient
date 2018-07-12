import React from 'react';
import { connect } from 'react-redux';
import { setDisplayNull } from '../actions/feedback';
import './styles/feedback.css';


export class Feedback extends React.Component {

  setNull = () => {
    this.props.dispatch(setDisplayNull());
    console.log('setNull called from feedback component');
    
  }

  render(){
    if(this.props.currentAnswer !== null){
      return (
        <div className='feedback-display main-display'>
        <div>
          <p>You are {this.props.correct ? "CORRECT" : "WRONG"}</p>
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
      currentAnswer: state.auth.currentAnswer
  };
};

export default connect(mapStateToProps)(Feedback);
