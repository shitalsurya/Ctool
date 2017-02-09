
import axios from 'axios';
import { pushState } from 'redux-react-router';
import * as types from '../actions/actionTypes';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export function loginUserRequest() {
	  return {
	    type: types.LOGIN_USER_REQUEST
	  }
	}
export function loginSuccess(data) {
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
export function menuToolbox(){
	return {
	    type:types.TOOLBOX_SEARCH,
	    payload: types.TOOLBOX_SEARCH
	  }
}
export function loginUser(email, password) {
	var response={};
		response.data = {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlRlc3QgVXNlciJ9.J6n4-v0I85zk9MkxBHroZ9ZPZEES-IKeul9ozxYnoZ8"};
	return function(dispatch) {
	dispatch(loginSuccess(response.data));
	}
//	return function(dispatch) {
//		dispatch(loginUserRequest());
//		return axios.post('http://10.19.2.28:3000/auth/getToken', {
//			email:email,password:password
//			//email: "abc@test.com", password: "abc"
//		  })
//			.then(function(response) {
//				console.log("loginSuccess response==",response);
//				dispatch(loginSuccess(response.data));
//			})
//			.catch(function(response){
//				console.log("loginFailure response==",response);
//				dispatch(loginFailure(response.data));
//				//dispatch(pushState(null,'/error'));
//			})
//	}
}

export function navigateMenus(menu) {
	return function(dispatch) {
		switch(menu){
		case types.TOOLBOX_SEARCH:
			dispatch(menuToolbox());
			break;
		}
	
	}
}