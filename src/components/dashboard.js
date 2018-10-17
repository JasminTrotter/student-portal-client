import React from 'react';
import ProductSelectForm from './product-select-form';
import PurchaseHistory from './purchase-history';
import {connect} from 'react-redux';
import '../styles/dashboard.css';


export function Dashboard(props) {

		return (
			<div className="dashboard">
				<h2 className="dash-header">Dashboard</h2>
				<div className="greeting">Hello {props.user.firstName}! </div>
				<div className="panels" >
					<div className="panel" ><ProductSelectForm history={props.history}/></div>
					<div className="panel" ><PurchaseHistory userId={props.user.id} classAmount={props.setProduct.classAmount} dollarAmount={props.setProduct.dollarAmount} date={props.setProduct.date}/></div>
				</div>
			</div>
		);

}

const mapStateToProps = state => ({

	user: state.auth.currentUser,
	setProduct: state.setProduct

})

export default connect(mapStateToProps)(Dashboard);



