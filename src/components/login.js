import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

import '../styles/login.css';

export function Login(props) {
    console.log(props);
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    const userId = props.userId
    const name = props.name

    if (props.loggedIn) {
               
        return (<Redirect to={{
            pathname: `/dashboard/${userId}`,
            state: {name} }} />);
    }


   
    return (
        <div className="sign-in">
            <h2>Sign In</h2>
            <LoginForm />
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    );

}

const mapStateToProps = state => {
    console.log(state);
    return {
    loggedIn: state.auth.currentUser.loggedIn,
    userId: state.auth.currentUser.id,
    name: state.auth.currentUser.name
    }
};

export default connect(mapStateToProps)(Login);