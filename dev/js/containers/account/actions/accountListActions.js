import * as types from './../../common/commonActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
const accounts = [
		{
			"acctId":"1",
			"acctName":"123_MM_3000_INDO_HTTP(60)",
		},
		{
			"acctId":"2",
			"acctName":"456_MM_3000_GER_HTTP(60)",
		},
		{
			"acctId":"3",
			"acctName":"789_MM_3000_INDO_HTTP(60)",
		},
		{
			"acctId":"4",
			"acctName":"987_MM_3000_INDO_HTTP(60)",
		},
		{
			"acctId":"5",
			"acctName":"654_MM_3000_INDO_HTTP(60)",
		},
		{
			"acctId":"6",
			"acctName":"312_MM_3000_INDO_HTTP(60)",
		},
		{
			"acctId":"7",
			"acctName":"321_MM_3000_INDO_HTTP(60)",
		},
		{
			"acctId":"8",
			"acctName":"102_MM_3000_INDO_HTTP(60)",
		}
];
export function getHubAcctList() {
	return function (dispatch,getState) {
		dispatch(getHubAcctListResponse());
		// dispatch(loginUserRequest());
		// var request = {
		// 						url:config.getUrl('UserAuth'),
		// 							method:'POST',
		// 						data:{username, password},
		// 						successCallback:loginUserResponse,
		// 						failureCallback:loginUserResponse
		// 					};
		// return httpRequest(dispatch,getState,request);
	}
}
export function getHubAcctListRequest() {
	  return {
	    type: types.MISC_ACCOUNT_LIST_REQUEST
	  }
	}
export function getHubAcctListResponse(data) {
	  return {
	    type: types.MISC_ACCOUNT_LIST_RESPONSE,
			 payload: accounts
	  }
	}
