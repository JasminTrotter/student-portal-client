import React, {Component} from 'react';
const {API_BASE_URL} = require('../config');

export default class PurchaseHistory extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			error: null,
      		isLoaded: false,
      		items: []
		}
	}
	
	componentDidMount() {
		const userId = this.props.userId;
		const paid = this.props.dollarAmount;
		const classes = this.props.classesAmount;
		const date = this.props.date;


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
    				package: classes,
    				purchaseDate: date,
    				amountPaid: paid
  				})
		})
		.then(res => res.json())
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
	        (result) => {
	          this.setState({
	            isLoaded: true,
	            items: result
	          });
	          console.log(result);
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
		console.log(this.state.items);
		const items = this.state.items;
		if(items.length === 0) {
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
			        <li><span className="package">8 Classes</span> | <span className="date">9/1/18</span></li>
			        <li><span className="package">4 Classes</span> | <span className="date">8/1/18</span></li>
			      </ul>
		   		</div>
			);
		}
	}
}