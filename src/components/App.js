import React, { Component } from 'react';
import Header from './header';
import Navbar from './navbar';
import Home from './home';
import Dashboard from './dashboard';
import Login from './login';
import SignUp from './signup';

import '../App.css';
import logo from '../logo.svg';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Home />
      </div>
    );
  }
}


