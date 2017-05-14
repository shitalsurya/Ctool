import * as types from './../../common/commonActionTypes';
export default function (state = {}, action = null) {
	console.log("in users reducer");
	switch(action.type) {
		case types.MISC_USERLIST_REQUEST:
			return Object.assign({}, state, {});
		case types.MISC_USERLIST_RESPONSE:
			return Object.assign({}, state, {userList:action.payload,target:action.type});

		case types.MISC_USERDETAILS_REQUEST:
			return Object.assign({}, state, {});
		case types.MISC_USERDETAILS_RESPONSE:
			var _data={};
			if(typeof(action.payload)!='undefined'){
				_data = {
					details:action.payload
				}
			}
			else {
				_data = {
					details:"No data available."
				}
			}
			return Object.assign({}, state, {userDetails:_data,target:action.type});

		case types.MISC_UPDATE_USERDETAILS_REQUEST:
			return Object.assign({}, state, {});
		case types.MISC_UPDATE_USERDETAILS_RESPONSE:
			var _data={};
			if(typeof(action.payload)!='undefined'){
				_data = {
					details:action.payload
				}
			}
			else {
				_data = {
					details:"Failed to update user details."
				}
			}
			return Object.assign({}, state, {userDetails:_data,target:action.type});

		default:
			return state;
	}
};
