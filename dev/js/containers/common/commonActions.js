
import axios from 'axios';
import { pushState } from 'redux-react-router';
import * as types from './commonActionTypes';
import * as config from './config';
import {httpRequest} from './commonAjaxActions'
import {db} from '../../index';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

function storeToken(_token){
	//In-memory only datastore (no need to load the database)

		var userInfo = { token: _token
	               };

	db.insert(userInfo, function (err, newDoc) {   // Callback is optional
			console.log("Token is stored into nedb,",newDoc);
	});


}
export function loginUserRequest() {
	  return {
	    type: types.LOGIN_USER_REQUEST
	  }
	}
	export function loginUserResponse(data) {
		  return {
		    type: types.LOGIN_USER_RESPONSE,
				 payload: data
		  }
		}

export function loginUser(username, password) {
	return function (dispatch,getState) {
		dispatch(loginUserRequest());
		var request = {
								url:config.getUrl('UserAuth'),
									method:'POST',
								data:{username, password},
								successCallback:loginUserResponse,
								failureCallback:loginUserResponse
							};
		return httpRequest(dispatch,getState,request);
	}
}

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
export function requestSearch(searchTerm) {
	var response={};
	response.data=Products.data;
	return function(dispatch) {
	dispatch(searchSuccess(response.data));
	}
}
export function searchSuccess(data){
	console.log("searchSuccess==",data);
	return{
		 type: types.SEARCH_REQUEST,
		 payload:data

	}
}
