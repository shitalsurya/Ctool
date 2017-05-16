import * as types from './commonActionTypes';
import axios from 'axios';
import {getUserList} from './../miscellaneous/users/miscUsersActions';
import {getCountryList} from './../miscellaneous/countries/miscCntryActions';
import {getExContactList} from './../account/actions/accountActions';
import {getHubAcctListe} from '../account/actions/accountListActions';
import {getHubAccountCommercialInfo, getHubAccountTechnicalInfo} from '../account/actions/accountGeneralActions';
import {getHubAcctDefaultTPOA,getHubAcctForcedTPOAList} from '../account/actions/accountTPOAActions';
import BillingLocation from './../../../json/BillingLocation.json';
import Company from './../../../json/Company.json';
var SMSC = [
		{"smscname": "Mobile 365 Inc.", "smscid": 1},
				{"smscname": "Mobile 365 South Africa.", "smscid": 2},
					{"smscname": "Mobileway Australia", "smscid": 3},
						{"smscname": "Mobileway China", "smscid": 4}
	];

import * as config from './config';
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
						dispatch(getBillingLocationList())
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
		export function getCompanyListResponse(data) {
				return {
					type: types.GET_COMPANY_LIST_RESPONSE,
					 payload: Company
				}
		}
		export function getCompanyList() {
			return function (dispatch,getState) {
				dispatch(getCompanyListResponse());
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
