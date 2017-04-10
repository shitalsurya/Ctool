import * as types from './../../common/commonActionTypes';
import axios from 'axios';

export function setInlineEditValue(_obj){
	return function(dispatch){
		dispatch(setInlineEditValueRequest(_obj))
	}
}
export function setInlineEditValueRequest(_obj){
	return{
		  type: types.INLINE_EDIT_SET_VALUE,
			payload:_obj
	}
}
