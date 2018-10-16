import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import LoginForm from './login-form';
import '../styles/login.css';

export function Login(props) {

console.log(props);
   
    return (
        <div className="sign-in">
            <h2>Sign In</h2>
            <LoginForm history={props.history}/>
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    );

}

export default connect()(Login);
