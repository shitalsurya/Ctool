import * as types from '../actions/actionTypes';
import axios from 'axios';
import * as config from '../config.js';
export function requestSelectFieldsChange(data,target){
	console.log("requestSelectFieldsChange target==",target);
	switch(target){
		case types.ACCOUNT_MGR_CHANGE:
			return{
				 type: types.ACCOUNT_MGR_CHANGE,
				 payload:data
			
			}
			break;
		case types.ACCOUNT_COMPANY_CHANGE:
			return{
				 type: types.ACCOUNT_COMPANY_CHANGE,
				 payload:data
			}
			break;
		case types.ACCOUNT_COMPANY_CONTACT:
			return{
				 type: types.ACCOUNT_COMPANY_CONTACT,
				 payload:data
			}
			break;
		case types.ACCOUNT_COUNTRY_CHANGE:
			return{
				 type: types.ACCOUNT_COUNTRY_CHANGE,
				 payload:data
			}
			break;
		case types.ACCOUNT_EXSTACCTS_CHANGE:
			return{
				type: types.ACCOUNT_EXSTACCTS_CHANGE,
				payload:data
			}
			break;
		case types.ACCOUNT_INTERFACE_CHANGE:
			return{
				type: types.ACCOUNT_INTERFACE_CHANGE,
				payload:data
			}
			break;
		case types.ACCOUNT_BILLING_LOCATION:
			return{
				type: types.ACCOUNT_BILLING_LOCATION,
				payload:data
			}
			break;
		case types.SERVICE_LEVEL:
			return{
				type: types.SERVICE_LEVEL,
				payload:data
			}
			break;
		case types.TRAFFIC_TYPE:
			return{
				type: types.TRAFFIC_TYPE,
				payload:data
			}
			break;			
	}
	
}
export function handleSelectFieldsChange(value,target){
	return function(dispatch) {
		dispatch(requestSelectFieldsChange(value,target));
		}
	
}

export function handleAccountNext(_accountInfo){
	return function(dispatch) {
		dispatch(requestAccountNext(_accountInfo));
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
		return axios.post(config.getUrl('CreateAccount'), {
			data: _accountInfo
			//email: "abc@test.com", password: "abc"
		})
			.then(function (response) {
				console.log("loginSuccess response==", response);
				dispatch(CreateNewAccountSuccess(response.data));
			})
			.catch(function (response) {
				console.log("loginFailure response==", response);
				dispatch(CreateNewAccountFailure(response.data));
				//dispatch(pushState(null,'/error'));
			})
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
		return axios.get(config.getUrl('GetCountryList'))
			.then(function (response) {
				console.log("loginSuccess response==", response);
				//dispatch(CreateNewAccountSuccess(response.data));
			})
			.catch(function (response) {
				console.log("loginFailure response==", response);
				//dispatch(CreateNewAccountFailure(response.data));
				//dispatch(pushState(null,'/error'));
			})

	}
}
export function getMetadataRequest() {
	return{
		type: types.ACCOUNT_GET_COUNTRY_LIST
	}
}
