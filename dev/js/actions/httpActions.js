import * as types from '../actions/actionTypes';
import axios from 'axios';
import * as config from '../config.js';

export function httpRequest(dispatch,request){
	axios({
		method:request.method,
		url:request.url,
			data:request.data,
	 headers: { Authorization: localStorage.getItem("token")}
 }).then(function (response) {
			console.log("httpRequest then response==", response);
			dispatch(request.successCallback(response.data));
		})
		.catch(function (response) {
			console.log("httpRequest catch response==", response);
			dispatch(request.failureCallback(response.data));
		})
}
