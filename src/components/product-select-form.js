import React from 'react';
import {setProduct} from '../actions/product-selection';
import {connect} from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {fetchProtectedData} from '../actions/protected-data';


export class ProductSelectForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		}
	}

	onSubmit(value) {
		this.props.dispatch(setProduct(this.state.value));

    }
    render() {

		return (
			<div className="product-select-form">
			  <h3 className="panel-header">Select a Package</h3>
		      <form onSubmit={this.props.handleSubmit(value =>
	                    this.onSubmit(value)
	                )}>
		      <fieldset>
		        	<div className="product-select-input">

		                <Field
		                	
		                    component="input"
		                    type="radio"
		                    name="price"
		                    label="8 Classes - $120"
		                    value={120}
		                    onChange={(event) => this.setState({ value: 120 })}
		                />
		                <label>8 Classes - $120</label>
	                </div>
	             	
	            
		        	<div className="product-select-input">
		                <Field
		                	
		                    component="input"
		                    type="radio"
		                    name="price"
		                    label="4 Classes - $62"
		                    value={62}
		                    onChange={(event) => this.setState({ value: 62 })}
		                />
	                <label>4 Classes - $62</label>
	                </div>

					<div className="product-select-input">
		                <Field
		                	
		                    component="input"
		                    type="radio"
		                    name="price"
		                    label="2 Classes - $32"
		                    value={32}
		                    onChange={(event) => this.setState({ value: 32 })}

		                />
	                <label>2 Classes - $32</label>
	                </div>

	                <div className="product-select-input">
		                <Field

		                    component="input"
		                    type="radio"
		                    name="price"
		                    label="1 Class - $18"
		                    value={18}
		                    onChange={(event) => this.setState({ value: 18 })}
		                />
		                <label>1 Class - $18</label>
	                </div>

		        <button type="submit">Submit</button>
		      </fieldset>
		      </form>
		    </div>
		);
	}
}

export default reduxForm({
    form: 'ProductSelectForm',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('ProductSelectForm', Object.keys(errors)[0]))
})(ProductSelectForm);