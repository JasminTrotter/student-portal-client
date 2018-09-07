import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function Navbar(props) {

	return (
		
		<nav className="navbar">

			<Link to="/">Home</Link>
      		<Link to="/login">Login/Signup</Link>     
      		<Link to="/dashboard">Dashboard</Link>
		</nav>
	);
}