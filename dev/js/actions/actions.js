
import axios from 'axios';
import { pushState } from 'redux-react-router';
import * as types from '../actions/actionTypes';
import Products from '../../json/Products.json';
import * as config from '../config.js';
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

export function loginUser(email, password) {
	var response={};
		response.data = {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlRlc3QgVXNlciJ9.J6n4-v0I85zk9MkxBHroZ9ZPZEES-IKeul9ozxYnoZ8"};
	return function(dispatch) {
	dispatch(loginSuccess(response.data));
	}
	//Uncomment below code for http request
	/*return function(dispatch) {
		dispatch(loginUserRequest());
		return axios.post(config.getUrl('UserAuth'), {
			email:email,password:password
			//email: "abc@test.com", password: "abc"
		  })
			.then(function(response) {
				console.log("loginSuccess response==",response);
				dispatch(loginSuccess(response.data));
			})
			.catch(function(response){
				console.log("loginFailure response==",response);
				dispatch(loginFailure(response.data));
				//dispatch(pushState(null,'/error'));
			})
	}*/
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

export function requestAccountNext(data){
	console.log("searchSuccess==",data);
	return{
		 type: types.SEARCH_REQUEST,
		 payload:data
	
	}
}
export function handleAccountNext(value){
	return function(dispatch) {
		dispatch(requestAccountNext(value));
		}
	
}