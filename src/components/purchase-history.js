import React, {Component} from 'react';

export default class PurchaseHistory extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			package: '',
			date: '',
			paid: ''
		}
	}
	

	//if props is holding a recent purchase, we need to post that purchase to `/purchase-history`
	//then pull info from `/purchase-history/:userId`
	//render it in the component
	// if (props.classAmount !== '') {

	// }
	render() {
		return (
			<div className="purchase-history-div">
		      <h3 className="panel-header">Purchase History</h3>
		      <h5><span>Package</span> | <span>Amount Paid</span> | <span>Purchase Date</span></h5>
		      <ul className="purchase-history-list">
		        <li><span className="package">8 Classes</span> | <span className="date">9/1/18</span></li>
		        <li><span className="package">4 Classes</span> | <span className="date">8/1/18</span></li>
		      </ul>
	   		</div>
		);
	}
}