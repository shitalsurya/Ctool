import * as types from './../../common/commonActionTypes';
export default function (state = {}, action = null) {
	console.log("in users reducer");
	switch(action.type) {
		case types.MISC_USERLIST_REQUEST:
			return Object.assign({}, state, {});
		case types.MISC_USERLIST_RESPONSE:
			return Object.assign({}, state, {userList:action.payload.data,target:action.type});
			case types.MISC_USERDETAILS_REQUEST:
				return Object.assign({}, state, {});
			case types.MISC_USERDETAILS_RESPONSE:
				var _data={};
				if(typeof(action.payload)!='undefined'){
					_data = {
						details:action.payload,
						showEditModal: true
					}
				}
				else {
					_data = {
						details:"No data available.",
						showEditModal: false
					}
				}
				return Object.assign({}, state, {userDetails:_data,target:action.type});
				case types.MISC_UPDATE_USERDETAILS_REQUEST:
					return Object.assign({}, state, {});
				case types.MISC_UPDATE_USERDETAILS_RESPONSE:
					var _data={};
					if(typeof(action.payload)!='undefined'){
						_data = {
							details:action.payload,
							showEditModal: false
						}
					}
					else {
						_data = {
							details:"Failed to update user details.",
							showEditModal: true
						}
					}
					return Object.assign({}, state, {userDetails:_data,target:action.type});

		default:
			return state;
	}
};
