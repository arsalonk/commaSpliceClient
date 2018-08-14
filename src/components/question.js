import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus,reset } from 'redux-form';
import Input from './input';
import { required, nonEmpty } from '../validators';
import { submitAnswer } from '../actions/auth';
import { displayAnswer } from '../actions/feedback';

import './styles/dashboard.css';

export class Question extends React.Component {

  onSubmit(values) {
      if (values.answer.toLowerCase() === this.props.question.answer) {
          this.props.dispatch(displayAnswer(true));
      } 
      if (values.answer.toLowerCase() !== this.props.question.answer) {
          this.props.dispatch(displayAnswer(false));
      }
      this.props.dispatch(submitAnswer(values.answer, this.props.id));
      this.props.dispatch(reset('answer'));
  }

  render() { 
    return (
          <div className='text-container main-display'>
              <form
                  id='input-form'
                  onSubmit={this.props.handleSubmit(values =>
                      this.onSubmit(values)
                  )}>
                  <h2 className='farsi-display'>{this.props.question.question}</h2>
                  <p>({this.props.question.pronounce})</p>
                  <p>Write the English translation below</p>
                  <Field
                      component={Input}
                      type="text"
                      name="answer"
                      id="answer"
                      validate={[required, nonEmpty]}
                      autoComplete="off"
                      label='translation:'
                      enableReinitialize="true"
                  />
                  <button className='form-button'>check</button>
              </form>            
          </div>
      )}
  }


const mapStateToProps = state => {
  return {
      question: state.auth.question,
      id: state.auth.currentUser,
      loading: state.auth.loading,
      currentAnswer: state.display.currentAnswer
  };
};

export default reduxForm({
  form: 'answer',
  onSubmitFail: (errors, dispatch) => dispatch(focus('answer'))
})(connect(mapStateToProps)(Question));