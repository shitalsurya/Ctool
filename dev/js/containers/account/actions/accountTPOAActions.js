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
					export function AddHubAccountForcedTPOA(_newTPOAinfo) {
							return function (dispatch,getState) {
								dispatch(AddHubAccountForcedTPOARequest());
								var request = {
									url:config.getUrl('hub_accounts_tpoa')+'/'+_newTPOAinfo.customerid,
									method:'POST',
									data:cnlInfo,
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
									 payload: response
								}
							}
