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
import MiscCountry from './containers/miscellaneous/countries/MiscCntry';
import EditCountry from './containers/miscellaneous/countries/EditCountryModal';
import EditUser from './containers/miscellaneous/users/EditUserModal';
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
				<Route path="Accounts" component={AccountList}/>
				<Route path="AccountDetails" component={AccountDetails}/>
				<Route path="CreateAccount" component={CreateAccount}/>
				<Route path="ReactivateAccount" component={ReactivateAccount}/>
				<Route path="SuspendAccount" component={SuspendAccount}/>
				<Route path="CloseAccount" component={CloseAccount}/>
				<Route path="UserManagement" component={MiscUsers}/>
				<Route path="CountryManagement" component={MiscCountry}/>
				<Route path="connections" component={Connections}/>
				<Route path="editCountry" component={EditCountry}/>
				<Route path="editUser" component={EditUser}/>
			</Router>

    </Provider>,
    document.getElementById('root')
);
