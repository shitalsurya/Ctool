import * as types from './commonActionTypes';
import axios from 'axios';
import * as config from './config';
import {httpRequest} from './commonAjaxActions';
import {getUserList} from './../miscellaneous/users/miscUsersActions';
import {getCountryList} from './../miscellaneous/countries/miscCntryActions';
import {getExContactList} from './../account/actions/accountActions';
import {getHubAcctList} from '../account/actions/accountListActions';
import {getHubAcctListe} from '../account/actions/accountListActions';
import {getHubAccountBasicInfo, getHubAccountTechnicalInfo, getHubAccountVolumeInfo } from '../account/actions/accountGeneralActions';
import {getHubAccountDelvTimeInfo, getHubAccountCNL,getHubAccountContacts} from '../account/actions/accountGeneralActions';
import {getHubAcctDefaultTPOA,getHubAcctForcedTPOAList} from '../account/actions/accountTPOAActions';
import {getHubAcctMTRoutingList} from '../account/actions/accountMTRoutingActions';
import {getHubAcctMORoutingList} from '../account/actions/accountMORoutingActions';
import {getHubAcctMORoutingTableList} from '../account/actions/accountMORoutingActions';
// var VOL_TYPE = [
// 	{ "volTypeid": 1, "volTypename":"None"},
// 	{ "volTypeid": 2, "volTypename":"Daily"},
// 	{ "volTypeid": 3, "volTypename":"Monthly"},
// 	{ "volTypeid": 4, "volTypename":"Counter"}
// ];
// var START_TIME = [
// 	{ "starttimeid": 1, "starttimename":"Time1"},
// 	{ "starttimeid": 2, "starttimename":"Time2"},
// 	{ "starttimeid": 3, "starttimename":"Time3"}
// ];
// var END_TIME = [
// 	{ "endtimeid": 1, "endtimename":"Time1"},
// 	{ "endtimeid": 2, "endtimename":"Time2"},
// 	{ "endtimeid": 3, "endtimename":"Time3"}
// ];


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
				 dispatch(getHubAccountBasicInfo(currentAcct))
         	dispatch(getBillingLocationList())
				// dispatch(getHubAccountVolumeInfo(currentAcct))
				// dispatch(getHubAccountDelvTimeInfo(currentAcct))

        	dispatch(getManagerList())
				 dispatch(getHubAccountCNL(currentAcct))
          dispatch(getHubAccountContacts(currentAcct))
           dispatch(getSMSCList())
           dispatch(getOperatorList())

         dispatch(getHubAcctForcedTPOAList(currentAcct))
         dispatch(getHubAcctMORoutingList(currentAcct))
         dispatch(getHubAcctMTRoutingList(currentAcct))
         dispatch(getHubAcctMORoutingTableList(currentAcct))

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

export function getManagerListRequest() {
    return {
      type: types.GET_MANAGER_LIST_REQUEST
    }
  }
export function getManagerListResponse(response) {
    return {
      type: types.GET_MANAGER_LIST_RESPONSE,
       payload: response
       //payload: managerList
    }
}
export function getManagerList() {
  return function (dispatch,getState) {
    dispatch(getManagerListRequest());
    var request = {
      url:config.getUrl('getManagerList'),
      method:'GET',
      successCallback:getManagerListResponse,
      failureCallback:getManagerListResponse
    };
    return httpRequest(dispatch,getState,request);
  }
}

export function getBillingLocationListRequest() {
		return {
			type: types.GET_BILLINGLOCATION_LIST_REQUEST
		}
	}
export function getBillingLocationListResponse(response) {
		return {
			type: types.GET_BILLINGLOCATION_LIST_RESPONSE,
			 payload: response
		}
}
export function getBillingLocationList() {
	return function (dispatch,getState) {
		dispatch(getBillingLocationListRequest());
		var request = {
			url:config.getUrl('getBillingLocationList'),
			method:'GET',
			successCallback:getBillingLocationListResponse,
			failureCallback:getBillingLocationListResponse
		};
		return httpRequest(dispatch,getState,request);
	}
}

export function getSMSCListRequest() {
		return {
			type: types.GET_SMSC_LIST_REQUEST
		}
	}
export function getSMSCListResponse(response) {
		return {
			type: types.GET_SMSC_LIST_RESPONSE,
			 payload: response
		}
}
export function getSMSCList() {
  return function (dispatch,getState) {
		dispatch(getSMSCListRequest());
		var request = {
			url:config.getUrl('GetSMSCList'),
			method:'GET',
			successCallback:getSMSCListResponse,
			failureCallback:getSMSCListResponse
		};
		return httpRequest(dispatch,getState,request);
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

export function getMWNotifListRequest() {
		return {
			type: types.GET_MWNOTIF_LIST_REQUEST
		}
	}
export function getMWNotifListResponse(data) {
		return {
			type: types.GET_MWNOTIF_LIST_RESPONSE,
			 payload: MW_NOTIF
		}
}
export function getMWNotifList() {
	return function (dispatch,getState) {
		dispatch(getMWNotifListResponse());
	}
}

export function getSMSCNotifListRequest() {
		return {
			type: types.GET_SMSCNOTIF_LIST_REQUEST
		}
	}
export function getSMSCNotifListResponse(data) {
		return {
			type: types.GET_SMSCNOTIF_LIST_RESPONSE,
			 payload: SMSC_NOTIF
		}
}
export function getSMSCNotifList() {
	return function (dispatch,getState) {
		dispatch(getSMSCNotifListResponse());
	}
}

export function getMOBILENotifListRequest() {
		return {
			type: types.GET_MOBILENOTIF_LIST_REQUEST
		}
	}
export function getMOBILENotifListResponse(data) {
		return {
			type: types.GET_MOBILENOTIF_LIST_RESPONSE,
			 payload: MOBILE_NOTIF
		}
}
export function getMOBILENotifList() {
	return function (dispatch,getState) {
		dispatch(getMOBILENotifListResponse());
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
    export function getOperatorListRequest() {
				return {
					type: types.GET_OPERATOR_LIST_REQUEST
				}
			}
		export function getOperatorListResponse(response) {
				return {
					type: types.GET_OPERATOR_LIST_RESPONSE,
					 payload: response
				}
		}
		export function getOperatorList() {
      return function (dispatch,getState) {
				dispatch(getOperatorListRequest());
				var request = {
					url:config.getUrl('GetOperatorList'),
					method:'GET',
					successCallback:getOperatorListResponse,
					failureCallback:getOperatorListResponse
				};
				return httpRequest(dispatch,getState,request);
			}
		}
