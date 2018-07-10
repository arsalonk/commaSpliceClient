import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { required, nonEmpty } from '../validators';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    onSubmit(values) {
        if (values.answer === this.props.protectedData.english) {
            console.log('correct')
        } else {
            console.log('wrong')
        }
    }

    render() {
        const question = this.props.protectedData
        // const questions = this.props.protectedData.map((question, index) => {
        return (
            <div className='text-container'>
                {/* <h2>{question.word}</h2> */}
                <form
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <label htmlFor="answer">{question.word}</label>
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
        )
        // })
        // return (
        //     <div>{questions}</div>
        // )
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(reduxForm({
    form: 'answer',
    onSubmitFail: (errors, dispatch) => dispatch(focus('answer'))
    })(connect(mapStateToProps)(Dashboard)));
