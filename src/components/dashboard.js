import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Feedback from './feedback';

import './styles/dashboard.css';
import Question from './question';
import { refreshAuthToken } from '../actions/auth';


export class Dashboard extends React.Component {

    componentDidUpdate() {
        this.props.dispatch(refreshAuthToken())
    }

    render() { 
        if(!this.props.loading && this.props.currentAnswer === null) {return (
            <Question />
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