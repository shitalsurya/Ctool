import * as types from './../../common/commonActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
// var list =  {
// 	status:200,
// 	data: [
//    {
//
//       "comparisoncriteria":"string",
//       "customerid":0,
//       "keyword":"string",
//       "keywordcomparisoncriteria":0,
//       "returnedtpda":"string",
//       "servicenumber":"string",
//       "smscname":"smsc1",
//       "targetfield":"string"
//    },
//    {
//       "comparisoncriteria":"string",
//       "customerid":0,
//       "keyword":"string",
//       "keywordcomparisoncriteria":0,
//       "returnedtpda":"string",
//       "servicenumber":"string",
//       "smscname":"smsc2k",
//       "targetfield":"string"
//    }
// ]
// }
			export function getHubAcctMORoutingList(currentAcct) {
				return function (dispatch,getState) {
			    dispatch(getHubAcctMORoutingListRequest());
					var request = {
						url:config.getUrl('hub_accounts')+'/mo/routing/'+currentAcct,
						method:'GET',
						successCallback:getHubAcctMORoutingListResponse,
						failureCallback:getHubAcctMORoutingListResponse
					};
			    return httpRequest(dispatch,getState,request);
				}
			}
			export function getHubAcctMORoutingListRequest() {
					return {
						type: types.GET_ACCT_MO_ROUTING_LIST_REQUEST
					}
				}
				export function getHubAcctMORoutingListResponse(response) {
						return {
							type: types.GET_ACCT_MO_ROUTING_LIST_RESPONSE,
							 payload: response
						}
					}

					export function getHubAcctMORoutingTableList(currentAcct) {
						return function (dispatch,getState) {
					    dispatch(getHubAcctMORoutingTableListRequest());
							var request = {
								url:config.getUrl('hub_accounts')+'/mo/routing/'+currentAcct,
								method:'GET',
								successCallback:getHubAcctMORoutingTableListResponse,
								failureCallback:getHubAcctMORoutingTableListResponse
							};
					    return httpRequest(dispatch,getState,request);
						}
					}
					export function getHubAcctMORoutingTableListRequest() {
							return {
								type: types.GET_ACCT_MO_ROUTING_TABLE_LIST_REQUEST
							}
						}
						export function getHubAcctMORoutingTableListResponse(response) {
								return {
									type: types.GET_ACCT_MO_ROUTING_TABLE_LIST_RESPONSE,
									 payload: response//list
								}
							}

				export function AddHubAccountMORouting(_newMOinfo) {
							return function (dispatch,getState) {
								dispatch(AddHubAccountMORoutingRequest());
								var request = {
									url:config.getUrl('hub_accounts')+'/mo/routing/'+_newMOinfo.customerid,
									method:'POST',
									data:_newMOinfo,
									successCallback:AddHubAccountMORoutingResponse,
									failureCallback:AddHubAccountMORoutingResponse
								};
								return httpRequest(dispatch,getState,request);
							}
						}
					export function AddHubAccountMORoutingRequest() {
							return {
								type: types.ADD_ACCT_MO_ROUTING_LIST_REQUEST
							}
						}
						export function AddHubAccountMORoutingResponse(response) {
								return {
									type: types.ADD_ACCT_MO_ROUTING_LIST_RESPONSE,
									 payload:response
								}
							}
							export function UpdateHubAccountMORouting(MOInfo) {
									return function (dispatch,getState) {
										dispatch(UpdateHubAccountMORoutingRequest());
										var request = {
											url:config.getUrl('hub_accounts')+'/mo/routing/'+_TPOAinfo.customerid+'/'+_TPOAinfo.smscid,
											method:'PUT',
											data:MOInfo,
											successCallback:UpdateHubAccountMORoutingResponse,
											failureCallback:UpdateHubAccountMORoutingResponse
										};
										return httpRequest(dispatch,getState,request);
									}
								}
							export function UpdateHubAccountMORoutingRequest() {
									return {
										type: types.UPDATE_ACCT_MO_ROUTING_LIST_REQUEST
									}
								}
								export function UpdateHubAccountMORoutingResponse(response) {
										return {
											type: types.UPDATE_ACCT_MO_ROUTING_LIST_RESPONSE,
											 payload: response
										}
									}
									export function DeleteHubAccountMORouting(currentAcct) {
										return function (dispatch,getState) {
											dispatch(DeleteHubAccountMORoutingRequest());
											var request = {
												url:config.getUrl('hub_accounts')+'/mo/routing/'+currentAcct.customerid+'/'+currentAcct.smscid,
												method:'DELETE',
												data:currentAcct,
												successCallback:DeleteHubAccountMORoutingResponse,
												failureCallback:DeleteHubAccountMORoutingResponse
											};
											return httpRequest(dispatch,getState,request);
										}
									}

									export function DeleteHubAccountMORoutingRequest() {
										return {
											type: types.DELETE_ACCT_MO_ROUTING_LIST_REQUEST
										}
									}
									export function DeleteHubAccountMORoutingResponse(response) {
										return {
											type: types.DELETE_ACCT_MO_ROUTING_LIST_RESPONSE,
											 payload: response
										}
									}
