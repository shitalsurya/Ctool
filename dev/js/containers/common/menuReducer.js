import * as types from '../../containers/common/commonActionTypes';
export default function (state = {}, action = null) {
	console.log("in menu");
	//return Object.assign({}, state, {isLoading: true,menu:action.payload, error: false });
	switch(action.type) {
		case types.TOOLBOX_SEARCH:
			return Object.assign({}, state, {isLoading: true,menu:action.payload, error: false });
		case types.ACCOUNT_CREATE:
			return Object.assign({}, state, {isLoading: true,menu:action.payload, error: false });
		case types.MISC_USERS:
				return Object.assign({}, state, {isLoading: true,menu:action.payload, error: false });
				case types.ACCOUNT_MGMT:
						return Object.assign({}, state, {isLoading: true,menu:action.payload, error: false });
						case types.ACCOUNT_SETUP:
								return Object.assign({}, state, {isLoading: true,menu:action.payload, error: false });
		case types.ACCOUNT_SPND:
			return Object.assign({}, state, {isLoading: true, menu: action.payload, error: false});
		default:
			return state;
	}
};
