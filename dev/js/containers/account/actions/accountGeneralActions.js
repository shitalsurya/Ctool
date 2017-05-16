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
