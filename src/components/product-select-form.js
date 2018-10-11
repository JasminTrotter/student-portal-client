import React from 'react';
import {setProduct} from '../actions/product-selection';
import {connect} from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {fetchProtectedData} from '../actions/protected-data';

export class ProductSelectForm extends React.Component {

	onSubmit(value) {

        console.log(value)
    }
    render() {
		return (
			<div className="product-select-form panel">
			  <h3 className="panel-header">Select a Package</h3>
		      <form onSubmit={this.props.handleSubmit(value =>
	                    this.onSubmit(value)
	                )}>
		      <fieldset>
		        	<div className="product-select-input">
	                <Field
	                	
	                    component={Input}
	                    type="radio"
	                    name="8-classes"
	                    label="8 Classes - $120"
	                    value={120}
	                />
	                </div>
	             	
	            
		        	<div className="product-select-input">
	                <Field
	                	
	                    component={Input}
	                    type="radio"
	                    name="4-classes"
	                    label="4 Classes - $62"
	                    value={62}
	                />
	                </div>
					<div className="product-select-input">
	                <Field
	                	
	                    component={Input}
	                    type="radio"
	                    name="2-classes"
	                    label="2 Classes - $32"
	                    value={32}

	                />
	                </div>
	                <div className="product-select-input">
	                <Field

	                    component={Input}
	                    type="radio"
	                    name="1-class"
	                    label="1 Class - $18"
	                    value={18}
	                />
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