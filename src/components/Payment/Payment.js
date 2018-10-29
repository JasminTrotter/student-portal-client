import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import {API_BASE_URL} from '../../config';
import {connect } from 'react-redux';
import {saveClasses, saveAmountPaid, savePurchaseDate} from '../../local-storage';
import Home from '../home';
var moment = require('moment');

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

 	async submit(ev) {

	  let {token} = await this.props.stripe.createToken({name: "Name"});
    let product = this.props.value;
    let description = this.props.classes;

	  let response = await fetch(`${API_BASE_URL}/charge`, {
	    method: "POST",
	    headers: {'Content-Type': 'application/json'},
	    body: JSON.stringify({ 
        token: token.id,
        product: product,
        description: description
        })
  		});

  		if (response.ok) this.setState({complete: true});

      //save props to local storage after credit card runs, 
      //so we can from there POST it to purchase-history
      saveClasses(this.props.classes);
      saveAmountPaid(this.props.dollars);
      let date = new moment().format("MMM Do YYYY");
      savePurchaseDate(date);

      this.props.history.push('/dashboard');
      
	}

  render() {
    const authToken = localStorage.getItem('authToken');

    if(!authToken) {
      return <Home />
    }

    return (
      <div className="checkout">
        <p>Enter card number to make your purchase of {this.props.classes} for ${this.props.dollars}</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>

        <div className="demo-info">
          <h4>To test credit card processing functionality, use card number:</h4>
          <p>4242 4242 4242 4242</p>
          <h4>(enter any number for exp and CVC fields)</h4>
        </div>
      </div>
    );
  }
}

const stripeComponent = injectStripe(Payment);

const mapStateToProps = (state) => ({
  value: state.setProduct.product,
  classes: state.setProduct.classAmount,
  dollars: state.setProduct.dollarAmount

})

export default connect(mapStateToProps)(stripeComponent)

 