import axios from 'axios';
import * as config from './../../common/config';
import * as types from './../../common/commonActionTypes';
import {httpRequest} from './../../common/commonAjaxActions';
import Users from '../../../../json/Users.json';
import UserDetails1 from '../../../../json/UserDetails1.json';
import UserDetails2 from '../../../../json/UserDetails2.json';
import updatedUserDetails from '../../../../json/updatedUserDetails.json';

export function getUserListRequest() {
  return {
    type: types.MISC_USERLIST_REQUEST
  }
}

export function getUserListResponse(response) {
  return {
    type: types.MISC_USERLIST_RESPONSE,
		 payload: Users //response.data
  }
}

export function getUserList() {
	return function (dispatch,getState) {
		dispatch(getUserListRequest());
		var request = {
				url:config.getUrl('userList'),
				method:'GET',
				successCallback:getUserListResponse,
				failureCallback:getUserListResponse
		};
		return httpRequest(dispatch,getState,request);
	}
}

export function getUserDetailsRequest() {
  return {
    type: types.MISC_USERDETAILS_REQUEST
  }
}

export function getUserDetailsResponse(response) {
  return {
    type: types.MISC_USERDETAILS_RESPONSE,
		 payload: response.data
  }
}

export function getUserDetails(_userId) {
    return function (dispatch,getState) {
        dispatch(getUserDetailsRequest());
        var request = {
            url:config.getUrl('getUserById')+_userId,
            method:'GET',
            successCallback:getUserDetailsResponse,
            failureCallback:getUserDetailsResponse
        };
        return httpRequest(dispatch,getState,request);
    }
}

export function updateUserDetailsRequest() {
    return {
        type: types.MISC_UPDATE_USERDETAILS_REQUEST
    }
}

export function updateUserDetailsResponse(response) {
	return {
		type: types.MISC_UPDATE_USERDETAILS_RESPONSE,
		 payload: response
	}
}

export function updateUserDetails(_name,_user) {
    return function (dispatch,getState) {
        dispatch(updateUserDetailsRequest());
        var _url="";
        switch(_name){
          case "email":
          _url = config.getUrl('updateUserEmail');
          break;
          case "name":
          _url = config.getUrl('updateUserName');
          break;
          // case "locked":
          // _url = config.getUrl('updateUserName');
          // break;
          // case "live":
          // _url = config.getUrl('updateUserName');
          // break;

        }
        var request = {
            url:_url,
            method:'PUT',
            data:_user,
            successCallback:updateUserDetailsResponse,
            failureCallback:updateUserDetailsResponse
        };
        return httpRequest(dispatch,getState,request);
    }
}
