import request from 'superagent'

//var json = require("../../json/login.json");
//export const selectUser = (user) => {
//    console.log("You clicked on user: ", user.first);
//    return {
//        type: 'USER_SELECTED',
//        payload: user
//    }
//};

export function login(name) {
	console.log("in login",name);
	//const json = require('../../json/login.json');
	//console.log("json",json);
	request
	.get('../../json/login.json')
	.end((err, res) => {
		if (err) {
			console.log(err);
		}
	});
	console.log("received data");
	  return {
	    type:'LOGIN',// [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
	    payload: name
//	    promise: (client) => client.post('/login', {
//	      data: {
//	        name: name
	      }
//	    })
//	  };
	}

/*
 export function login(userData) {
  return dispatch =>
    fetch('http://localhost/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response);
        dispatch(loginSuccess(response));
      } else {
        const error = new Error(response.statusText);
        error.response = response;
        dispatch(loginError(error));
        throw error;
      }
    })
    .catch(error => { console.log('request failed', error); });
}
 */
