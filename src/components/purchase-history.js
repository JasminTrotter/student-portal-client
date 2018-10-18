import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setProduct, setClassAmount, setDollarAmount} from '../actions/product-selection';

const {API_BASE_URL} = require('../config');

export class PurchaseHistory extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
      		isLoaded: false,
      		items: []
		}
	}
	
	componentDidMount() {

		const { userId, date } = this.props;
		const paid = this.props.dollarAmount;
		const classes = this.props.classAmount;


		if (this.props.classAmount === '') {
			this.getHistory(userId);
		}
		else {
			this.postPurchase(userId, paid, classes, date);
		}
	}

	postPurchase(userId, paid, classes, date) {

		const authToken = localStorage.getItem('authToken');

		fetch(`${API_BASE_URL}/purchase-history/`, {
	  			method: 'POST',
	  			headers: {
	    			'Accept': 'application/json',
	    			'Content-Type': 'application/json',
	    			'Authorization': `Bearer ${authToken}`
	  			},
				body: JSON.stringify({
    				userId: userId,
    				purchaseDate: date,
    				package: classes,
    				amountPaid: paid,
    				id: Math.random().toString()
  				})
		})
		.then(res => res.json())
		.then(this.props.dispatch(setProduct(0)))
		.then(this.props.dispatch(setClassAmount('')))
		.then(this.props.dispatch(setDollarAmount('')))
		.then(this.getHistory(userId));
	}

	
	getHistory(userId) {
		const authToken = localStorage.getItem('authToken');
		const request = new Request(`${API_BASE_URL}/purchase-history/${userId}`, {
			headers: new Headers({
    			'Content-Type': 'application/json',
    			'Authorization': `Bearer ${authToken}`
  			})
		})
		fetch(request)
	      .then(res => res.json())
	      .then(
	        (res) => {
	          this.setState({
	            isLoaded: true,
	            items: res
	          });
	        },
	        // Note: it's important to handle errors here
	        // instead of a catch() block so that we don't swallow
	        // exceptions from actual bugs in components.
	        (error) => {
	          this.setState({
	            isLoaded: true,
	            error
	          });
	        }
	      )
	}

	render() {
		const { error, isLoaded, items } = this.state;
		
		//trying to figure out why the key is not showing up in the `li` down below
		items.map(item => (console.log(item.id)))

	    if (error) {

	      return <div>Error: {error.message}</div>;

	    } 
	    else if (!isLoaded) {

	      return <div>Loading...</div>;

	    } 
	    else if (items.length === 0) {
			return (
				<div className="purchase-history-div">
		      		<h3 className="panel-header">Purchase History</h3>
		      		<div className="purchase-history-list">
			      		<p>A list of your purchases will appear here.</p>
			      		<p>Select a package to get started!</p> 
		      		</div>
	   			</div>
			);
		}
	    else {
	      return (
	      	<div className="purchase-history-div">
		 		<h3 className="panel-header">Purchase History</h3>
				<h5><span>Package</span> | <span>Amount Paid</span> | <span>Purchase Date</span></h5>

	        	<ul className="purchase-history-list">
		        	{items.map(item => (
			        	<li key={item.id}>
		              {item.package} | ${item.amountPaid} | {item.purchaseDate}
		            	</li>
	            	))}
	       		</ul>
	       	</div>
	      );

		}

	}
}

export default connect()(PurchaseHistory);
