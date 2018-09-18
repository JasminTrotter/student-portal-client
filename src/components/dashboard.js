import React from 'react';
import PurchaseForm from './purchase-form';
import PurchaseHistory from './purchase-history';
import {clearAuth} from '../actions/auth';
import {connect} from 'react-redux';


export function Dashboard(props) {
	return (
		<div className="dashboard">
			<button className="logout" onClick={() => props.dispatch(clearAuth())}>logout</button>
			<h3>Dashboard</h3>
			<div className="greeting">Hello {props.name}!</div>
			<PurchaseForm />
			<PurchaseHistory />
		</div>
	);
}

export default connect()(Dashboard);