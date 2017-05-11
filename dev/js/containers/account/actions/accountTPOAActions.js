import * as types from './../../common/commonActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
var TPOA_Info =  {
	defaultTPOA : 'A365'
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
					 payload: TPOA_Info
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
