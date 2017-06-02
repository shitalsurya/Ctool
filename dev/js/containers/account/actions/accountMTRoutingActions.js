import * as types from './../../common/commonActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
var MT_List =  {
	status:200,
	data:[
		{
	    "smscname": "US_ATT_BULK_TX_GEN_REAL",
	    "preference": 1,
	    "defaulttpoa": "10936",
	    "comments": null,
	    "countryid": 61,
	    "countryname": "Uk",
	    "operatorname": "AT&T",
	    "livesmsc": 1,
	    "smscid": 8380,
	    "onoff": 1,
	    "rc": 0,
	    "operatorid": 78
	  },
  {
    "smscname": "US_ATT_BULK_TX_GEN_REAL",
    "preference": 1,
    "defaulttpoa": "10936",
    "comments": null,
    "countryid": 60,
    "countryname": "Usa",
    "operatorname": "AT&T",
    "livesmsc": 1,
    "smscid": 8380,
    "onoff": 1,
    "rc": 0,
    "operatorid": 78
  },
  {
    "smscname": "US_ATT_BULK_TX_LOWLAT_REAL",
    "preference": 3,
    "defaulttpoa": "10936",
    "comments": null,
    "countryid": 60,
    "countryname": "Usa",
    "operatorname": "AT&T",
    "livesmsc": 1,
    "smscid": 8432,
    "onoff": 1,
    "rc": 0,
    "operatorid": 78
  },
  {
    "smscname": "US_ERICSSON_SPRINT_BULK_TX_REAL",
    "preference": 2,
    "defaulttpoa": "10936",
    "comments": null,
    "countryid": 60,
    "countryname": "Usa",
    "operatorname": "Sprint",
    "livesmsc": 1,
    "smscid": 9178,
    "onoff": 1,
    "rc": 0,
    "operatorid": 310020
  }
]
}

			export function getHubAcctMTRoutingList(currentAcct) {
				return function (dispatch,getState) {
			    dispatch(getHubAcctMTRoutingListRequest());
					var request = {
						url:config.getUrl('hub_accounts_tpoa')+'/'+currentAcct,
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
							 payload: MT_List
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
												url:config.getUrl('hub_accounts')+'/'+currentAcct.customerid+'/'+currentAcct.smscid+'/MTRouting',
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
