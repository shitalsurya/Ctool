import * as types from './../../common/commonActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
var commInfo =  {
	commercialname : '(Live)',
	billinglocation:
	   {"billinglocationname": "Mobile 365 South Africa.", "billinglocationid": 2},
	opened : '12 Jan 2017',
	suspended : '',
	closed : '',
	servicelevel :
	{
	 servicelevel : 'Mobile 365 Inc',
	 servicelevelid:12
 },
	legalstatus : {
	 legalstatusname : 'SIGNED',
	 legalstatusid:1
 },
	comment : 'N/A'
}
	export function getHubAccountCommercialInfo(currentAcct) {
		return function (dispatch,getState) {
			dispatch(getHubAccountCommercialInfoResponse());
		}
	}
	export function getHubAccountCommercialInfoRequest() {
		  return {
		    type: types.GET_ACCT_GENERAL_COMM_INFO_REQUEST
		  }
		}
		export function getHubAccountCommercialInfoResponse(data) {
			  return {
			    type: types.GET_ACCT_GENERAL_COMM_INFO_RESPONSE,
					 payload: commInfo
			  }
			}
