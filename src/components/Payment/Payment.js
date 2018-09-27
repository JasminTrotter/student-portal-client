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
                // console.log(token);

                    const paymentRequest = this.props.stripe.paymentRequest({
                        country: 'US',
                        currency: 'usd',
                        total: {
                            label: 'Demo total',
                            amount: 1000,
                        },
                    });

                    paymentRequest.on('token', ({complete, token, ...data}) => {
                        console.log('Received Stripe token: ', token);
                        console.log('Received customer information: ', data);
                        complete('success');
                    });

                    paymentRequest.canMakePayment().then((result) => {
                        console.log('Result', result);
                    });

        });

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