import * as types from '../actions/actionTypes';
export default function (state = {}, action = null) {
	switch(action.type) {
		case types.LOGIN_USER_REQUEST:
			return Object.assign({}, state, {});
		case types.LOGIN_USER_RESPONSE:
			console.log("action.payload==",action.payload);
			var _error,_token;
				if (action.payload.response){
					if (action.payload.response.status==403) {
						 _error= true;
						 _token="";
					}
				}
			else if(action.payload.status==200){
				 _error= false;
				 _token=action.payload.data.token;
			}
			return Object.assign({}, state, {token:_token, error: _error });
		case types.TOOLBOX_SEARCH:
			return Object.assign({}, state, {isLoading: true,menu:action.payload, error: false });
		case types.SEARCH_REQUEST:
			return Object.assign({}, state, {isLoading: true,data:action.payload, error: false });
		case types.ACCOUNT_CREATE:
			return Object.assign({}, state, {isLoading: true,menu:action.payload, error: false });
		default:
			return state;
	}
};
