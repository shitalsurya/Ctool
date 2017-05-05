import * as types from './../../common/commonActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
var accounts = [{
		"customerid":"1",
		"customername":"123_MM_3000_INDO_HTTP",
		"company":
		 {"companyid": "10 GRAD(37669)",
		 "companyname": "10 GRAD(37669)"},
		 "status":"Suspended"
	},
	{
		"customerid":"2",
		"customername":"123_MM_3000_GER_HTTP",
		"company":
		 {"companyid": "10 GRAD(37669)",
		 "companyname": "10 GRAD(37669)"},
		 "status":"Suspended"
	},
	{
			"customerid":"1",
			"customername":"123_MM_3000_INDO_HTTP",
			"company":
			 {"companyid": "10 GRAD(37669)",
			 "companyname": "10 GRAD(37669)"},
			 "status":"Suspended"
		},
		{
				"customerid":"1",
				"customername":"123_MM_3000_INDO_HTTP",
				"company":
				 {"companyid": "10 GRAD(37669)",
				 "companyname": "10 GRAD(37669)"},
				 "status":"Suspended"
			},
			{
					"customerid":"1",
					"customername":"123_MM_3000_INDO_HTTP",
					"company":
					 {"companyid": "10 GRAD(37669)",
					 "companyname": "10 GRAD(37669)"},
					 "status":"Suspended"
				},
				{
						"customerid":"1",
						"customername":"123_MM_3000_INDO_HTTP",
						"company":
						 {"companyid": "10 GRAD(37669)",
						 "companyname": "10 GRAD(37669)"},
						 "status":"Suspended"
					},
					{
							"customerid":"1",
							"customername":"123_MM_3000_INDO_HTTP",
							"company":
							 {"companyid": "10 GRAD(37669)",
							 "companyname": "10 GRAD(37669)"},
							 "status":"Suspended"
						},
						{
								"customerid":"1",
								"customername":"123_MM_3000_INDO_HTTP",
								"company":
								 {"companyid": "10 GRAD(37669)",
								 "companyname": "10 GRAD(37669)"},
								 "status":"Suspended"
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
