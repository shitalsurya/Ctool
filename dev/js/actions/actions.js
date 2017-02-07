
import axios from 'axios';
import { pushState } from 'redux-react-router';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
export function loginUserRequest() {
	  return {
	    type: 'LOGIN_USER_REQUEST'
	  }
	}

//export function redirect() {
//	 this.context.router.push('dashboard');
//	}
export function loginSuccess(data) {
	// this.context.router.push('dashboard');
//	 return (dispatch, state) => {
//	        dispatch(logout());
//	        dispatch(pushState(null, '/login'));
//	    }
	// return function(dispatch) {
	//	 dispatch(redirect());
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
		return axios.post('http://localhost:3000/auth/getToken', {
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
	//
/*	axios.post('http://localhost:3000/auth/getToken', {
		email: "abc@test.com", password: "abc"
	  })
	  .then(function (response) {
	    console.log(response);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
            return {
        	    type:'LOGIN_USER_REQUEST',// [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
        	    payload: {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlRlc3QgVXNlciJ9.J6n4-v0I85zk9MkxBHroZ9ZPZEES-IKeul9ozxYnoZ8"}
        	      }*/
}

