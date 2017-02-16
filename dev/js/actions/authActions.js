
import axios from 'axios';
import { pushState } from 'redux-react-router';
import * as types from '../actions/actionTypes';
import Products from '../../json/Products.json';
import * as config from '../config.js';
import {httpRequest} from '../actions/httpActions'

//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export function loginUserRequest() {
	  return {
	    type: types.LOGIN_USER_REQUEST
	  }
	}
export function loginSuccess(data) {
	localStorage.setItem("token",data.token);
	  return {
	    type: types.LOGIN_SUCCESS,
	    payload: data
	  }
}
export function loginFailure(data) {
	  return {
	    type: types.LOGIN_FAILURE,
	    payload: data
	  }
	}

export function loginUser(username, password) {
	return function (dispatch) {
		dispatch(loginUserRequest());
		var request = {
								url:config.getUrl('UserAuth'),
									method:'POST',
								data:{username, password},
								successCallback:loginSuccess,
								failureCallback:loginFailure
							};
		return httpRequest(dispatch,request);
	}
}

export function navigateMenus(menu) {
	return function(dispatch) {
		dispatch(navigateMenusRequest(menu));

	}
}
export function navigateMenusRequest(menu){
	switch(menu){
	case types.TOOLBOX_SEARCH:
			return {
			    type:types.TOOLBOX_SEARCH,
			    payload: types.TOOLBOX_SEARCH
			  }
		break;
	case types.ACCOUNT_CREATE:
		return {
		    type:types.ACCOUNT_CREATE,
		    payload: types.ACCOUNT_CREATE
		  }
		break;

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
