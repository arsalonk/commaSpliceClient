import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Feedback from './feedback';

import './styles/dashboard.css';
import Question from './question';


export class Dashboard extends React.Component {

    render() { 
        if(!this.props.loading && this.props.currentAnswer === null) {return (

            <div className='text-container main-display'>
                <form
                    id='input-form'
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <h2 className='farsi-display'>{this.props.question.question}</h2>
                    <p className='pronunciation-display'>({this.props.question.pronounce})</p>
                    <Field
                        component={Input}
                        type="text"
                        name="answer"
                        id="answer"
                        validate={[required, nonEmpty]}
                        autoComplete="off"
                        label='Write the English translation below:'
                        enableReinitialize="true"
                    />
                    <button className='form-button'>check</button>
                </form>            
            </div>

        )}
        return(
           <Feedback />         
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

export default requiresLogin()(connect(mapStateToProps)(Dashboard));