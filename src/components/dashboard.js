import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty } from '../validators';
import requiresLogin from './requires-login';
import { submitAnswer } from '../actions/auth';

export class Dashboard extends React.Component {
    componentDidMount() {

    }

    onSubmit(values) {
        this.props.dispatch(submitAnswer(this.props.question.next, this.props.id));
    }

    render() {

        if(!this.props.loading) {return (
            <div className='text-container'>
                <form
                        onSubmit={this.props.handleSubmit(values =>
                            this.onSubmit(values)
                        )}>
                        <label htmlFor="answer">{this.props.question.question}</label>
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
    }
}

const mapStateToProps = state => {
    return {
        question: state.auth.question,
        id: state.auth.currentUser,
        loading: state.auth.loading
    };
};

export default requiresLogin()(reduxForm({
    form: 'answer',
    onSubmitFail: (errors, dispatch) => dispatch(focus('answer'))
})(connect(mapStateToProps)(Dashboard)));
