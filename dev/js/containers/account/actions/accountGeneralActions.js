import * as types from './../../common/commonActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
var commInfo =  {
	commercialname : '(Live)',
	billinglocationid:2,
	opened : '12 Jan 2017',
	suspended : '',
	closed : '',
	servicelevelid:2,
	legalstatusid:1,
	comment : 'N/A'
}

var techInfo = {
	accID : '31353',
	techName : 'ACCNAME12345_HTTP',
	revStatus : 'No',
	exAdd : 'http://172.24.229.51:8883/',
	disExtranet : 'No',
	extLogin : 'ACCNAME12345_HTTP',
	extPassword : 'PWD',
	msgEncrp : 'No',
	msgBodyRem : 'No'
}

var volSettingInfo = {
	volTypeid : 1,
	volLimit : '',
	preAlert : '',
	commments : ''
}

var deliveryTimeInfo = {
	starttimeid : 1,
	endtimeid : 1
}

var moSettingInfo = {
	intrfType : 'HTTP',
	replyAdd : 'http://192.168.60.99:888/cgi-bin/trash.pl',
	login : 'N/A',
	password : 'N/A',
	pathOut : '/opt/HUB/routermo/outputspool/defaulttrash/',
	disTxtBdy : 'No'
}

var mtSettingInfo = {
	interfaceType : 'HTTP',
	url : 'http://sms-pp.sapmobileservices.com/cmc/accname12348581/accname12348581.sms',
	login : 'accname12348581',
	password : 'JuF6HJi',
	encode : 'YWNjbmFtZTEyMzQ4NTgxOkp1Rmo2SEpp',
	mwNotifid : 1,
	smscNotifid : 1,
	mobileNotifid : 1,
	ntfPath : '/usr/mobileway/notifs/outputspool/http',
	disTxtBody : 'No',
	country : ''
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

export function updateHubAccountCommercialInfo(commInfo) {
	return function (dispatch,getState) {
		dispatch(updateHubAccountCommercialInfoResponse());
	}
}
export function updateHubAccountCommercialInfoRequest() {
	return {
		type: types.UPDATE_ACCT_GENERAL_COMM_INFO_REQUEST
	}
}
export function updateHubAccountCommercialInfoResponse(data) {
	return {
		type: types.UPDATE_ACCT_GENERAL_COMM_INFO_RESPONSE,
		 payload: commInfo
	}
}

export function updateAccountManager(commInfo) {
	return function (dispatch,getState) {
		dispatch(updateAccountManagerRequest());
		var request = {
			url:config.getUrl('hub_accounts')+'/'+commInfo.accountId+'/manager/'+commInfo.contactid,
			method:'PUT',
			successCallback:updateAccountManagerResponse,
			failureCallback:updateAccountManagerResponse
		};
		return httpRequest(dispatch,getState,request);
	}
}

export function updateAccountManagerRequest() {
	return {
		type: types.UPDATE_ACCT_MGR_REQUEST
	}
}
export function updateAccountManagerResponse(response) {
	return {
		type: types.UPDATE_ACCT_MGR_RESPONSE,
		 payload: response
	}
}
export function getHubAccountTechnicalInfo(currentAcct) {
	return function (dispatch,getState) {
		dispatch(getHubAccountTechnicalInfoResponse());
	}
}
export function getHubAccountTechnicalInfoRequest() {
  return {
    type: types.GET_ACCT_GENERAL_TECH_INFO_REQUEST
  }
}
export function getHubAccountTechnicalInfoResponse(data) {
  return {
    type: types.GET_ACCT_GENERAL_TECH_INFO_RESPONSE,
		 payload: techInfo
  }
}

export function updateHubAccountTechnicalInfo(techInfo) {
	return function (dispatch,getState) {
		dispatch(updateHubAccountTechnicalInfoResponse());
	}
}
export function updateHubAccountTechnicalInfoRequest() {
	return {
		type: types.UPDATE_ACCT_GENERAL_TECH_INFO_REQUEST
	}
}
export function updateHubAccountTechnicalInfoResponse(data) {
	return {
		type: types.UPDATE_ACCT_GENERAL_TECH_INFO_RESPONSE,
		 payload: techInfo
	}
}


export function getHubAccountVolumeInfo(currentAcct) {
	return function (dispatch,getState) {
		dispatch(getHubAccountVolumeInfoResponse());
	}
}
export function getHubAccountVolumeInfoRequest() {
  return {
    type: types.GET_ACCT_GENERAL_VOL_INFO_REQUEST
  }
}
export function getHubAccountVolumeInfoResponse(data) {
  return {
    type: types.GET_ACCT_GENERAL_VOL_INFO_RESPONSE,
		 payload: volSettingInfo
  }
}

export function updateHubAccountVolumeInfo(volSettingInfo) {
	return function (dispatch,getState) {
		dispatch(updateHubAccountVolumeInfoResponse());
	}
}
export function updateHubAccountVolumeInfoRequest() {
	return {
		type: types.UPDATE_ACCT_GENERAL_VOL_INFO_REQUEST
	}
}
export function updateHubAccountVolumeInfoResponse(data) {
	return {
		type: types.UPDATE_ACCT_GENERAL_VOL_INFO_RESPONSE,
		 payload: volSettingInfo
	}
}


export function getHubAccountMTInfo(currentAcct) {
	return function (dispatch,getState) {
		dispatch(getHubAccountMTInfoResponse());
	}
}
export function getHubAccountMTInfoRequest() {
  return {
    type: types.GET_ACCT_GENERAL_MT_INFO_REQUEST
  }
}
export function getHubAccountMTInfoResponse(data) {
  return {
    type: types.GET_ACCT_GENERAL_MT_INFO_RESPONSE,
		 payload: mtSettingInfo
  }
}

export function updateHubAccountMTInfo(mtSettingInfo) {
	return function (dispatch,getState) {
		dispatch(updateHubAccountMTInfoResponse());
	}
}
export function updateHubAccountMTInfoRequest() {
	return {
		type: types.UPDATE_ACCT_GENERAL_MT_INFO_REQUEST
	}
}
export function updateHubAccountMTInfoResponse(data) {
	return {
		type: types.UPDATE_ACCT_GENERAL_MT_INFO_RESPONSE,
		 payload: mtSettingInfo
	}
}

export function getHubAccountMOInfo(currentAcct) {
	return function (dispatch,getState) {
		dispatch(getHubAccountMOInfoResponse());
	}
}
export function getHubAccountMOInfoRequest() {
  return {
    type: types.GET_ACCT_GENERAL_MO_INFO_REQUEST
  }
}
export function getHubAccountMOInfoResponse(data) {
  return {
    type: types.GET_ACCT_GENERAL_MO_INFO_RESPONSE,
		 payload: moSettingInfo
  }
}

export function updateHubAccountMOInfo(moSettingInfo) {
	return function (dispatch,getState) {
		dispatch(updateHubAccountMOInfoResponse());
	}
}
export function updateHubAccountMOInfoRequest() {
	return {
		type: types.UPDATE_ACCT_GENERAL_MO_INFO_REQUEST
	}
}
export function updateHubAccountMOInfoResponse(data) {
	return {
		type: types.UPDATE_ACCT_GENERAL_MO_INFO_RESPONSE,
		 payload: moSettingInfo
	}
}


export function getHubAccountDelvTimeInfo(currentAcct) {
	return function (dispatch,getState) {
		dispatch(getHubAccountDelvTimeInfoResponse());
	}
}
export function getHubAccountDelvTimeInfoRequest() {
  return {
    type: types.GET_ACCT_GENERAL_DELV_INFO_REQUEST
  }
}
export function getHubAccountDelvTimeInfoResponse(data) {
  return {
    type: types.GET_ACCT_GENERAL_DELV_INFO_RESPONSE,
		 payload: deliveryTimeInfo
  }
}

export function updateHubAccountDelvTimeInfo(deliveryTimeInfo) {
	return function (dispatch,getState) {
		dispatch(updateHubAccountDelvTimeInfoResponse());
	}
}
export function updateHubAccountDelvTimeInfoRequest() {
	return {
		type: types.UPDATE_ACCT_GENERAL_DELV_INFO_REQUEST
	}
}
export function updateHubAccountDelvTimeInfoResponse(data) {
	return {
		type: types.UPDATE_ACCT_GENERAL_DELV_INFO_RESPONSE,
		 payload: deliveryTimeInfo
	}
}
