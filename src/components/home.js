import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function home(props) {
	return (
		<div>
			<section>
      			<h3>About Us</h3>
      			<p><a href="https://www.balletbodybyjasmin.com" target="_blank">Ballet Body by Jasmin</a> is an adult ballet program for absolute beginners. Create an account <Link to='/signup'>here</Link> to purchase a class or a package of multiple classes. You will also be able to view a history of your purchases on your dashboard. See you in class!</p>
    		</section>
		</div>
	);
} 