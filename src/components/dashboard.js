import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import Feedback from './feedback';

import './styles/dashboard.css';
import Question from './question';


export class Dashboard extends React.Component {

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