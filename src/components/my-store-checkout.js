import React from 'react';

import {Elements} from 'react-stripe-elements';

import InjectedCheckoutForm from './injected-checkout-form';

class MyStoreCheckout extends React.Component {
  render() {
    return (
      <Elements>
        <InjectedCheckoutForm />
      </Elements>
    );
  }
}

export default MyStoreCheckout;