import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import Login from './components/Login';
import About from './components/About';
import Dashboard from './components/Dashboard';
import thunkMiddleware from 'redux-thunk';
import {compose, createStore, applyMiddleware } from 'redux';
import { routerStateReducer, reduxReactRouter } from 'redux-react-router';
import { Router, Route, hashHistory } from 'react-router'
import createHistory from 'history/lib/createBrowserHistory';

const logger = createLogger();
const createAppStore = compose(
	applyMiddleware(thunkMiddleware),
	applyMiddleware(logger)
	//reduxReactRouter({createHistory})
)(createStore);

export default function configureStore(initialState){
	const store = createAppStore(allReducers, initialState);

	return store;
};
const store = configureStore();
//
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
