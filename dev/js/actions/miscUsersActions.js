import * as types from '../actions/actionTypes';
import axios from 'axios';
import * as config from '../config.js';
import {httpRequest} from '../actions/httpActions'
import Users from '../../json/Users.json';
	export function getUserListRequest() {
		  return {
		    type: types.MISC_USERLIST_REQUEST
		  }
		}
		export function getUserListResponse(data) {
			  return {
			    type: types.MISC_USERLIST_RESPONSE,
					 payload: Users
			  }
			}

	export function getUserList() {
		return function (dispatch,getState) {
			dispatch(getUserListResponse());
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
