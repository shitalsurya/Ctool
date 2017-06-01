import * as types from './../../common/commonActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
export function getHubAcctList(_reqParam) {
	return function (dispatch,getState) {
		dispatch(getHubAcctListRequest());
		if(typeof(_reqParam)!='undefined'){
			var _url = config.getUrl('hub_accounts')+_reqParam
		}
		else{
			var _url = config.getUrl('hub_accounts');
		}
		var request = {
			url:_url,
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
		 payload: response
  }
}
