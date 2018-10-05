import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {fetchProtectedData} from '../actions/protected-data';


export class LoginForm extends React.Component {

	onSubmit(values) {
        const {username, password} = values;
        return this.props
        .dispatch(login(username, password))
        .then(() => this.props.dispatch(fetchProtectedData()));
    }
    render() {
		return (
			<div>
		      <form onSubmit={this.props.handleSubmit(values =>
	                    this.onSubmit(values)
	                )}>
		        <label htmlFor="username">Username</label>
	                <Field
	                    component={Input}
	                    type="text"
	                    name="username"
	                />
		        <label htmlFor="password">Password</label>
	                <Field
	                    component={Input}
	                    type="password"
	                    name="password"
	                    style={{backgroundColor:"white !important"}}
	                />
		        <button type="submit">Submit</button>
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