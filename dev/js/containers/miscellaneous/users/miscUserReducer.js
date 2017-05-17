import * as types from './../../common/commonActionTypes';
export default function (state = {}, action = null) {
	console.log("in users reducer");
	switch(action.type) {
		case types.MISC_USERLIST_REQUEST:
			return Object.assign({}, state, {});
		case types.MISC_USERLIST_RESPONSE:
			if(action.payload.status==200){
					return Object.assign({}, state, {userList:action.payload.data,target:action.type});
			}
			else{
					return Object.assign({}, state, {userList:[],target:action.type});
			}

		case types.MISC_USERDETAILS_REQUEST:
			return Object.assign({}, state, {});
		case types.MISC_USERDETAILS_RESPONSE:
		console.log("MISC_USERDETAILS_RESPONSE==",action.payload);
			if(action.payload.status==200){
					return Object.assign({}, state, {userDetails:action.payload.data,target:action.type});
			}
			else{
					return Object.assign({}, state, {userDetails:null,target:action.type});
			}
		case types.MISC_UPDATE_USERDETAILS_REQUEST:
			return Object.assign({}, state, {});
		case types.MISC_UPDATE_USERDETAILS_RESPONSE:
		console.log("MISC_UPDATE_USERDETAILS_RESPONSE==",action.payload);
			return Object.assign({}, state, {userDetails:action.payload.data,target:action.type});

		default:
			return state;
	}
};
