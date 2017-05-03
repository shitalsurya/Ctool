import * as types from './commonActionTypes';
import axios from 'axios';
import {getUserListResponse} from './../miscellaneous/users/miscUsersActions';
import {getCompanyListResponse} from './../account/actions/accountActions';
import * as config from './config';
		export function getList() {
		  return function(dispatch) {
		    dispatch(getUserListResponse())
		    dispatch(getCompanyListResponse())
		  }
		}
