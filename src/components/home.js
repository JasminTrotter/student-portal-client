import React from 'react';
const {CLIENT_ORIGIN} = require('../config');

export default function Home(props) {
	return (
		<div className="homePage">
			<section className="about-us">
      			<h2>About Us</h2>
      			<p><a href="https://www.balletbodybyjasmin.com" target="_blank">Ballet Body by Jasmin</a> is an adult ballet program for absolute beginners. Create an account <a href={`${CLIENT_ORIGIN}/signup`}>here</a> to purchase a class or a package of multiple classes. You will also be able to view a history of your purchases on your dashboard. See you in class!</p>
    		</section>
		</div>
	);
} 