import * as types from './../../common/commonActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
var TPOA_Info =  {
	status:200,
	data: [
	  {
	    "smscid" : 1896,
	    "TPOA" : "D1234",
	    "custRouting" :0
	  },
	  {
			"smscid" : 1897,
	    "TPOA" : "P324",
	    "custRouting" : 1
	  },
	  {
	    "smscid" : 1898,
	    "TPOA" : "A4849",
	    "custRouting" : 0
	  },
	  {
	    "smscid" : 1897,
	    "TPOA" : "Joker",
	    "custRouting" : 1
	  }
	]
}

			export function getHubAcctForcedTPOAList(currentAcct) {
				return function (dispatch,getState) {
			    dispatch(getHubAcctForcedTPOAListRequest());
					var request = {
						url:config.getUrl('hub_accounts_tpoa')+'/'+currentAcct,
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
							 payload: TPOA_Info
						}
					}
					export function AddHubAccountMTRouting(_newMTinfo) {
							return function (dispatch,getState) {
								dispatch(AddHubAccountMTRoutingRequest());
								var request = {
									url:config.getUrl('hub_accounts')+'/mt/routing/'+_newMTinfo.customerid,
									method:'POST',
									data:_newMTinfo,
									successCallback:AddHubAccountMTRoutingResponse,
									failureCallback:AddHubAccountMTRoutingResponse
								};
								return httpRequest(dispatch,getState,request);
							}
						}
					export function AddHubAccountMTRoutingRequest() {
							return {
								type: types.ADD_ACCT_MT_ROUTING_LIST_REQUEST
							}
						}
						export function AddHubAccountMTRoutingResponse(response) {
								return {
									type: types.ADD_ACCT_MT_ROUTING_LIST_RESPONSE,
									 payload:response
								}
							}
							export function UpdateHubAccountMTRouting(_updateParam,_TPOAinfo) {
								var _url;
								switch(_updateParam){
									case "updateDefaultTPOA":
										_url = config.getUrl('hub_accounts')+'/'+_TPOAinfo.customerid+'/defaulttpoa';
									break;
								}

									return function (dispatch,getState) {
										dispatch(UpdateHubAccountMTRoutingRequest());
										var request = {
											url:_url,
											method:'PUT',
											data:_TPOAinfo,
											successCallback:UpdateHubAccountMTRoutingResponse,
											failureCallback:UpdateHubAccountMTRoutingResponse
										};
										return httpRequest(dispatch,getState,request);
									}
								}
							export function UpdateHubAccountMTRoutingRequest() {
									return {
										type: types.UPDATE_ACCT_MT_ROUTING_LIST_REQUEST
									}
								}
								export function UpdateHubAccountMTRoutingResponse(response) {
										return {
											type: types.UPDATE_ACCT_MT_ROUTING_LIST_RESPONSE,
											 payload: response
										}
									}
									export function DeleteHubAccountMTRouting(currentAcct) {
										return function (dispatch,getState) {
											dispatch(DeleteHubAccountMTRoutingRequest());
											var request = {
												url:config.getUrl('hub_accounts')+'/'+currentAcct.customerid+'/'+currentAcct.smscid+'/forcedtpoa',
												method:'DELETE',
												data:currentAcct,
												successCallback:DeleteHubAccountMTRoutingResponse,
												failureCallback:DeleteHubAccountMTRoutingResponse
											};
											return httpRequest(dispatch,getState,request);
										}
									}

									export function DeleteHubAccountMTRoutingRequest() {
										return {
											type: types.DELETE_ACCT_MT_ROUTING_LIST_REQUEST
										}
									}
									export function DeleteHubAccountMTRoutingResponse(response) {
										return {
											type: types.DELETE_ACCT_MT_ROUTING_LIST_RESPONSE,
											 payload: response
										}
									}
