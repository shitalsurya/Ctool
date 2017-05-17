import axios from 'axios';
import * as config from './../../common/config';
import * as types from '../../common/commonActionTypes';
import {httpRequest} from './../../common/commonAjaxActions';
import Countries from '../../../../json/Countries.json';
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
		 payload: response
    // payload:Countries
  }
}

export function getCountryList() {
	return function (dispatch,getState) {
    // dispatch(getCountryListResponse());
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
		payload: response
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

export function updateCountryDetails(_name,_country) {
	return function (dispatch,getState) {
		dispatch(updateCountryDetailsRequest());
    var _url="";
    switch(_name){
      case "countryname":
      _url = config.getUrl('updateCountryName');
      break;
      case "nl":
      _url = config.getUrl('updateNL');
      break;
      case "cnl":
      _url = config.getUrl('updateCustCNL');
      break;
      case "enableCNL":
      _url = config.getUrl('enableCNL');
      break;
    }
    var request = {
        url:_url,
        method:'PUT',
        data:_country,
        successCallback:updateCountryDetailsResponse,
        failureCallback:updateCountryDetailsResponse
    };
    return httpRequest(dispatch,getState,request);
	}
}
export function updateCountryDetailsRequest(data) {
		return {
			type: types.MISC_UPDATE_COUNTRYDETAILS_REQUEST
		}
}
export function updateCountryDetailsResponse(response) {
		return {
			type: types.MISC_UPDATE_COUNTRYDETAILS_RESPONSE,
			 payload: response
		}
}
