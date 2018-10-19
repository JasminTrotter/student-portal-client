import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/auth';
import { Redirect } from 'react-router-dom'


export class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	onClick() { 
		

		this.props.dispatch(logout);
		this.setState({authToken: null});
		window.location.reload();

	}

	render() {
		console.log(this.props);
		if(this.props.authToken !== null && localStorage.getItem('authToken') !== null) {

			return (
				<nav className="navbar">
					<a onClick={() => this.onClick()}>Logout</a>
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
}

const mapStateToProps = state => ({
	authToken: state.auth.authToken
})

export default connect(mapStateToProps)(Navbar);