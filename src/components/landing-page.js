import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LoginForm from './login-form';

import './styles/landing-page.css';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="welcome-screen">
            <h2>Welcome to Learn Farsi!</h2>
            <p className='desc'>With our patented <a href="https://qz.com/1211561/how-to-learn-a-language-use-spaced-repetition/">spaced repetition</a> algorithm you will be able to retain what you learn much more effectively.</p>
            <p>Login or Register below to begin!</p>
            <LoginForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
