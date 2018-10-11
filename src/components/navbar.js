import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

export function Navbar(props) {

	if(props.authToken !== null) {
		console.log(props.authToken);
		return (
			<nav className="navbar">
			<Link to="/dashboard">My Account</Link> 
			<Link to="/">Home</Link> 
			    		
		</nav>
		)
	}
	return (
		
		<nav className="navbar">
			<Link to="/login">Login</Link> 
			<Link to="/">Home</Link> 
			    		
		</nav>
	);
}

const mapStateToProps = state => ({
	authToken: state.auth.authToken
})

export default connect(mapStateToProps)(Navbar)