import * as types from './../../common/commonActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
var MO_List =  {
	status:200,
	data:[
  {
    "servicenumber": "151911",
    "returnedtpda": "51911",
    "smscname": "FR_SFR_RS_TRX_51911_PHONEVALLEY_020_REAL",
    "countryid": 11,
    "countryname": "France",
    "comparisoncriteria": 2
  },
  {
    "servicenumber": "102",
    "returnedtpda": "100",
    "smscname": "A1-MOBILKOM_436644967491",
    "countryid": 45,
    "countryname": "Austria",
    "comparisoncriteria": 2
  },
  {
    "servicenumber": "103",
    "returnedtpda": "101",
    "smscname": "A1-MOBILKOM_436644967491",
    "countryid": 45,
    "countryname": "Austria",
    "comparisoncriteria": 2
  },
  {
    "servicenumber": "123",
    "returnedtpda": "456",
    "smscname": "A1-MOBILKOM_436644967491",
    "countryid": 45,
    "countryname": "Austria",
    "comparisoncriteria": 2
  },
  {
    "servicenumber": "13456",
    "returnedtpda": "101",
    "smscname": "A1-MOBILKOM_436644967491",
    "countryid": 45,
    "countryname": "Austria",
    "comparisoncriteria": 2
  },
  {
    "servicenumber": "4343",
    "returnedtpda": "3434",
    "smscname": "A1-MOBILKOM_436644967491",
    "countryid": 45,
    "countryname": "Austria",
    "comparisoncriteria": 2
  }
]
}
			export function getHubAcctMORoutingList(currentAcct) {
				return function (dispatch,getState) {
			    dispatch(getHubAcctMORoutingListRequest());
					var request = {
						url:config.getUrl('hub_accounts_tpoa')+'/'+currentAcct,
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
							 payload: MO_List
						}
					}
					export function AddHubAccountMORouting(_newMOinfo) {
							return function (dispatch,getState) {
								dispatch(AddHubAccountMORoutingRequest());
								var request = {
									url:config.getUrl('hub_accounts')+'/MO/routing/'+_newMOinfo.customerid,
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
							export function UpdateHubAccountMORouting(_updateParam,_TPOAinfo) {
								var _url;
								switch(_updateParam){
									case "updateDefaultTPOA":
										_url = config.getUrl('hub_accounts')+'/'+_TPOAinfo.customerid+'/defaulttpoa';
									break;
								}

									return function (dispatch,getState) {
										dispatch(UpdateHubAccountMORoutingRequest());
										var request = {
											url:_url,
											method:'PUT',
											data:_TPOAinfo,
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
												url:config.getUrl('hub_accounts')+'/'+currentAcct.customerid+'/'+currentAcct.smscid+'/MORouting',
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
