import * as types from '../actions/actionTypes';
import axios from 'axios';
import * as config from '../config.js';
import {db} from '../index.js';

function getToken(_state){
	var token=_state.Auth.token||"";
	db.find({}, function (err, docs) {
		console.log("docs==",docs);
		docs.forEach(function(element) {
				if(element.hasOwnProperty("token"))
					token = element.token;
			});
	});
	return token;
}
export function httpRequest(dispatch,getState,request){
	axios({
		method:request.method,
		url:request.url,
			data:request.data,
	 headers: {
		 Authorization:getToken(getState()) 
	 }
 }).then(function (response) {
			console.log("httpRequest then response==", response);
			dispatch(request.successCallback(response.data));
		})
		.catch(function (response) {
			console.log("httpRequest catch response==", response);
			dispatch(request.failureCallback(response.data));
		})
}
