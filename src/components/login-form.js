import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';

export class LoginForm extends React.Component {


	onSubmit(values) {

		const {username, password} = values;
        return this.props
        .dispatch(login(username, password))
        .then(() => window.location.reload())
        .then(() => this.props.history.push('/dashboard'));
        

    }


    render() {
console.log(this.props);
    	let loginFailMessage;
    	let loadingMessage;

		//get message from props in reducer if user fails to post

    	if (this.props.error) {
      		loginFailMessage = <div className="form-error">{this.props.error}</div>
    	}
    	else if (this.props.submitting) {
    		loadingMessage = <div className="form-success">Loading your account...</div>
    	}	

		return (


			<div>
		      <form className="signin-form" onSubmit={this.props.handleSubmit(values =>
	                    this.onSubmit(values)
	                )}>

		      		{loginFailMessage}
	                <Field
	                	className="signin-form-input"
	                    component={Input}
	                    type="text"
	                    name="username"
	                    label="Username"
	             
	                />
		        	

	                <Field
	                	className="signin-form-input"
	                    component={Input}
	                    type="password"
	                    name="password"
	                    label="Password"
	                                   
            		/>
		        <button type="submit">Submit</button>
		        {loadingMessage}
		      </form>
		    </div>

		);
	}
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('login', Object.keys(errors)[0]))
})(LoginForm);