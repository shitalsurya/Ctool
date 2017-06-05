import * as types from './../../common/commonActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
var TPOA_Info =  {
	status:200,
	data: [
	  {
			  "smscid": 6064,
	   "smscname": "ACTIVCARD.0_Mt",
	    "tpda" : "D1234",
	    "customerrestrictedrouting" :0
	  },
	  {
			  "smscid": 1898,
			 "smscname": "Removed_Digi_Rs_32424_6.0_Mt",
	    "tpda" : "P324",
	    "customerrestrictedrouting" : 1
	  },
	  {
			  "smscid": 1899,
	     "smscname": "Removed_Digi_Rs_32424_10.0_Mt",
	    "tpda" : "A4849",
	    "customerrestrictedrouting" : 0
	  },
	  {
			  "smscid": 1900,
	   "smscname": "Removed_Digi_Rs_36999_5.0_Rm_Mt",
	    "tpda" : "Joker",
	    "customerrestrictedrouting" : 1
	  }
	]
}

			export function getHubAcctForcedTPOAList(currentAcct) {
				return function (dispatch,getState) {
			    dispatch(getHubAcctForcedTPOAListRequest());
					var request = {
						url:config.getUrl('hub_accounts')+'/tpoa/'+currentAcct,
						method:'GET',
						successCallback:getHubAcctForcedTPOAListResponse,
						failureCallback:getHubAcctForcedTPOAListResponse
					};
			    return httpRequest(dispatch,getState,request);
				}
			}
			export function getHubAcctForcedTPOAListRequest() {
					return {
						type: types.GET_ACCT_FORCED_TPOA_LIST_REQUEST
					}
				}
				export function getHubAcctForcedTPOAListResponse(response) {
						return {
							type: types.GET_ACCT_FORCED_TPOA_LIST_RESPONSE,
							 payload: response
						}
					}
					export function AddHubAccountForcedTPOA(_newTPOAinfo) {
							return function (dispatch,getState) {
								dispatch(AddHubAccountForcedTPOARequest());
								var request = {
									url: config.getUrl('hub_accounts')+'/tpoa/'+_newTPOAinfo.customerid+'/forcedtpoa',
									method:'POST',
									data:_newTPOAinfo,
									successCallback:AddHubAccountForcedTPOAResponse,
									failureCallback:AddHubAccountForcedTPOAResponse
								};
								return httpRequest(dispatch,getState,request);
							}
						}
					export function AddHubAccountForcedTPOARequest() {
							return {
								type: types.ADD_ACCT_FORCED_TPOA_LIST_REQUEST
							}
						}
						export function AddHubAccountForcedTPOAResponse(response) {
								return {
									type: types.ADD_ACCT_FORCED_TPOA_LIST_RESPONSE,
									 payload:response
								}
							}
							export function UpdateHubAccountTPOA(_updateParam,_TPOAinfo) {
								var _url,_method;
								switch(_updateParam){
									case "updateDefaultTPOA":
										_url = config.getUrl('hub_accounts')+'/tpoa/'+_TPOAinfo.customerid+'/defaulttpoa';
										_method = "PUT";
									break;
									case "updateForcedTPOA":
										_url = config.getUrl('hub_accounts')+'/tpoa/'+_TPOAinfo.customerid+'/forcedtpoa';
										_method = "POST";
									break;
								}

									return function (dispatch,getState) {
										dispatch(UpdateHubAccountTPOARequest());
										var request = {
											url:_url,
											method:_method,
											data:_TPOAinfo,
											successCallback:UpdateHubAccountTPOAResponse,
											failureCallback:UpdateHubAccountTPOAResponse
										};
										return httpRequest(dispatch,getState,request);
									}
								}
							export function UpdateHubAccountTPOARequest() {
									return {
										type: types.UPDATE_ACCT_FORCED_TPOA_LIST_REQUEST
									}
								}
								export function UpdateHubAccountTPOAResponse(response) {
										return {
											type: types.UPDATE_ACCT_FORCED_TPOA_LIST_RESPONSE,
											 payload: response
										}
									}
									export function DeleteHubAccountForcedTPOA(currentAcct) {
										return function (dispatch,getState) {
											dispatch(DeleteHubAccountForcedTPOARequest());
											var request = {
												url:config.getUrl('hub_accounts')+'/tpoa/'+currentAcct.customerid+'/'+currentAcct.smscid+'/forcedtpoa',
												method:'DELETE',
												data:currentAcct,
												successCallback:DeleteHubAccountForcedTPOAResponse,
												failureCallback:DeleteHubAccountForcedTPOAResponse
											};
											return httpRequest(dispatch,getState,request);
										}
									}

									export function DeleteHubAccountForcedTPOARequest() {
										return {
											type: types.DELETE_ACCT_FORCED_TPOA_LIST_REQUEST
										}
									}
									export function DeleteHubAccountForcedTPOAResponse(response) {
										return {
											type: types.DELETE_ACCT_FORCED_TPOA_LIST_RESPONSE,
											 payload: response
										}
									}
