import * as types from './accountActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
var commInfo = {
	acctCommName : '(Live)',
	billing : 'Mobile 365 Inc',
	opened : '12 Jan 2017',
	suspended : '',
	closed : '',
	serviceLevel : 'Standard',
	status : 'UNSIGNED',
	comment : 'N/A'
};
	export function getHubAcctCommercialInfo() {
		return function (dispatch,getState) {
			dispatch(getHubAcctCommercialInfoResponse());
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
	export function getHubAcctCommercialInfoRequest() {
		  return {
		    type: types.MISC_ACCOUNT_LIST_REQUEST
		  }
		}
		export function getHubAcctCommercialInfoResponse(data) {
			  return {
			    type: types.MISC_ACCOUNT_LIST_RESPONSE,
					 payload: commInfo
			  }
			}
