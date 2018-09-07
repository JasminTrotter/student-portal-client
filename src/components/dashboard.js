import React from 'react';
import PurchaseForm from './purchase-form';
import PurchaseHistory from './purchase-history';


export default function Dashboard(props) {
	return (
		<div className="dashboard">
			<h3>Dashboard</h3>
			<PurchaseForm />
			<PurchaseHistory />
		</div>
	);
}