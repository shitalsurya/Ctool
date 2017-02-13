import * as types from '../actions/actionTypes';
export default function (state = {
	data:""
}
, action = null) {
	switch(action.type) {
		case types.ACCOUNT_MGR_CHANAGE:
			console.log("ACCOUNT_MGR_CHANAGE==",action.payload);
			return Object.assign({}, state, {target:action.type,data:action.payload });
		case types.ACCOUNT_COMPANY_CHANAGE:
			console.log("ACCOUNT_COMPANY_CHANAGE==",action.payload);
			return Object.assign({}, state, {target:action.type,data:action.payload });
		default:
			return state;
	}
};