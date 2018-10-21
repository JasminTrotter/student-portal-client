import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';

export class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}

	onSubmit() {

		const {username, password} = this.state;

        return this.props
        .dispatch(login(username, password))
        .then(() => this.props.history.push('/dashboard'));
        

    }


    render() {

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
		      <form className="signin-form" onSubmit={this.props.handleSubmit(() =>
	                    this.onSubmit()
	                )}>

		      		{loginFailMessage}
	                <Field
	                	className="signin-form-input"
	                    component={Input}
	                    type="text"
	                    name="username"
	                    label="Username"
	                    onChange={(event) => this.setState({ username: event.target.value})}
	             
	                />
		        	

	                <Field
	                	className="signin-form-input"
	                    component={Input}
	                    type="password"
	                    name="password"
	                    label="Password"
	                    onChange={(event) => this.setState({ password: event.target.value})}           
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