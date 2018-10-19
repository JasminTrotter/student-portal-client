import React from 'react';
import {connect} from 'react-redux';
import logo from '../styles/assets/square-logo.jpg';
import Navbar from './navbar';

export function Header(props) {
	console.log(props);
	return(
		<div className="header-div">
			<header className="App-header" role="banner">
	          	<img src={logo} className="App-logo" alt="logo" />
	          	<h1 className="App-title">Student Portal</h1>
	        </header>
	        <Navbar history={props.history}/>
        </div>
	);
}

export default connect()(Header);