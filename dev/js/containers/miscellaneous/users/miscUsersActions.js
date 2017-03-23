import * as types from '../../../containers/common/commonActions';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonActions'
import Users from '../../../../json/Users.json';
import UserDetails1 from '../../../../json/UserDetails1.json';
import UserDetails2 from '../../../../json/UserDetails2.json';
import updatedUserDetails from '../../../../json/updatedUserDetails.json';
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
	export function getUserDetailsRequest() {
		  return {
		    type: types.MISC_USERDETAILS_REQUEST
		  }
		}
		export function getUserDetailsResponse1(data) {
			  return {
			    type: types.MISC_USERDETAILS_RESPONSE,
					 payload: UserDetails1
			  }
			}
			export function getUserDetailsResponse2(data) {
					return {
						type: types.MISC_USERDETAILS_RESPONSE,
						 payload: UserDetails2
					}
				}
	export function getUserDetails(_userId) {
		switch (_userId) {
			case 1:
				return function (dispatch,getState) {
					dispatch(getUserDetailsResponse1());
				}
				break;
				case 2:
					return function (dispatch,getState) {
						dispatch(getUserDetailsResponse2());
					}
					break;
			default:

		}
	}

	export function updateUserDetails(_user) {
		return function (dispatch,getState) {
			dispatch(updateUserDetailsResponse());
		}
	}

	export function updateUserDetailsResponse(data) {
			return {
				type: types.MISC_UPDATE_USERDETAILS_RESPONSE,
				 payload: updatedUserDetails
			}
		}
