import React from 'react';

export default function Login(props) {
	return (
		<div>
	      <h3>Sign In</h3>
	      <form>
	        <label for="email">Email</label>
	        <input id="email" type="text">
	        </input>
	        <label for="password">Password</label>
	        <input id="password" type="text">
	        </input>
	        <button type="submit">Submit</button>
	      </form>
	      <p>Don't have an account? <a href="#">Sign up.</a></p>
	    </div>
	);
}