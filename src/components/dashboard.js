import React from 'react';
import ProductSelectForm from './product-select-form';
import PurchaseHistory from './purchase-history';
import {connect} from 'react-redux';
import {saveAuthToken, clearAuthToken} from '../local-storage';
import {logout} from '../actions/auth';
import {Link, Redirect} from 'react-router-dom';


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

	// if(props.authToken == null) {
	// 	return (<Redirect to={'/login'} />);
	// }


	function logOut() {

		props.dispatch(logout);
		props.history.push('/');
    }
		
	

		return (
			<div className="dashboard">
				<div className="logout-div"><button className="logout-button" onClick={() => logOut()}>logout</button></div>
				<h2>Dashboard</h2>
				<div className="greeting">Hello!</div>
				<div className="panels" style={panelsStyles}>
					<div className="panel" style={panelStyle}><ProductSelectForm /></div>
					<div className="panel" style={panelStyle}><PurchaseHistory /></div>
				</div>
			</div>
		);

}

const mapStateToProps = state => {
    console.log(state);
    return {
    //authToken: state.auth.authToken,
    //name: state.auth.currentUser.name
    }
};

export default connect(mapStateToProps)(Dashboard);


//Hello {props.location.state.name}!