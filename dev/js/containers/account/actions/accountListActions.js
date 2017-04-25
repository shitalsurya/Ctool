import * as types from './accountActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
import {getSpndAccount, getDataList} from './accountAjaxActions';
var accounts = [{
		"acctId":"1",
		"acctName":"123_MM_3000_INDO_HTTP(60)",
	},
	{
		"acctId":"2",
		"acctName":"123_MM_3000_GER_HTTP(60)",
	}];
export function getHubAcctList(){
	return function (dispatch,getState) {
		dispatch(getHubAcctListRequestSuccess(accounts));
		// dispatch(getHubAcctListRequest());
		//
		// var request = {
		// 						url:config.getUrl('GetCountryList'),
		// 						method:'GET',
		// 						successCallback:getMetadataRequestSuccess,
		// 						failureCallback:getMetadataRequestFailure
		// 					};
		// return httpRequest(dispatch,getState,request);

	}
}
export function getHubAcctListRequest() {
	return{
		type: types.ACCOUNT_GET_COUNTRY_LIST
	}
}

export function getHubAcctListRequestSuccess(data) {
	//	localStorage.setItem("token",data.token);
	return {
		type: types.ACCOUNT_GET_COUNTRY_LIST_SUCCESS,
		payload: data
	}
}
export function getHubAcctListRequestFailure(data) {
	return {
		type: types.ACCOUNT_GET_COUNTRY_LIST_FAILURE,
		payload: data
	}
}
