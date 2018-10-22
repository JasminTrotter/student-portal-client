import React from 'react';
import logo from '../styles/assets/square-logo.jpg';
import Navbar from './navbar';
import {connect} from 'react-redux'

export class Header extends React.Component {

	render() {

		return(
			<div className="header-div">
				<header className="App-header" role="banner">
		          	<img src={logo} className="App-logo" alt="logo" />
		          	<h1 className="App-title">Student Portal</h1>
		        </header>
		        <Navbar />
	        </div>
		);
	}
}

export default connect()(Header);