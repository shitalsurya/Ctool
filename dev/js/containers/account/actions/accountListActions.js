import * as types from './../../common/commonActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
// var accounts = [
// 	{
// 		"customerid":"1",
// 		"name":"123_MM_3000_INDO_HTTP",
// 		"companies":
// 		 {
// 			 "companyid": "10 GRAD(37669)",
// 		 	 "companyname": "10 GRAD(37669)"
// 		 },
// 		"acctManager":
//      {
// 			 "contactid": "101",
// 			 "names": "Manager 101"
// 		 },
// 		 "status":"Active"
//   },
// 	{
// 		"customerid":"2",
// 		"name":"456_MM_3000_GER_HTTP",
// 		"companies":
// 	 	{
// 		 "companyid": "10 GRAD(37669)",
// 		 "companyname": "10 GRAD(37669)"
// 	  },
// 		"acctManager":
//      {
// 			 "contactid": "201",
// 			 "name": "Manager 201"
// 		 },
// 		"status":"Suspended",
// 		"suspenddate" : "24-02-2017"
// 	},
// 	{
// 		"customerid":"3",
// 		"name":"789_MM_3000_INDO_HTTP",
// 		"companies":
// 		{
// 			"companyid": "10 GRAD(37669)",
// 		  "companyname": "10 GRAD(37669)"
// 		},
// 		"acctManager":
//      {
// 			 "contactid": "301",
// 			 "name": "Manager 301"
// 		 },
// 		"status":"Suspended",
// 		"suspenddate" : "01-03-2017"
// 	},
// 	{
// 		"customerid":"4",
// 		"name":"987_MM_3000_INDO_HTTP",
// 		"companies":
// 	  {
// 			"companyid": "10 GRAD(37669)",
// 			"companyname": "10 GRAD(37669)"
// 		},
// 		"acctManager":
//      {
// 			 "contactid": "401",
// 			 "name": "Manager 401"
// 		 },
// 		"status":"Closed"
// 	},
// 	{
// 		"customerid":"5",
// 		"name":"654_MM_3000_INDO_HTTP",
// 		"companies":
// 		{
// 			"companyid": "10 GRAD(37669)",
// 			"companyname": "10 GRAD(37669)"
// 		},
// 		"acctManager":
//      {
// 			 "contactid": "501",
// 			 "name": "Manager 501"
// 		 },
// 		"status":"Closed"
// 	},
// 	{
// 		"customerid":"6",
// 		"name":"321_MM_3000_INDO_HTTP",
// 		"companies":
// 		{
// 			"companyid": "10 GRAD(37669)",
// 			"companyname": "10 GRAD(37669)"
// 		},
// 		"acctManager":
//      {
// 			 "contactid": "601",
// 			 "name": "Manager 601"
// 		 },
// 		"status":"Active"
// 	},
// 	{
// 		"customerid":"7",
// 		"name":"234_MM_3000_INDO_HTTP",
// 		"companies":
// 		{
// 			"companyid": "10 GRAD(37669)",
// 			"companyname": "10 GRAD(37669)"
// 		},
// 		"acctManager":
//      {
// 			 "contactid": "701",
// 			 "name": "Manager 701"
// 		 },
// 		"status":"Active"
// 	},
// 	{
// 		"customerid":"8",
// 		"name":"867_MM_3000_INDO_HTTP",
// 		"companies":
// 		{
// 			"companyid": "10 GRAD(37669)",
// 			"companyname": "10 GRAD(37669)"
// 		},
// 		"acctManager":
//      {
// 			 "contactid": "801",
// 			 "name": "Manager 801"
// 		 },
// 		"status":"Suspended",
// 		"suspenddate" : "14-06-2016"
// 	},
// ];

export function getHubAcctList() {
	return function (dispatch,getState) {
		dispatch(getHubAcctListRequest());
		var request = {
			url:config.getUrl('hubAccList'),
			method:'GET',
			successCallback:getHubAcctListResponse,
			failureCallback:getHubAcctListResponse
		};
		return httpRequest(dispatch,getState,request);
	}
}

export function getHubAcctListRequest() {
  return {
    type: types.MISC_ACCOUNT_LIST_REQUEST
  }
}

export function getHubAcctListResponse(response) {
  return {
    type: types.MISC_ACCOUNT_LIST_RESPONSE,
		 payload: response.data
  }
}
