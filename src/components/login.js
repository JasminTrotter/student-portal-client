import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {fetchProtectedData} from '../actions/protected-data';


export class Login extends React.Component {
	onSubmit(values) {
        const {username, password} = values;
        return this.props
        .dispatch(login(username, password))
        .then(() => this.props.dispatch(fetchProtectedData()));
    }
    render() {
		return (
			<div>
		      <h3>Sign In</h3>
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
	                />
		        <button type="submit">Submit</button>
		      </form>
		      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
		    </div>
		);
	}
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('login', Object.keys(errors)[0]))
})(Login);