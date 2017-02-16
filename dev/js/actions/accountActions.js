import * as types from '../actions/actionTypes';
import axios from 'axios';
import * as config from '../config.js';
import {httpRequest} from '../actions/httpActions'
export function requestSelectFieldsChange(data,target){
	return{
		type: target,
		payload:data
	}
}
export function handleSelectFieldsChange(value,target){
	return function(dispatch) {
		dispatch(requestSelectFieldsChange(value,target));
		}
}

export function handleAccountNext(){
	return function(dispatch) {
		dispatch(requestAccountNext());
		}

}
export function requestAccountNext() {

    return {
        type: types.ACCOUNT_NEXT
    }
}
export function createNewAccount(_accountInfo) {
	return function (dispatch) {
		dispatch(CreateNewAccountRequest());
		var request = {
								url:config.getUrl('CreateAccount'),
									method:'POST',
								data:_accountInfo,
								successCallback:CreateNewAccountSuccess,
								failureCallback:CreateNewAccountFailure
							};
		return httpRequest(dispatch,request);
	}
}

	export function CreateNewAccountRequest() {
		return{
			type: types.ACCOUNT_CREATE_NEW,
		}
	}
	export function CreateNewAccountSuccess(data) {
	//	localStorage.setItem("token",data.token);
		return {
			type: types.ACCOUNT_CREATE_NEW_SUCCESS,
			payload: data
		}
	}
	export function CreateNewAccountFailure(data) {
		return {
			type: types.ACCOUNT_CREATE_NEW_FAILURE,
			payload: data
		}
	}
export function getMetadata(){
	return function (dispatch) {
		dispatch(getMetadataRequest());

		var request = {
								url:config.getUrl('GetCountryList'),
								method:'GET',
								successCallback:getMetadataRequestSuccess,
								failureCallback:getMetadataRequestFailure
							};
		return httpRequest(dispatch,request);

	}
}
export function getMetadataRequest() {
	return{
		type: types.ACCOUNT_GET_COUNTRY_LIST
	}
}

export function getMetadataRequestSuccess(data) {
	//	localStorage.setItem("token",data.token);
	return {
		type: types.ACCOUNT_GET_COUNTRY_LIST_SUCCESS,
		payload: data
	}
}
export function getMetadataRequestFailure(data) {
	return {
		type: types.ACCOUNT_GET_COUNTRY_LIST_FAILURE,
		payload: data
	}
}
