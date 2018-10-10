import React from 'react';
import ProductSelectForm from './product-select-form';
import PurchaseHistory from './purchase-history';
import {connect} from 'react-redux';
import {saveAuthToken, clearAuthToken} from '../local-storage';
import {logout} from '../actions/auth';
import {Link, Redirect} from 'react-router-dom';
import {pushPath} from 'react-router-redux';

const panelsStyles = {
	display: "flex",
	marginTop: "25px",
	
}

const panelStyle = {
	margin: "25px"
}

export function Dashboard(props) {
	console.log(props);
	console.log(logout);

	if(props.loggedIn == null) {
		return (<Redirect to={'/login'} />);
	}


	function logOut() {
		props.dispatch(logout);
		props.history.push('/');
    }
		
	

		return (
			<div className="dashboard">
				<button onClick={() => logOut()}>logout</button>
				<h3>Dashboard</h3>
				<div className="greeting">Hello {props.location.state.name}!</div>
				<div className="panels" style={panelsStyles}>
					<div className="panel" style={panelStyle}><ProductSelectForm /></div>
					<div className="panel" style={panelStyle}><PurchaseHistory /></div>
				</div>
			</div>
		);

}



export default connect()(Dashboard);