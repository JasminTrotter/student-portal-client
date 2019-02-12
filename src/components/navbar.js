import React from 'react';
import { Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/auth';


export class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false
		}
	}

	onClick(ev) { 
		
		this.props.dispatch(logout);

	}

	componentWillReceiveProps(nextProps, nexState) {
	
		if (this.props.authToken !== nextProps.authToken) {
			this.setState({loggedIn: !this.state.loggedIn})
		}
	}

	render() {

		if(this.state.loggedIn) {

			return (
				<nav className="navbar">
					<Link to="/" onClick={(ev) => this.onClick(ev)}>Logout</Link>
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