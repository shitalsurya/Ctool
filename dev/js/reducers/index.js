import {combineReducers} from 'redux';
import authReducer from './auth';
import accountReducer from './account';
import menuReducer from './menu';
import miscUsers from './miscUsers';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    Auth: authReducer,
    Account:accountReducer,
    Menu:menuReducer,
    MiscUsers:miscUsers

});

export default allReducers
