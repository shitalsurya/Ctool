import * as types from './commonActionTypes';
import axios from 'axios';
import {getUserListResponse} from './../miscellaneous/users/miscUsersActions';
import {getCountryListResponse} from './../miscellaneous/countries/miscCntryActions';
import {getCompanyListResponse,getExContactListResponse} from './../account/actions/accountActions';
import * as config from './config';
		export function getList(category) {
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
				}
		  }
		}
