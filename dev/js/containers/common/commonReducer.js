import * as types from './commonActionTypes';
export default function (state = {}, action = null) {
	console.log("in route reducer");
	switch(action.type) {
		case  types.GET_COMPANY_LIST_REQUEST :
			return Object.assign({}, state, {});
		case  types.GET_COMPANY_LIST_RESPONSE :
			// console.log("GET_COMPANY_LIST_RESPONSE==",action.payload.data);
			return Object.assign({}, state, {compList:action.payload.data,target:action.type});
		case types.MISC_USERLIST_REQUEST:
			return Object.assign({}, state, {});
		case types.MISC_USERLIST_RESPONSE:
			return Object.assign({}, state, {userList:action.payload.data,target:action.type});
		case types.MISC_COUNTRYLIST_REQUEST:
			return Object.assign({}, state, {});
		case types.MISC_COUNTRYLIST_RESPONSE:
			return Object.assign({}, state, {countryList:action.payload.data,target:action.type});
		case types.GET_EX_CONTACT_LIST_REQUEST:
			return Object.assign({}, state, {});
		case types.GET_EX_CONTACT_LIST_RESPONSE:
			console.log("GET_EX_CONTACT_LIST_RESPONSE==",action.payload.data);
			return Object.assign({}, state, {exContactList:action.payload.data,target:action.type});
		case types.MISC_ACCOUNT_LIST_REQUEST:
			return Object.assign({}, state, {});
		case types.MISC_ACCOUNT_LIST_RESPONSE:
			return Object.assign({}, state, {acctList:action.payload,target:action.type});
		default:
			return state;
	}
};
