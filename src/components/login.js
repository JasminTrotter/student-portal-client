import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function Login(props) {
	return (
		<div>
	      <h3>Sign In</h3>
	      <form>
	        <label htmlFor="email">Email</label>
	        <input id="email" type="text">
	        </input>
	        <label htmlFor="password">Password</label>
	        <input id="password" type="text">
	        </input>
	        <button type="submit">Submit</button>
	      </form>
	      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
	    </div>
	);
}