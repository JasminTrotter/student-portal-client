import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import store from './store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {StripeProvider} from 'react-stripe-elements';


ReactDOM.render(
    <Provider store={store}>
    	<StripeProvider apiKey="pk_test_5u4S86Ac7OpnSuMj107YWfpi">
	        <Router>
	            <App />
	        </Router>
        </StripeProvider>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
