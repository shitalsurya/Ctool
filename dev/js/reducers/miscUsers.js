import * as types from '../actions/actionTypes';
export default function (state = {}, action = null) {
	switch(action.type) {
		case types.MISC_USERLIST_REQUEST:
			return Object.assign({}, state, {});
		case types.MISC_USERLIST_RESPONSE:
			console.log("MISC_USERLIST_RESPONSE==",action.payload.data);
			return Object.assign({}, state, {data:action.payload.data});
		default:
			return state;
	}
};
