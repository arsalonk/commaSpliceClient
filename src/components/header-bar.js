import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import iranLogo from '../images/530px-Faravahar-Gold.png';

import './styles/header-bar.css';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="logout-button" onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <div className="header-bar">
                <img className='iran-logo logo-left' src={iranLogo} alt="symbol of Iran"/>
                <h1 className="header-h1">Learn Farsi</h1>
                {logOutButton}
                <img className='iran-logo logo-right' src={iranLogo} alt="symbol of Iran"/>

                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
