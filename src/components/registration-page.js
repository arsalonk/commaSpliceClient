import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="welcome-screen">
            <h2>Register as a new user</h2>
            <p>With our patented <a href="https://qz.com/1211561/how-to-learn-a-language-use-spaced-repetition/">spaced repetition</a> algorithm you will be able to retain what you learn much more effectively.</p>
            <RegistrationForm />            
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
