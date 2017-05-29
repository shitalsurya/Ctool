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

export function addHubAccountCNL(cnlInfo) {
	return function (dispatch,getState) {
		dispatch(addHubAccountCNLRequest());
		var request = {
			url:config.getUrl('hub_accounts')+'/'+cnlInfo.customerid+'/cnl',
			method:'POST',
			data:cnlInfo,
			successCallback:addHubAccountCNLResponse,
			failureCallback:addHubAccountCNLResponse
		};
		return httpRequest(dispatch,getState,request);
	}
}

export function addHubAccountCNLRequest() {
	return {
		type: types.ADD_ACC_CNL_REQUEST
	}
}
export function addHubAccountCNLResponse(response) {
	return {
		type: types.ADD_ACC_CNL_RESPONSE,
		 payload: response
	}
}
var acctCnlList={
	status:200,
	data:[{
	  "countryid": 8,
		"countryname": "INDIA",
	  "customerid": 0,
	  "numberlookupid": 2,
		"numberlookup":"NRS",
		"lookupOptions":[
							 {
								 "numberlookupid": 1,
								 "numberlookup": "Local-Numbering-Plan"
							 },
							 {
								 "numberlookupid": 2,
								 "numberlookup": "Local-Ported-Number"
							 }]
	}]
}
export function getHubAccountCNL(currentAcct) {
	return function (dispatch,getState) {
		dispatch(getHubAccountCNLRequest());
		var request = {
			url:config.getUrl('hub_accounts')+'/'+currentAcct+'/cnl',
			method:'GET',
			successCallback:getHubAccountCNLResponse,
			failureCallback:getHubAccountCNLResponse
		};
		return httpRequest(dispatch,getState,request);
	}
}

export function getHubAccountCNLRequest() {
	return {
		type: types.GET_ACC_CNL_REQUEST
	}
}
export function getHubAccountCNLResponse(response) {
	return {
		type: types.GET_ACC_CNL_RESPONSE,
		 payload: acctCnlList
	}
}

export function updateHubAccountCNL(currentAcct) {
	return function (dispatch,getState) {
		dispatch(updateHubAccountCNLRequest());
		var request = {
			url:config.getUrl('hub_accounts')+'/'+currentAcct.customerid+'/cnl',
			method:'PUT',
			data:currentAcct,
			successCallback:updateHubAccountCNLResponse,
			failureCallback:updateHubAccountCNLResponse
		};
		return httpRequest(dispatch,getState,request);
	}
}

export function updateHubAccountCNLRequest() {
	return {
		type: types.UPDATE_ACC_CNL_REQUEST
	}
}
export function updateHubAccountCNLResponse(response) {
	return {
		type: types.UPDATE_ACC_CNL_RESPONSE,
		 payload: response
	}
}
export function deleteHubAccountCNL(currentAcct) {
	return function (dispatch,getState) {
		dispatch(deleteHubAccountCNLRequest());
		var request = {
			url:config.getUrl('hub_accounts')+'/'+currentAcct.customerid+'/cnl/'+currentAcct.countryid,
			method:'DELETE',
			data:currentAcct,
			successCallback:deleteHubAccountCNLResponse,
			failureCallback:deleteHubAccountCNLResponse
		};
		return httpRequest(dispatch,getState,request);
	}
}

export function deleteHubAccountCNLRequest() {
	return {
		type: types.DELETE_ACC_CNL_REQUEST
	}
}
export function deleteHubAccountCNLResponse(response) {
	return {
		type: types.DELETE_ACC_CNL_RESPONSE,
		 payload: response
	}
}
var exCompanyContacts ={
  "status":200,
  "data":
  [
    {
      "contactid": 1,
      "email": "string",
      "insertdate": "2017-05-17T05:00:04.535Z",
      "mobile": "string",
      "name": "abc",
      "phone": "string",
      "updatedate": "2017-05-17T05:00:04.536Z"
    },
    {
      "contactid": 2,
      "email": "string",
      "insertdate": "2017-05-17T05:00:04.535Z",
      "mobile": "string",
      "name": "xyz",
      "phone": "string",
      "updatedate": "2017-05-17T05:00:04.536Z"
    }
  ]
}
export function getHubAccountContactsRequest() {
		return {
			type: types.GET_ACC_CONTACTS_REQUEST
		}
	}
export function getHubAccountContactsResponse(response) {
		return {
			type: types.GET_ACC_CONTACTS_RESPONSE,
    	 // payload: response
			 payload: exCompanyContacts
		}
}
export function getHubAccountContacts(currentAcct) {
	return function (dispatch,getState) {
    dispatch(getHubAccountContactsRequest());
    var request = {
        url:config.getUrl('getCompanyContacts')+'/'+currentAcct,
        method:'GET',
        successCallback:getHubAccountContactsResponse,
        failureCallback:getHubAccountContactsResponse
    };
    return httpRequest(dispatch,getState,request);
	}
}
export function addHubAccountContact(cnlInfo) {
	return function (dispatch,getState) {
		dispatch(addHubAccountContactRequest());
		if(cnlInfo.contactid==0){
			var request = {
				url:config.getUrl('hub_accounts')+'/'+cnlInfo.customerid+'/contact/',
				method:'POST',
				data:cnlInfo,
				successCallback:addHubAccountContactResponse,
				failureCallback:addHubAccountContactResponse
			};
		}
		else{
			var request = {
				url:config.getUrl('hub_accounts')+'/'+cnlInfo.customerid+'/contact/'+cnlInfo.contactid,
				method:'POST',
				data:cnlInfo,
				successCallback:addHubAccountContactResponse,
				failureCallback:addHubAccountContactResponse
			};
		}
		return httpRequest(dispatch,getState,request);
	}
}

export function addHubAccountContactRequest() {
	return {
		type: types.ADD_ACC_CONTACT_REQUEST
	}
}
export function addHubAccountContactResponse(response) {
	return {
		type: types.ADD_ACC_CONTACT_RESPONSE,
		 payload: response
	}
}

export function updateHubAccountContactRequest() {
		return {
			type: types.UPDATE_ACC_CONTACT_REQUEST
		}
	}
export function updateHubAccountContactResponse(response) {
		return {
			type: types.UPDATE_ACC_CONTACT_RESPONSE,
    	 // payload: response
			 payload: exCompanyContacts
		}
}
export function updateHubAccountContact(cnlInfo) {
	return function (dispatch,getState) {
    dispatch(updateHubAccountContactRequest());
		var request = {
			url:config.getUrl('hub_accounts')+'/'+cnlInfo.customerid+'/contact/'+cnlInfo.contactid,
			method:'PUT',
			data:cnlInfo,
			successCallback:updateHubAccountContactResponse,
			failureCallback:updateHubAccountContactResponse
		};
    return httpRequest(dispatch,getState,request);
	}
}
export function deleteHubAccountContactRequest() {
		return {
			type: types.DELETE_ACC_CONTACT_REQUEST
		}
	}
export function deleteHubAccountContactResponse(response) {
		return {
			type: types.DELETE_ACC_CONTACT_RESPONSE,
    	 // payload: response
			 payload: exCompanyContacts
		}
}
export function deleteHubAccountContact(cnlInfo) {
	return function (dispatch,getState) {
    dispatch(updateHubAccountContactRequest());
		var request = {
			url:config.getUrl('hub_accounts')+'/'+cnlInfo.customerid+'/contact/'+cnlInfo.contactid,
			method:'PUT',
			data:cnlInfo,
			successCallback:deleteHubAccountContactResponse,
			failureCallback:deleteHubAccountContactResponse
		};
    return httpRequest(dispatch,getState,request);
	}
}
