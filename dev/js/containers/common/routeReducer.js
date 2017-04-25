import * as types from './commonActionTypes';
export default function (state = {}, action = null) {
	console.log("in route reducer");
	switch(action.type) {
		case  types.ACCOUNT_LIST :
			return Object.assign({}, state, {currentRoute:action.type});
			case  types.ACCOUNT_DETAILS :
				return Object.assign({}, state, {currentRoute:action.type});
	default:
			return state;
	}
};
