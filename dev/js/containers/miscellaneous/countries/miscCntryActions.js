import axios from 'axios';
import * as config from './../../common/config';
import * as types from '../../common/commonActionTypes';
import {httpRequest} from './../../common/commonAjaxActions';
//import Countries from '../../../../json/Countries.json'
// import CountryDetails from '../../../../json/CountryDetails';
import updatedCntryDetails from '../../../../json/CountryDetailsUpdated';

export function getCountryListRequest() {
  return {
    type: types.MISC_COUNTRYLIST_REQUEST
  }
}

export function getCountryListResponse(response) {
  return {
    type: types.MISC_COUNTRYLIST_RESPONSE,
		 payload: response.data
  }
}

export function getCountryList() {
	return function (dispatch,getState) {
		dispatch(getCountryListRequest());
        var request = {
            url:config.getUrl('GetCountryList'),
            method:'GET',
            successCallback:getCountryListResponse,
            failureCallback:getCountryListResponse
        };
        return httpRequest(dispatch,getState,request);
	}
}

export function getCntryDetailsRequest() {
	return {
	  type: types.MISC_COUNTRYDETAILS_REQUEST
	}
}
export function getCntryDetailsResponse(response) {
  return {
    type: types.MISC_COUNTRYDETAILS_RESPONSE,
		payload: response.data
  }
}

export function getCntryDetails(_countryid) {
		return function (dispatch,getState) {
			dispatch(getCntryDetailsRequest());
            var request = {
                url:config.getUrl('getCountryById')+_countryid,
                method:'GET',
                successCallback:getCntryDetailsResponse,
                failureCallback:getCntryDetailsResponse
            };
            return httpRequest(dispatch,getState,request);
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
