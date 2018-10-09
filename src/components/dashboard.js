import React from 'react';
import ProductSelectForm from './product-select-form';
import PurchaseHistory from './purchase-history';
import {connect} from 'react-redux';
import {saveAuthToken, clearAuthToken} from '../local-storage';
import {logout} from '../actions/auth'

const panelsStyles = {
	display: "flex",
	marginTop: "25px",
	
}

const panelStyle = {
	margin: "25px"
}

export function Dashboard(props) {

	return (
		<div className="dashboard">
			<button onClick={() => this.props.dispatch(logout())}>logout</button>
			<h3>Dashboard</h3>
			<div className="greeting">Hello {props.name}!</div>
			<div className="panels" style={panelsStyles}>
				<div className="panel" style={panelStyle}><ProductSelectForm /></div>
				<div className="panel" style={panelStyle}><PurchaseHistory /></div>
			</div>
		</div>
	);
}

//TODO: I want the user's first name to show in the greeting on Dashboard
const mapStateToProps = (state) => ({
	name: state.auth.currentUser.firstName
})

export default connect()(Dashboard);