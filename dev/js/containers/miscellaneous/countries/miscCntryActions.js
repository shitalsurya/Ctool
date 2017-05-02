import axios from 'axios';
import * as config from './../../common/config';
import * as types from '../../common/commonActionTypes';
import Countries from '../../../../json/Countries.json'
import CountryDetails from '../../../../json/CountryDetails';
import updatedCntryDetails from '../../../../json/CountryDetailsUpdated';

export function getCountryListRequest() {
  return {
    type: types.MISC_COUNTRYLIST_REQUEST
  }
}

export function getCountryListResponse(data) {
  return {
    type: types.MISC_COUNTRYLIST_RESPONSE,
		 payload: Countries
  }
}

export function getCountryList() {
	return function (dispatch,getState) {
		dispatch(getCountryListResponse());
		// dispatch(loginUserRequest());
		// var request = {
		// 						url:config.getUrl('UserAuth'),
		// 							method:'POST',
		// 						data:{username, password},
		// 						successCallback:loginUserResponse,
		// 						failureCallback:loginUserResponse
		// 					};
		// return httpRequest(dispatch,getState,request);
	}
}

export function getCntryDetailsRequest() {
	return {
	  type: types.MISC_COUNTRYDETAILS_REQUEST
	}
}
export function getCntryDetailsResponse(data) {
  return {
    type: types.MISC_COUNTRYDETAILS_RESPONSE,
		payload: CountryDetails
  }
}

export function getCntryDetails(_userId) {
		return function (dispatch,getState) {
			dispatch(getCntryDetailsResponse());
		}
}

export function updateCountryDetails(_user) {
	return function (dispatch,getState) {
		dispatch(updateCountryDetailsResponse());
	}
}

export function updateCountryDetailsResponse(data) {
		return {
			type: types.MISC_UPDATE_COUNTRYDETAILS_RESPONSE,
			 payload: updatedCntryDetails
		}
}
