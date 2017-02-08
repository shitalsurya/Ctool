
import axios from 'axios';
import { pushState } from 'redux-react-router';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export function loginUserRequest() {
	  return {
	    type: 'LOGIN_USER_REQUEST'
	  }
	}
export function loginSuccess(data) {
	  return {
	    type: 'LOGIN_SUCCESS',
	    payload: data
	  }
}
export function loginFailure(data) {
	  return {
	    type: 'LOGIN_FAILURE',
	    payload: data
	  }
	}
export function loginUser(email, password) {
	return function(dispatch) {
		dispatch(loginUserRequest());
		return axios.post('http://10.19.2.28:3000/auth/getToken', {
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
	}
}