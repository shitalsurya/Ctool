import * as types from './../../common/commonActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
import {getSpndAccount, getDataList} from './accountAjaxActions';

import ExContact from '../../../../json/ExistingContact.json';
import ExContactDetails from '../../../../json/ExContactDetails.json';
export function initializeData(_list,valField){
  console.log("initializeData==",_list);
  var list = _list.data.map(function (item, index) {
        return (
          {
            "id":index,
            "label":item.name,
            "value":item[valField],
          }
        );
    }.bind(this));
    return list;
}

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
export function handleTechDetailsNext(_accountInfo){
	return function(dispatch) {
		dispatch(handleTechDetailsNextRequest(_accountInfo));
		}

}
export function handleTechDetailsNextRequest(_accountInfo) {
    return {
        type: types.ACCOUNT_TECHDETAILS_NEXT,
				payload:_accountInfo
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
export function handleInterfaceDetailsBack(_accountInfo){
	return function(dispatch){
		dispatch(handleInterfaceDetailsBackRequest(_accountInfo))
	}
}
export function handleInterfaceDetailsBackRequest(_accountInfo){
	return{
		  type: types.ACCOUNT_INTERFACEDETAILS_BACK,
			payload:_accountInfo
	}
}

export function handleInterfaceDetailsNext(_accountInfo){
	return function(dispatch) {
		dispatch(handleInterfaceDetailsNextRequest(_accountInfo));
		}
}
export function handleInterfaceDetailsNextRequest(_accountInfo) {
    return {
        type: types.ACCOUNT_INTERFACEDETAILS_NEXT,
				payload:_accountInfo
    }
}

export function handleReviewDetailsBack(_accountInfo){
	return function(dispatch){
		dispatch(handleReviewDetailsBackRequest(_accountInfo))
	}
}
export function handleReviewDetailsBackRequest(_accountInfo){
	return{
		  type: types.ACCOUNT_REVIEWDETAILS_BACK,
			payload:_accountInfo
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

export function setSuspendAccountInfo(_accountInfo){
	return function(dispatch){
		dispatch(setSuspendAccountInfoRequest(_accountInfo))
	}
}
export function setSuspendAccountInfoRequest(_accountInfo){
	return{
		  type: types.SUSPEND_ACC_INFO,
			payload:_accountInfo
	}
}



export function setReactivateAccountInfo(_accountInfo){
	return function(dispatch){
		dispatch(setReactivateAccountInfoRequest(_accountInfo))
	}
}
export function setReactivateAccountInfoRequest(_accountInfo){
	return{
		  type: types.REACTIVATE_ACC_INFO,
			payload:_accountInfo
	}
}




export function setCloseAccountInfo(_accountInfo){
	return function(dispatch){
		dispatch(setCloseAccountInfoRequest(_accountInfo))
	}
}
export function setCloseAccountInfoRequest(_accountInfo){
	return{
		  type: types.CLOSE_ACC_INFO,
			payload:_accountInfo
	}
}

export function handleActiveNav(currentMenu){
	return function(dispatch){
		dispatch(handleActiveNavRequest(currentMenu))
	}
}
export function handleActiveNavRequest(currentMenu){
	return{
		  type: types.ACTIVE_NAV_ITEM,
			payload:currentMenu
	}
}

export function getExContactListRequest() {
		return {
			type: types.GET_EX_CONTACT_LIST_REQUEST
		}
	}
export function getExContactListResponse(response) {
		return {
			type: types.GET_EX_CONTACT_LIST_RESPONSE,
    	//  payload: response.data
			 payload: ExContact
		}
}
export function getExContactList() {
	return function (dispatch,getState) {
		dispatch(getExContactListResponse());
    // dispatch(getExContactListRequest());
    // var request = {
    //     url:config.getUrl('GetCountryList'),
    //     method:'GET',
    //     successCallback:getExContactListResponse,
    //     failureCallback:getExContactListResponse
    // };
    // return httpRequest(dispatch,getState,request);
	}
}

export function handleAccType(_type){
	return function(dispatch){
		dispatch(handleAccTypeSelected(_type))
	}
}
export function handleAccTypeSelected(_type){
	return{
		  type: types.CREATE_ACCOUNT_TYPE,
			payload:_type
	}
}

export function getExContactDetailsRequest() {
		return {
			type: types.GET_EX_CONTACT_DETAILS_REQUEST
		}
	}
export function getExContactDetailsResponse(response) {
		return {
			type: types.GET_EX_CONTACT_DETAILS_RESPONSE,
    	//  payload: response.data
			 payload: ExContactDetails
		}
}
export function getExContactDetails(_contactid) {
	return function (dispatch,getState) {
		dispatch(getExContactDetailsResponse());
    // dispatch(getExContactDetailsRequest());
    // var request = {
    //     url:config.getUrl('GetCountryList'),
    //     method:'GET',
    //     successCallback:getExContactDetailsResponse,
    //     failureCallback:getExContactDetailsResponse
    // };
    // return httpRequest(dispatch,getState,request);
	}
}
