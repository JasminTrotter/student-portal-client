import React from 'react';
import ProductSelectForm from './product-select-form';
import PurchaseHistory from './purchase-history';
import {connect} from 'react-redux';
import {saveAuthToken, clearAuthToken} from '../local-storage';
import {logout} from '../actions/auth';
import {Link, Redirect} from 'react-router-dom';
import '../styles/dashboard.css';


export function Dashboard(props) {
	console.log(props);


		return (
			<div className="dashboard">
				<h2 className="dash-header">Dashboard</h2>
				<div className="greeting">Hello ! </div>
				<div className="panels" >
					<div className="panel" ><ProductSelectForm /></div>
					<div className="panel" ><PurchaseHistory /></div>
				</div>
			</div>
		);

}

const mapStateToProps = state => ({
		// user: state.auth.currentUser
})

export default connect(mapStateToProps)(Dashboard);

//{props.user.firstName}