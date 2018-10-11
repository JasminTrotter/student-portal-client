import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function Navbar(props) {

	return (
		
		<nav className="navbar">
			<Link to="/dashboard">My Account</Link> 
			<Link to="/">Home</Link> 
			    		
		</nav>
	);
}