import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import allReducers from './containers/common/allReducers';
import Login from './containers/Login/Login';
import Accounts from './containers/common/Accounts';
import Launchpad from './containers/common/Launchpad';
import Connections from './containers/common/Connections';
import Poc from './containers/common/POC';
import thunkMiddleware from 'redux-thunk';
import {compose, createStore, applyMiddleware } from 'redux';
import { routerStateReducer, reduxReactRouter } from 'redux-react-router';
import { Router, Route, hashHistory } from 'react-router'
import createHistory from 'history/lib/createBrowserHistory';

/* Configure Store for Redux */
const logger = createLogger();
const createAppStore = compose(
	applyMiddleware(thunkMiddleware),
	applyMiddleware(logger)
)(createStore);

export function configureStore(initialState){
	const store = createAppStore(allReducers, initialState);

	return store;
};
const store = configureStore();


/* Configure nedb for browser storage */

export const Datastore = require('nedb')
  , db = new Datastore();

/* Configure application routing */
ReactDOM.render(
    <Provider store={store}>
			<Router history={hashHistory}>
				{ /* Default Route */ }
				<Route path="/" component={Login}/>
				{ /* Routes */ }
				<Route path="launchpad" component={Launchpad}/>
				<Route path="poc" component={Poc}/>
				<Route path="accounts" component={Accounts}/>
				<Route path="connections" component={Connections}/>
			</Router>

    </Provider>,
    document.getElementById('root')
);
