
import axios from 'axios';
import { pushState } from 'redux-react-router';
import * as types from './commonActionTypes';
import * as config from './config';
import {httpRequest} from './commonAjaxActions'

export function navigateMenus(menu) {
	return function(dispatch) {
		dispatch(navigateMenusRequest(menu));

	}
}
export function navigateMenusRequest(menu){
	return {
			type: menu,
			payload: menu
		}

}
