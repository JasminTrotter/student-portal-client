import React from 'react';

export default function PurchaseHistory(props) {

	return (
		<div>
	      <h4>Purchase History</h4>
	      <h5><span>Package</span> | <span>Purchase Date</span></h5>
	      <ul>
	        <li><span class="package">8 Classes</span> | <span class="date">9/1/18</span></li>
	        <li><span class="package">4 Classes</span> | <span class="date">8/1/18</span></li>
	      </ul>
   		</div>
	);
}