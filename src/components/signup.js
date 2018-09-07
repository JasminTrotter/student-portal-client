import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function SignUp(props) {
	return (
		<div>
	      <h3>Sign Up</h3>
	      <form>
	        <label for="first-name">First Name</label>
	        <input required id="first-name" type="text">
	        </input>
	        <label for="last-name">Last Name</label>
	        <input required id="last-name" type="text">
	        </input>
	        <label for="email">Email</label>
	        <input required id="email" type="text">
	        </input>
	        <label for="password">Password</label>
	        <input required id="password" type="text">
	        </input>
	        <button type="submit">Submit</button>
	      </form>
	      <p>Already have an account? <Link to="/login">Log in</Link></p>
	    </div>
	);
}