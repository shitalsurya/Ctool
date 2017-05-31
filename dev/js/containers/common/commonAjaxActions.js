import * as types from './commonActionTypes';
import axios from 'axios';
import * as config from './config';
import {db} from '../../index';

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
	var element = document.getElementById("load");
	element.className = "loader loader-default is-active";
	axios({
		method:request.method,
		url:request.url,
		data:request.data,
	  headers: {
		  Authorization:sessionStorage.getItem("token")//getToken(getState())
	  }
 	}).then(function (response) {
	  var element = document.getElementById("load");
 		element.className = "loader loader-default";
		console.log("httpRequest then response==", response);
		dispatch(request.successCallback(response));
	})
	.catch(function (error) {
		var element = document.getElementById("load");
		element.className = "loader loader-default";
		console.log("httpRequest catch error==", error);
		var response={
			status:-1
		}
		console.log("httpRequest catch status error==", response);
		dispatch(request.failureCallback(response));
	})
}
