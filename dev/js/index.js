import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import allReducers from './containers/common/allReducers';
import Login from './containers/Login/Login';
import ForgotPassword from './containers/Login/ForgotPassword';
import Launchpad from './containers/common/Launchpad';
import Connections from './containers/common/Connections';
import AccountList from './containers/account/AccountList/AccountList';
import AccountDetails from './containers/account/AccountDetails/AccountDetails';
import CreateAccount from './containers/account/CreateAccount/CreateAccount';
import AccountType from './containers/account/CreateAccount/AccountType';
import MiscUsers from './containers/miscellaneous/users/MiscUsers';
import MiscCountry from './containers/miscellaneous/countries/MiscCntry';
import EditCountry from './containers/miscellaneous/countries/EditCountryModal';
import EditUser from './containers/miscellaneous/users/EditUserModal';
import ResetPassword from './containers/miscellaneous/resetPassword/ResetPassword';
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
				<Route path="ForgotPassword" component={ForgotPassword}/>
				<Route onEnter={authenticateFunc} path="launchpad" component={Launchpad}/>
				<Route path="poc" component={Poc}/>
				<Route onEnter={authenticateFunc} path="Accounts" component={AccountList}/>
				<Route path="AccountDetails" component={AccountDetails}/>
				<Route onEnter={authenticateFunc} path="CreateAccount" component={CreateAccount}/>
				<Route onEnter={authenticateFunc} path="AccountType" component={AccountType}/>
				<Route onEnter={authenticateFunc} path="UserManagement" component={MiscUsers}/>
				<Route onEnter={authenticateFunc} path="CountryManagement" component={MiscCountry}/>
				<Route onEnter={authenticateFunc} path="ResetPassword" component={ResetPassword}/>
				<Route onEnter={authenticateFunc} path="connections" component={Connections}/>
				<Route path="editCountry" component={EditCountry}/>
				<Route path="editUser" component={EditUser}/>
			</Router>
    </Provider>,
    document.getElementById('root')
);

function authenticateFunc(transition, replace){
	if(sessionStorage.token == null){
		replace("/");
	}
}
