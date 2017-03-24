import * as types from './accountActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonActions'
// export function handleSelectFieldsChangeRequest(data,target){
// 	return{
// 		type: target,
// 		payload:data
// 	}
// }
// export function handleSelectFieldsChange(value,target){
// 	return function(dispatch) {
// 		dispatch(handleSelectFieldsChangeRequest(value,target));
// 		}
// }
export function handleTechDetailsBack(_accountCommInfo){
	return function(dispatch){
		dispatch(handleTechDetailsBackRequest(_accountCommInfo))
	}
}
export function handleTechDetailsBackRequest(_accountCommInfo){
	return{
		  type: types.ACCOUNT_TECHDETAILS_BACK,
			payload:_accountCommInfo
	}
}
export function goToTechnicalDetails(_accountCommInfo){
	return function(dispatch) {
		dispatch(goToTechnicalDetailsRequest(_accountCommInfo));
		}

}
export function goToTechnicalDetailsRequest(_accountCommInfo) {

    return {
        type: types.ACCOUNT_COMMINFO_NEXT,
				payload:_accountCommInfo
    }
}
export function createNewAccount(_accountInfo) {
	return function (dispatch,getState) {
		dispatch(CreateNewAccountRequest());
		var request = {
								url:config.getUrl('CreateAccount'),
									method:'POST',
								data:_accountInfo,
								successCallback:CreateNewAccountSuccess,
								failureCallback:CreateNewAccountFailure
							};
		return httpRequest(dispatch,getState,request);
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
	return function (dispatch,getState) {
		dispatch(getMetadataRequest());

		var request = {
								url:config.getUrl('GetCountryList'),
								method:'GET',
								successCallback:getMetadataRequestSuccess,
								failureCallback:getMetadataRequestFailure
							};
		return httpRequest(dispatch,getState,request);

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
