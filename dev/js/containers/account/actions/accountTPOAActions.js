import * as types from './../../common/commonActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
var TPOA_Info =  {
	defaultTPOA : 'A365',
	forcedTPOA:  [
	  {
	    "smscid" : 1,
	    "TPOA" : "D1234",
	    "custRouting" : "No",
	    "delete" : ""
	  },
	  {
	    "smscid" :2,
	    "TPOA" : "P324",
	    "custRouting" : "No",
	    "delete" : ""
	  },
	  {
	    "smscid" : 3,
	    "TPOA" : "A4849",
	    "custRouting" : "No",
	    "delete" : ""
	  },
	  {
	    "smscid" : 4,
	    "TPOA" : "Joker",
	    "custRouting" : "Yes",
	    "delete" : ""
	  }
	]
}
	export function getHubAcctDefaultTPOA(currentAcct) {
		return function (dispatch,getState) {
			dispatch(getHubAcctDefaultTPOAResponse());
		}
	}

	export function getHubAcctDefaultTPOARequest() {
		  return {
		    type: types.GET_ACCT_DEFAULT_TPOA_REQUEST
		  }
		}
		export function getHubAcctDefaultTPOAResponse(data) {
			  return {
			    type: types.GET_ACCT_DEFAULT_TPOA_RESPONSE,
					 payload: TPOA_Info.defaultTPOA
			  }
			}
			export function getHubAcctForcedTPOAList(commInfo) {
				return function (dispatch,getState) {
					dispatch(getHubAcctForcedTPOAListResponse());
				}
			}
			export function getHubAcctForcedTPOAListRequest() {
					return {
						type: types.GET_ACCT_FORCED_TPOA_LIST_REQUEST
					}
				}
				export function getHubAcctForcedTPOAListResponse(data) {
						return {
							type: types.GET_ACCT_FORCED_TPOA_LIST_RESPONSE,
							 payload: TPOA_Info
						}
					}
