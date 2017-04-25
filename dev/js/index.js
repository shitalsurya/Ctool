import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import allReducers from './containers/common/allReducers';
import Login from './containers/Login/Login';
import Launchpad from './containers/common/Launchpad';
import Connections from './containers/common/Connections';
import AccountList from './containers/account/AccountList/AccountList';
import AccountDetails from './containers/account/AccountDetails/AccountDetails';
import CreateAccount from './containers/account/CreateAccount/CreateAccount';
import ReactivateAccount from './containers/account/ReactivateAccount';
import SuspendAccount from './containers/account/SuspendAccount';
import CloseAccount from './containers/account/CloseAccount';
import MiscUsers from './containers/miscellaneous/users/MiscUsers';
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
				<Route path="accounts" component={AccountList}/>
				<Route path="accountDetails" component={AccountDetails}/>
				<Route path="createAccount" component={CreateAccount}/>
				<Route path="reactivateAccount" component={ReactivateAccount}/>
				<Route path="suspendAccount" component={SuspendAccount}/>
				<Route path="closeAccount" component={CloseAccount}/>
				<Route path="miscUsers" component={MiscUsers}/>
				<Route path="connections" component={Connections}/>
			</Router>

    </Provider>,
    document.getElementById('root')
);
