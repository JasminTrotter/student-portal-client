import React from 'react';
import {connect} from 'react-redux';
import {setProduct, setClassAmount, setDollarAmount, setDate} from '../actions/product-selection';
var moment = require('moment');


export class ProductSelectForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			dollarAmount: '',
			classAmount: '',
			date: new moment().format("MMM Do YYYY")
		}
	}

	onSubmit(value) {

		this.props.history.push('/payment');
		this.props.dispatch(setProduct(this.state.value));
		this.props.dispatch(setClassAmount(this.state.classAmount));
		this.props.dispatch(setDollarAmount(this.state.dollarAmount));
		this.props.dispatch(setDate(this.state.date));
		
    }
    render() {

		return (
			<div className="product-select-form">
			  <h3 className="panel-header">Select a Package</h3>
		      <form onSubmit={value =>
	                    this.onSubmit(value)
	                }>
		      <fieldset>
		        	<div className="product-select-input">
		        		<label>
		                <input
		                   	required={true}
		                    type="radio"
		                    name="price"
		                    label="8 Classes - $120"
		                    value={120}
		                    onChange={(event) => this.setState({ value: 12000, dollarAmount: '120', classAmount: '8 classes'})}
		                />
		                8 Classes - $120</label>
	                </div>
	             	
	            
		        	<div className="product-select-input">
		        		<label>
		                <input
		                	
		               		required={true}
		                    type="radio"
		                    name="price"
		                    label="4 Classes - $62"
		                    value={62}
		                    onChange={(event) => this.setState({ value: 6200, dollarAmount: '62', classAmount: '4 classes'})}
		                />
	                	4 Classes - $62</label>
	                </div>

					<div className="product-select-input">
						<label>
		                <input
		                	
		                  	required={true}
		                    type="radio"
		                    name="price"
		                    label="2 Classes - $32"
		                    value={32}
		                    onChange={(event) => this.setState({ value: 3200, dollarAmount: '32', classAmount: '2 classes'})}

		                />
	                	2 Classes - $32</label>
	                </div>

	                <div className="product-select-input">
	                	<label>
		                <input

		                 	required={true}
		                    type="radio"
		                    name="price"
		                    label="1 Class - $18"
		                    value={18}
		                    onChange={(event) => this.setState({ value: 1800, dollarAmount: '18', classAmount: '1 class' })}
		                />
		                1 Class - $18</label>
	                </div>

		        <button type="submit">Submit</button>
		      </fieldset>
		      </form>
		    </div>
		);
	}
}

export default connect()(ProductSelectForm);
