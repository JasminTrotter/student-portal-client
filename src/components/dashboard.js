import React from 'react';
import ProductSelectForm from './product-select-form';
import PurchaseHistory from './purchase-history';
import {connect} from 'react-redux';
import '../styles/dashboard.css';
import Login from './login';


export class Dashboard extends React.Component {

	render() {

		//to greet the user by their first name
		const firstName = localStorage.getItem('firstName');

		const userId = localStorage.getItem('userId');
		const authToken = localStorage.getItem('authToken');

		//render the dashboard if user is logged in. Otherwise, render the login component
			if(authToken) {

				return (

					<div className="dashboard">
						<h2 className="dash-header">Dashboard</h2>
						<div className="greeting">Hello {firstName}! </div>
						<div className="panels" >
							<div className="panel" ><ProductSelectForm history={this.props.history}/></div>
							<div className="panel" ><PurchaseHistory userId={userId} /></div>
						</div>
					</div>
				);
			}
			else {
				return <Login />
			}
	}
}


export default connect()(Dashboard);




