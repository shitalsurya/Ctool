import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import Login from './components/Login';
import About from './components/About';
import Dashboard from './components/Dashboard';
import dataService from './services/data-service'

import { Router, Route, hashHistory } from 'react-router'
const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
    <Router history={hashHistory}>
    	{ /* Default Route */ }
    	<Route path="/" component={Login}/>
    	 { /* Routes */ }
         <Route path="about" component={About}/>
         <Route path="dashboard" component={Dashboard}/>
    </Router>
    
    </Provider>,
    document.getElementById('root')
);
