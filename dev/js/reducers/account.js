import * as types from '../actions/actionTypes';
export default function (state = {
	data:""
}
, action = null) {
	switch(action.type) {
		case types.ACCOUNT_MGR_CHANAGE:
		case types.ACCOUNT_COMPANY_CHANAGE:
		case types.ACCOUNT_COMPANY_CONTACT:
		case types.ACCOUNT_COUNTRY_CHANGE:
			return Object.assign({}, state, {target:action.type,data:action.payload });
		case types.ACCOUNT_NEXT:
			return Object.assign({}, state, {target:action.type });
		default:
			return state;
	}
};