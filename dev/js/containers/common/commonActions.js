import * as types from './commonActionTypes';
import axios from 'axios';
import {getUserList} from './../miscellaneous/users/miscUsersActions';
import {getCountryList} from './../miscellaneous/countries/miscCntryActions';
import {getCompanyList,getExContactList} from './../account/actions/accountActions';
import {getHubAcctListe} from '../account/actions/accountListActions';
import {getHubAccountCommercialInfo} from '../account/actions/accountGeneralActions';
import {getHubAcctDefaultTPOA,getHubAcctForcedTPOAList} from '../account/actions/accountTPOAActions';
import BillingLocation from './../../../json/BillingLocation.json';

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
					case "General":
						dispatch(getHubAccountCommercialInfo(currentAcct))
						dispatch(getBillingLocationList())
						break;
					case "TPOA":
	 				//	 dispatch(getHubAcctDefaultTPOA(currentAcct))
	 					 dispatch(getHubAcctForcedTPOAList(currentAcct))
	 					 break;

				}
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
