import * as types from './../../common/commonActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
			export function getHubAcctMTRoutingList(currentAcct) {
				return function (dispatch,getState) {
			    dispatch(getHubAcctMTRoutingListRequest());
					var request = {
						url:config.getUrl('hub_accounts')+'/mt/routing/'+currentAcct,
						method:'GET',
						successCallback:getHubAcctMTRoutingListResponse,
						failureCallback:getHubAcctMTRoutingListResponse
					};
			    return httpRequest(dispatch,getState,request);
				}
			}
			export function getHubAcctMTRoutingListRequest() {
					return {
						type: types.GET_ACCT_MT_ROUTING_LIST_REQUEST
					}
				}
				export function getHubAcctMTRoutingListResponse(response) {
						return {
							type: types.GET_ACCT_MT_ROUTING_LIST_RESPONSE,
							 payload: response
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
							export function UpdateHubAccountMTRouting(MTInfo) {
									return function (dispatch,getState) {
										dispatch(UpdateHubAccountMTRoutingRequest());
										var request = {
											url:config.getUrl('hub_accounts')+'/mt/routing/'+MTInfo.customerid+'/'+MTInfo.operatorid+'/'+MTInfo.smscid,
											method:'PUT',
											data:MTInfo,
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
									export function DeleteHubAccountMTRouting(MTInfo) {
										return function (dispatch,getState) {
											dispatch(DeleteHubAccountMTRoutingRequest());
											var request = {
												url:config.getUrl('hub_accounts')+'/'+MTInfo.customerid+'/'+MTInfo.operatorid+'/'+MTInfo.smscid,
												method:'DELETE',
												data:MTInfo,
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
