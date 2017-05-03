import * as types from './../../common/commonActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
var accounts = [{
		"acctId":"1",
		"acctName":"123_MM_3000_INDO_HTTP(60)",
	},
	{
		"acctId":"2",
		"acctName":"123_MM_3000_GER_HTTP(60)",
	},
	{
			"acctId":"1",
			"acctName":"123_MM_3000_INDO_HTTP(60)",
		},
		{
				"acctId":"1",
				"acctName":"123_MM_3000_INDO_HTTP(60)",
			},
			{
					"acctId":"1",
					"acctName":"123_MM_3000_INDO_HTTP(60)",
				},
				{
						"acctId":"1",
						"acctName":"123_MM_3000_INDO_HTTP(60)",
					},
					{
							"acctId":"1",
							"acctName":"123_MM_3000_INDO_HTTP(60)",
						},
						{
								"acctId":"1",
								"acctName":"123_MM_3000_INDO_HTTP(60)",
							},
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
