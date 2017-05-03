import {combineReducers} from 'redux';
import routeReducer from './routeReducer';
import commonReducer from './commonReducer';
import authReducer from '../../containers/login/loginReducer';
import accountReducer from '../../containers/account/reducers/account.js';
import miscUsers from '../../containers/miscellaneous/users/miscUserReducer';
import miscCntry from '../../containers/miscellaneous/countries/miscCntryReducer';
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    Common: commonReducer,
    route: routeReducer,
    Auth: authReducer,
    Account:accountReducer,
    MiscUsers:miscUsers,
    MiscCntry:miscCntry
});

export default allReducers
