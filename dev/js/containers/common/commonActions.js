import * as types from './commonActionTypes';
import axios from 'axios';
import {getUserListResponse} from './../miscellaneous/users/miscUsersActions';
import {getCountryListResponse} from './../miscellaneous/countries/miscCntryActions';
import {getCompanyListResponse,getExContactListResponse} from './../account/actions/accountActions';
import {getHubAcctListResponse} from '../account/actions/accountListActions';
import {getHubAccountCommercialInfo} from '../account/actions/accountGeneralActions';
import {getHubAcctDefaultTPOA,getHubAcctForcedTPOAList} from '../account/actions/accountTPOAActions';
import BillingLocation from './../../../json/BillingLocation.json';

import * as config from './config';
		export function getList(category,currentAcct) {
		  return function(dispatch) {
				switch (category) {
					case "accounts":
						dispatch(getUserListResponse())
						dispatch(getCompanyListResponse())
						break;
					case "contacts":
						dispatch(getCountryListResponse())
						dispatch(getExContactListResponse())
						break;
					case "interface":
						dispatch(getHubAcctListResponse())
						break;
					case "General":
						dispatch(getHubAccountCommercialInfo(currentAcct))
						dispatch(getBillingLocationResponse())
						break;
					case "TPOA":
	 					 dispatch(getHubAcctDefaultTPOA(currentAcct))
	 					 dispatch(getHubAcctForcedTPOAList(currentAcct))
	 					 break;

				}
		  }
		}
		export function getBillingLocationRequest() {
				return {
					type: types.GET_BILLINGLOCATION_LIST_REQUEST
				}
			}
		export function getBillingLocationResponse(data) {
				return {
					type: types.GET_BILLINGLOCATION_LIST_RESPONSE,
					 payload: BillingLocation
				}
		}
		export function getBillingLocationList() {
			return function (dispatch,getState) {
				dispatch(getBillingLocationResponse());
			}
		}
