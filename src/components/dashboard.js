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
				<div className=""><button  onClick={() => { 
					console.log('onclick ran');
					props.dispatch(logout);
					props.history.push('/');
				}}>logout</button></div>
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