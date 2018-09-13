import React from 'react';

export default function PurchaseForm(props) {
	return (
		<section className="purchase-form">
      		<h4>Purchase a Package</h4>
		      <form>
		        <input id="8-class" type="radio"></input>
		        <label htmlFor="8-class">8 Classes - $120</label>
		        <input id="4-class" type="radio"></input>
		        <label htmlFor="4-class">4 Classes - $62</label>
		        <input id="2-class" type="radio"></input>
		        <label htmlFor="2-class">2 Classes - $32</label>
		        <input id="1-class" type="radio"></input>
		        <label htmlFor="1-class">Single Class - $18</label>
		        <button type="submit">Continue</button>
      		</form>
    	</section>
	);
}