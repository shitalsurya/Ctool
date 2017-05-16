import * as types from './commonActionTypes';
import axios from 'axios';
import * as config from './config';
import {httpRequest} from './commonAjaxActions';
import {getUserList} from './../miscellaneous/users/miscUsersActions';
import {getCountryList} from './../miscellaneous/countries/miscCntryActions';
import {getExContactList} from './../account/actions/accountActions';
import {getHubAcctList} from '../account/actions/accountListActions';
import {getHubAccountCommercialInfo, getHubAccountTechnicalInfo, getHubAccountVolumeInfo, getHubAccountDelvTimeInfo} from '../account/actions/accountGeneralActions';
import {getHubAcctDefaultTPOA,getHubAcctForcedTPOAList} from '../account/actions/accountTPOAActions';
import BillingLocation from './../../../json/BillingLocation.json';
// var BillingLocation = [
// 		{"smscname": "Mobile 365 Inc.", "smscid": 1},
// 				{"smscname": "Mobile 365 South Africa.", "smscid": 2},
// 					{"smscname": "Mobileway Australia", "smscid": 3},
// 						{"smscname": "Mobileway China", "smscid": 4}
// 	];
var Company = [
{
	"companyid": 1,
	"companyname": "MOBILEWAY"
},
{
	"companyid": 41,
	"companyname": "NEWEB"
},
{
	"companyid": 42,
	"companyname": "I4UUU"
},
{
	"companyid": 43,
	"companyname": "MYWAP"
}
	];
var SMSC = [
		{"smscname": "Mobile 365 Inc.", "smscid": 1},
		{"smscname": "Mobile 365 South Africa.", "smscid": 2},
		{"smscname": "Mobileway Australia", "smscid": 3},
		{"smscname": "Mobileway China", "smscid": 4}
];
var VOL_TYPE = [
	{ "volTypeid": 1, "volTypename":"None"},
	{ "volTypeid": 2, "volTypename":"Daily"},
	{ "volTypeid": 3, "volTypename":"Monthly"},
	{ "volTypeid": 4, "volTypename":"Counter"}
];
var START_TIME = [
	{ "starttimeid": 1, "starttimename":"Time1"},
	{ "starttimeid": 2, "starttimename":"Time2"},
	{ "starttimeid": 3, "starttimename":"Time3"}
];
var END_TIME = [
	{ "endtimeid": 1, "endtimename":"Time1"},
	{ "endtimeid": 2, "endtimename":"Time2"},
	{ "endtimeid": 3, "endtimename":"Time3"}
];

		export function getList(category,currentAcct) {
		  return function(dispatch) {
				switch (category) {
					case "accounts":
						dispatch(getUserList())
						dispatch(getCompanyList())
						dispatch(getBillingLocationList())
						break;
					case "contacts":
						dispatch(getCountryList())
						dispatch(getExContactList())
						break;
					case "interface":
						dispatch(getHubAcctList())
						break;
					case "AccountDetails":
						dispatch(getHubAccountCommercialInfo(currentAcct))
						dispatch(getHubAccountTechnicalInfo(currentAcct))
						dispatch(getHubAccountVolumeInfo(currentAcct))
						dispatch(getHubAccountDelvTimeInfo(currentAcct))
						dispatch(getBillingLocationList())
						dispatch(getVolumeTypeList())
						dispatch(getStartTimeList())
						dispatch(getEndTimeList())
	 					dispatch(getSMSCList())
	 					dispatch(getHubAcctForcedTPOAList(currentAcct))
	 					break;
				}
		  }
		}
		export function getCompanyListRequest() {
				return {
					type: types.GET_COMPANY_LIST_REQUEST
				}
			}
		export function getCompanyListResponse(response) {
				return {
					type: types.GET_COMPANY_LIST_RESPONSE,
					 payload: response
				}
		}
		export function getCompanyList() {
			return function (dispatch,getState) {
				dispatch(getCompanyListRequest());
				var request = {
					url:config.getUrl('getCompanyList'),
					method:'GET',
					successCallback:getCompanyListResponse,
					failureCallback:getCompanyListResponse
				};
				return httpRequest(dispatch,getState,request);
			}
		}

		export function getBillingLocationListRequest() {
				return {
					type: types.GET_BILLINGLOCATION_LIST_REQUEST
				}
			}
		export function getBillingLocationListResponse(data) {
				return {
					type: types.GET_BILLINGLOCATION_LIST_RESPONSE,
					 payload: BillingLocation
				}
		}
		export function getBillingLocationList() {
			return function (dispatch,getState) {
				dispatch(getBillingLocationListResponse());
			}
		}

		export function getSMSCListRequest() {
				return {
					type: types.GET_SMSC_LIST_REQUEST
				}
			}
		export function getSMSCListResponse(data) {
				return {
					type: types.GET_SMSC_LIST_RESPONSE,
					 payload: SMSC
				}
		}
		export function getSMSCList() {
			return function (dispatch,getState) {
				dispatch(getSMSCListResponse());
			}
		}

		export function getVolumeTypeListRequest() {
				return {
					type: types.GET_VOLUMETYPE_LIST_REQUEST
				}
			}
		export function getVolumeTypeListResponse(data) {
				return {
					type: types.GET_VOLUMETYPE_LIST_RESPONSE,
					 payload: VOL_TYPE
				}
		}
		export function getVolumeTypeList() {
			return function (dispatch,getState) {
				dispatch(getVolumeTypeListResponse());
			}
		}

		export function getStartTimeListRequest() {
				return {
					type: types.GET_STARTTIME_LIST_REQUEST
				}
			}
		export function getStartTimeListResponse(data) {
				return {
					type: types.GET_STARTTIME_LIST_RESPONSE,
					 payload: START_TIME
				}
		}
		export function getStartTimeList() {
			return function (dispatch,getState) {
				dispatch(getStartTimeListResponse());
			}
		}

		export function getEndTimeListRequest() {
				return {
					type: types.GET_ENDTIME_LIST_REQUEST
				}
			}
		export function getEndTimeListResponse(data) {
				return {
					type: types.GET_ENDTIME_LIST_RESPONSE,
					 payload: END_TIME
				}
		}
		export function getEndTimeList() {
			return function (dispatch,getState) {
				dispatch(getEndTimeListResponse());
			}
		}
