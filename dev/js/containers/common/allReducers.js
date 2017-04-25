import {combineReducers} from 'redux';
import routeReducer from './routeReducer'
import authReducer from '../../containers/login/loginReducer';
import accountReducer from '../../containers/account/reducers/account.js';
import miscUsers from '../../containers/miscellaneous/users/miscUserReducer';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    route: routeReducer,
    Auth: authReducer,
    Account:accountReducer,
    MiscUsers:miscUsers
});

export default allReducers
