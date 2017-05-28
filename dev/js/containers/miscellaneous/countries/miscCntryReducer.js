import * as types from './../../common/commonActionTypes';
export default function (state = {}, action = null) {
	console.log("in users reducer");
	switch(action.type) {


		case types.MISC_COUNTRYLIST_REQUEST:
		case types.GET_CNTRY_CNL_LIST_REQUEST:
			return Object.assign({}, state, {});
		case types.MISC_COUNTRYLIST_RESPONSE:
			if(action.payload.status==200){
				return Object.assign({}, state, {countryList:action.payload.data,target:action.type});
			}
			else{
					return Object.assign({}, state, {countryList:[],target:action.type});
			}
			case types.GET_CNTRY_CNL_LIST_RESPONSE:
				if(action.payload.status==200){
					return Object.assign({}, state, {countryCnlList:action.payload.data,target:action.type});
				}
				else{
						return Object.assign({}, state, {countryCnlList:[],target:action.type});
				}
		case types.MISC_COUNTRYDETAILS_REQUEST:
			return Object.assign({}, state, {});
		case types.MISC_COUNTRYDETAILS_RESPONSE:
			if(action.payload.status==200){
					return Object.assign({}, state, {countryDetails:action.payload.data,target:action.type});
			}
			else{
					return Object.assign({}, state, {countryDetails:null,target:action.type});
			}
		case types.MISC_UPDATE_COUNTRYDETAILS_REQUEST:
			return Object.assign({}, state, {});
		case types.MISC_UPDATE_COUNTRYDETAILS_RESPONSE:
			return Object.assign({}, state, {countryDetails:action.payload.data,target:action.type});

		default:
			return state;
	}
};
