import React from 'react';
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
	    	<div>
	        <section className="sign-in">
	            <h2>Sign In</h2>
	            <LoginForm />
	            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>

	        </section>
	        <section className="demo-info">
    			<h3>For a demo, use the login credentials...</h3>
    			<p>username: <i>DemoUser</i></p>
    			<p>password: <i>ballerinasRcool</i></p>
    		</section>
	        </div>
	    );

		
	}

}

