import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import LoginForm from './login-form';
import '../styles/login.css';
import Dashboard from './dashboard';

export default function Login() {
   const authToken = localStorage.getItem('authToken');

   if (authToken) {
   		return <Dashboard />
   	}
   	else {
	    return (
	        <div className="sign-in">
	            <h2>Sign In</h2>
	            <LoginForm />
	            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
	        </div>
	    );

		
	}

}

