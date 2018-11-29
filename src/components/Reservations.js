import React from 'react';
import {connect} from 'react-redux';
import {setProduct, setClassAmount, setDollarAmount} from '../actions/product-selection';
import {removeClasses, removeAmountPaid, removePurchaseDate} from '../local-storage';

const {API_BASE_URL} = require('../config');

export class Reservations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
      		isLoaded: false,
      		items: []
		}
	}
	
	componentDidMount() {

		const {userId} = this.props;

		//retrieve data about reservation from local storage
		const paid = localStorage.getItem('amountPaid');
		const classes = localStorage.getItem('classes');
		const date = localStorage.getItem('purchaseDate');

		//if there is data from a purchase in local storage, 
		//POST it, then GET purchase history. 
		//if no data from a purchase, simply GET the history
		if (localStorage.getItem('classes') === null) {
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
		.then(removeClasses())
		.then(removePurchaseDate())
		.then(removeAmountPaid())
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
	        (items) => {
	          this.setState({
	            isLoaded: true,
	            items
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



