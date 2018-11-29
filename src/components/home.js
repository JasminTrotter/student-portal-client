import React from 'react';
import {connect} from 'react-redux';

export function Home(props) {
    console.log(props);
	return (


		<div className="homePage">
			<section className="about-us">
      			<h2>About Us</h2>
      			<p><a href="https://balletbodybyjasmin.herokuapp.com" target="_blank" rel="noopener noreferrer">Ballet Body by Jasmin</a> is an adult ballet program for absolute beginners. Create an account <a onClick={() => props.history.push('/signup')}>here</a> to purchase a class or a package of multiple classes. You will also be able to view a history of your purchases on your dashboard. See you in class!</p>
    		</section>
            <section className="demo-info">
              <h3>For a demo, use the login credentials...</h3>
              <p>username: <i>DemoUser</i></p>
              <p>password: <i>ballerinasRcool</i></p>
              <h4>To test credit card processing functionality, use card number:</h4>
                <p>4242 4242 4242 4242</p>
            </section>
    		
		</div>
	);
} 

export default connect()(Home);

