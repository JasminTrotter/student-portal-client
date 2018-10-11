import React from 'react';

export default function PurchaseHistory(props) {

	return (
		<div className="panel">
	      <h3 className="panel-header">Purchase History</h3>
	      <h5><span>Package</span> | <span>Purchase Date</span></h5>
	      <ul className="purchase-history-list">
	        <li><span className="package">8 Classes</span> | <span className="date">9/1/18</span></li>
	        <li><span className="package">4 Classes</span> | <span className="date">8/1/18</span></li>
	      </ul>
   		</div>
	);
}