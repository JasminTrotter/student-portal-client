import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';
import Dashboard from './dashboard'
import '../styles/login.css';

export function Login(props) {
    console.log(props);
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    // const userId = props.userId
    // const name = props.name

    // if (props.authToken) {
               
    //     return (<Dashboard name={name} userId={userId}/>);
    // }


   
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
    // loggedIn: state.auth.currentUser.loggedIn,
    // userId: state.auth.currentUser.id,
    //name: state.auth.currentUser.name,
    //authToken: state.auth.authToken
    }
};

export default connect(mapStateToProps)(Login);