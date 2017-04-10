import * as types from './../../common/commonActionTypes';
export default function (state = {}, action = null) {
	console.log("in inline edit reducer");
	//return Object.assign({}, state, {isLoading: true,menu:action.payload, error: false });
	switch(action.type) {
		case types.INLINE_EDIT_SET_VALUE:
			return Object.assign({}, state, {InlineObject:action.payload });
		default:
			return state;
	}
};
