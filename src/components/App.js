import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './header';
import Navbar from './navbar';
import Home from './home';
import Dashboard from './dashboard';
import Login from './login';
import SignUp from './signup';
import {refreshAuthToken} from '../actions/auth';
import {StripeProvider} from 'react-stripe-elements';
import Payment from './Payment/Payment';
import {Elements} from 'react-stripe-elements';


import '../App.css';



export default class App extends React.Component {
  //stripe 
  constructor() {
    super();
    this.state = {stripe: null, product: null};
  }
    componentDidMount() {
    if (window.Stripe) {
      this.setState({stripe: window.Stripe('pk_test_5u4S86Ac7OpnSuMj107YWfpi')});
    } else {
      document.querySelector('#stripe-js').addEventListener('load', () => {
        // Create Stripe instance once Stripe.js loads
        this.setState({stripe: window.Stripe('pk_test_5u4S86Ac7OpnSuMj107YWfpi')});
      });
    }
  }

  //if logged in
  componentDidUpdate(prevProps) {
      if (!prevProps.loggedIn && this.props.loggedIn) {
          // When we are logged in, refresh the auth token periodically
           this.startPeriodicRefresh();
      } else if (prevProps.loggedIn && !this.props.loggedIn) {
          // Stop refreshing when we log out
           this.stopPeriodicRefresh();
      }
   }

   componentWillUnmount() {
      this.stopPeriodicRefresh();
   }

   startPeriodicRefresh() {
      this.refreshInterval = setInterval(
           () => this.props.dispatch(refreshAuthToken()),
           60 * 60 * 1000 // One hour
       );
    }

    stopPeriodicRefresh() {
       if (!this.refreshInterval) {
           return;
       }
       clearInterval(this.refreshInterval);
   }

    render() {


      return (
        <Elements>
          <Router>
            <div className="App">
              <Header />
              <Navbar />
              <main>
              
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/payment" component={Payment} />
              </main>
            </div>
          </Router>
        </Elements>
      );
    }
}


