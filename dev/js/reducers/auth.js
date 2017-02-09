import * as types from '../actions/actionTypes';
export default function (state = {
	isLoading: false,
	token:"",
	error: false}
, action = null) {
	switch(action.type) {
		case types.LOGIN_USER_REQUEST:
			return Object.assign({}, state, {isLoading: false,  error: true});
		case types.LOGIN_SUCCESS:
			
			console.log("action.data",  action.payload);
			return Object.assign({}, state, {isLoading: false,  token: action.payload.token, error: false });
		case types.LOGIN_FAILURE:
			return Object.assign({}, state, {isLoading: true, error: false });
		case types.TOOLBOX_SEARCH:
			return Object.assign({}, state, {isLoading: true,menu:action.payload, error: false });
		default:
			return state;
	}
};