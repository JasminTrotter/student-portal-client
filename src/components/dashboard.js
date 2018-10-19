import React from 'react';
import ProductSelectForm from './product-select-form';
import PurchaseHistory from './purchase-history';
import {connect} from 'react-redux';
import '../styles/dashboard.css';
import Login from './login';


export class Dashboard extends React.Component {

render() {
	const firstName = localStorage.getItem('firstName');
	const userId = localStorage.getItem('userId');
	const authToken = localStorage.getItem('authToken');
		if(authToken) {

			return (

				<div className="dashboard">
					<h2 className="dash-header">Dashboard</h2>
					<div className="greeting">Hello {firstName}! </div>
					<div className="panels" >
						<div className="panel" ><ProductSelectForm history={this.props.history}/></div>
						<div className="panel" ><PurchaseHistory userId={userId} classAmount={this.props.setProduct.classAmount} dollarAmount={this.props.setProduct.dollarAmount} date={this.props.setProduct.date}/></div>
					</div>
				</div>
			);
		}
		else {
			return <Login />
		}
	}
}

const mapStateToProps = state => ({
	user: state.auth.currentUser,
	setProduct: state.setProduct
})

export default connect(mapStateToProps)(Dashboard);




