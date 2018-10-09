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
			<div>
			  <h2>Select a Package</h2>
		      <form onSubmit={this.props.handleSubmit(value =>
	                    this.onSubmit(value)
	                )}>
		        <label htmlFor="8-classes">8 Classes - $120</label>
	                <Field
	                    component={Input}
	                    type="radio"
	                    name="8-classes"

	                />
		        <label htmlFor="4-classes">4 Classes - $62</label>
	                <Field
	                    component={Input}
	                    type="radio"
	                    name="4-classes"

	                />
	             <label htmlFor="2-classes">2 Classes - $32</label>
	                <Field
	                    component={Input}
	                    type="radio"
	                    name="2-classes"

	                />
	              <label htmlFor="1-class">1 Class - $18</label>
	                <Field
	                    component={Input}
	                    type="radio"
	                    name="1-class"
	                />
		        <button type="submit">Submit</button>
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