import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/auth';


export function Navbar(props) {

	if(props.authToken !== null) {

		return (
			<nav className="navbar">
				<a onClick={() => { 
					props.dispatch(logout);
					props.history.push('/');
					}}>Logout</a>
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