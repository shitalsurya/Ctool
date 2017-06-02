import * as types from './commonActionTypes';
import axios from 'axios';
import * as config from './config';

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

	var rootContainer = document.getElementById("root");
	if(rootContainer)
		rootContainer.style.opacity = "0.4";
	var loadContainer = document.getElementById("load");
	if(loadContainer)
		loadContainer.style.display = "block";

	axios({
		method:request.method,
		url:request.url,
		data:request.data,
	  headers: {
		  Authorization:sessionStorage.getItem("token")//getToken(getState())
	  }
 	}).then(function (response) {

		var rootContainer = document.getElementById("root");
		if(rootContainer)
			rootContainer.style.opacity = "1";
		var loadContainer = document.getElementById("load");
		if(loadContainer)
			loadContainer.style.display = "none";

		console.log("httpRequest then response==", response);
		dispatch(request.successCallback(response));
	})
	.catch(function (error) {

		var rootContainer = document.getElementById("root");
		if(rootContainer)
			rootContainer.style.opacity = "1";
		var loadContainer = document.getElementById("load");
		if(loadContainer)
			loadContainer.style.display = "none";

		console.log("httpRequest catch error==", error);
		var response={
			status:-1
		}
		console.log("httpRequest catch status error==", response);
		dispatch(request.failureCallback(response));
	})
}
