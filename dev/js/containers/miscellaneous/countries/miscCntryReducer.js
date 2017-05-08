import * as types from './../../common/commonActionTypes';
export default function (state = {}, action = null) {
	console.log("in users reducer");
	switch(action.type) {
		case types.MISC_COUNTRYLIST_REQUEST:
			return Object.assign({}, state, {});
		case types.MISC_COUNTRYLIST_RESPONSE:
			return Object.assign({}, state, {countryList:action.payload.data,target:action.type});

		case types.MISC_COUNTRYDETAILS_REQUEST:
			return Object.assign({}, state, {});
		case types.MISC_COUNTRYDETAILS_RESPONSE:
			var _data={};
			if(typeof(action.payload)!='undefined'){
				_data = {
					details:action.payload
				}
			}
			else {
				_data = {
					details:"No data available."
				}
			}
			return Object.assign({}, state, {countryDetails:_data,target:action.type});

		case types.MISC_UPDATE_COUNTRYDETAILS_REQUEST:
			return Object.assign({}, state, {});
		case types.MISC_UPDATE_COUNTRYDETAILS_RESPONSE:
			var _data={};
			if(typeof(action.payload)!='undefined'){
				_data = {
					details:action.payload
				}
			}
			else {
				_data = {
					details:"Failed to update user details."
				}
			}
			return Object.assign({}, state, {countryDetails:_data,target:action.type});

		default:
			return state;
	}
};
