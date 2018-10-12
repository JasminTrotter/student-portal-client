import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';
import Dashboard from './dashboard'
import '../styles/login.css';

export default function Login(props) {


   
    return (
        <div className="sign-in">
            <h2>Sign In</h2>
            <LoginForm />
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    );

}

