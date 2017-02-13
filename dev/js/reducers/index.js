import {combineReducers} from 'redux';
import authReducer from './auth';
import accountReducer from './account';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    Auth: authReducer,
    Account:accountReducer
});

export default allReducers
