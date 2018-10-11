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
import {Provider} from 'react-redux';
import store from '../store';


import '../styles/App.css';



export default class App extends React.Component {

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
        <Provider store={store}>
          <StripeProvider apiKey="pk_test_5u4S86Ac7OpnSuMj107YWfpi">
            <Elements>
              <Router>
                <div className="App">
                  <Header />
                  
                  <main>
                    <div className="App-container">
                      <Route exact path="/" component={Home} />
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/signup" component={SignUp} />
                      <Route exact path="/dashboard" component={Dashboard} />
                      <Route exact path="/payment" component={Payment} />
                    </div>
                  </main>
                  <footer>
                    <p>built by Jasmin Trotter</p>
                  </footer>
                </div>
              </Router>
            </Elements>
          </StripeProvider>
        </Provider>
      );
    }
}


