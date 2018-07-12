import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty } from '../validators';
import requiresLogin from './requires-login';
import { submitAnswer } from '../actions/auth';
import { displayAnswer } from '../actions/feedback';
import Feedback from './feedback';

import './styles/dashboard.css';


export class Dashboard extends React.Component {
    componentDidMount() {

    }

    onSubmit(values) {
        if (values.answer === this.props.question.answer) {
            console.log('correct')
            this.props.dispatch(displayAnswer(true));
            this.props.dispatch(submitAnswer(this.props.question.next, this.props.id));
        } else {
            console.log('incorrect')
            this.props.dispatch(displayAnswer(false));

            this.props.dispatch(submitAnswer(this.props.question.next, this.props.id));
        }
    }

    render() { 
        if(!this.props.loading && this.props.currentAnswer === null) {return (
            <div className='text-container main-display'>
                <form
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <label className='farsi-display' htmlFor="answer">{this.props.question.question}</label>
                    <p>Write the English translation below</p>
                    <Field
                        component={Input}
                        type="text"
                        name="answer"
                        id="answer"
                        validate={[required, nonEmpty]}
                        autoComplete="off"
                    />
                    <button>check</button>
                </form>            
            </div>
        )}
        return(
           <Feedback 
                answer={this.props.question.answer}
                correct={this.props.currentAnswer}
            />         
        )


    }
}

const mapStateToProps = state => {
    return {
        question: state.auth.question,
        id: state.auth.currentUser,
        loading: state.auth.loading,
        currentAnswer: state.display.currentAnswer
    };
};

export default requiresLogin()(reduxForm({
    form: 'answer',
    onSubmitFail: (errors, dispatch) => dispatch(focus('answer'))
})(connect(mapStateToProps)(Dashboard)));