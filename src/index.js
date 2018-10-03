import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/App';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {StripeProvider} from 'react-stripe-elements';


ReactDOM.render(
	    <App />,
    document.getElementById('root')
);
registerServiceWorker();
