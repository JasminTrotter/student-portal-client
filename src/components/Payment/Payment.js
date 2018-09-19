import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import CardSection from './CardSection'

class Payment extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();

		// Within the context of `Elements`, this call to createToken knows which Element to
	    // tokenize, since there's only one in this group.
	    this.props.stripe.createToken({name: 'Jasmin Trotter'})
	    	.then(({token}) => {
	    		console.log(this.props);
	      	//console.log('Received Stripe token:', token);
	      	   // For full documentation of the available paymentRequest options, see:
			    // https://stripe.com/docs/stripe.js#the-payment-request-object
			    const paymentRequest = this.props.stripe.paymentRequest({
			      country: 'US',
			      currency: 'usd',
			      total: {
			      label: 'Demo total',
			      amount: 1000,
			      },
			    });
			    paymentRequest.canMakePayment().then((result) => {
			      console.log(result);
			    });

	    });

	    // However, this line of code will do the same thing:
	    //
	    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});

	    // You can also use createSource to create Sources. See our Sources
	    // documentation for more: https://stripe.com/docs/stripe-js/reference#stripe-create-source
	    //
	    // this.props.stripe.createSource({type: 'card', name: 'Jenny Rosen'});
	};
	render() {
		console.log(this.props);
		return (
			<div>
				<h1>Payment Page</h1>
				<form onSubmit={this.handleSubmit}>
		        	<CardSection />
		        	<button>Confirm order</button>
		      	</form>
	      	</div>
		)
	}
}

//injectStripe gives us the prop stripe
export default injectStripe(Payment);