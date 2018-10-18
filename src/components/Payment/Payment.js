import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import {API_BASE_URL} from '../../config';
import {connect } from 'react-redux';
import {saveClasses, saveAmountPaid, savePurchaseDate} from '../../local-storage';
var moment = require('moment');

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

 	async submit(ev) {
    console.log(this.props);
	  let {token} = await this.props.stripe.createToken({name: "Name"});
    let product = this.props.value;
    let description = this.props.classes;
    console.log(token);
	  let response = await fetch(`${API_BASE_URL}/charge`, {
	    method: "POST",
	    headers: {'Content-Type': 'application/json'},
	    body: JSON.stringify({ 
        token: token.id,
        product: product,
        description: description
        })
  		});
    console.log(response);

  		if (response.ok) this.setState({complete: true});

      saveClasses(this.props.classes);
      saveAmountPaid(this.props.dollars);
      let date = new moment().format("MMM Do YYYY");
      savePurchaseDate(date);
      this.props.history.push('/dashboard');
      
	}

  render() {

    return (
      <div className="checkout">
        <p>Enter card number to make your purchase of {this.props.classes} for ${this.props.dollars}</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
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

 