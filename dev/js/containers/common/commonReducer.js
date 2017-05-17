import * as types from './commonActionTypes';
export default function (state = {}, action = null) {
	console.log("in route reducer");
	switch(action.type) {
		case  types.GET_COMPANY_LIST_REQUEST :
			return Object.assign({}, state, {});
		case  types.GET_COMPANY_LIST_RESPONSE :
			// console.log("GET_COMPANY_LIST_RESPONSE==",action.payload.data);

			if(action.payload.status==200){
					return Object.assign({}, state, {compList:action.payload.data,target:action.type});
			}

		case types.GET_EX_CONTACT_LIST_REQUEST:
			return Object.assign({}, state, {});
		case types.GET_EX_CONTACT_LIST_RESPONSE:
			console.log("GET_EX_CONTACT_LIST_RESPONSE==",action.payload);
			if(action.payload.status==200){
					return Object.assign({}, state, {exContactList:action.payload.data,target:action.type});
			}

		case types.MISC_ACCOUNT_LIST_REQUEST:
			return Object.assign({}, state, {});
		case types.MISC_ACCOUNT_LIST_RESPONSE:
			return Object.assign({}, state, {acctList:action.payload,target:action.type});
			case types.GET_BILLINGLOCATION_LIST_REQUEST:
				return Object.assign({}, state, {});
			case types.GET_BILLINGLOCATION_LIST_RESPONSE:
			if(action.payload.status==200){
					return Object.assign({}, state, {billingLocationList:action.payload.data,target:action.type});
			}
		case types.GET_SMSC_LIST_REQUEST:
			return Object.assign({}, state, {});
		case types.GET_SMSC_LIST_RESPONSE:
			return Object.assign({}, state, {smscList:action.payload,target:action.type});
		case types.GET_VOLUMETYPE_LIST_REQUEST:
			return Object.assign({}, state, {});
		case types.GET_VOLUMETYPE_LIST_RESPONSE:
			return Object.assign({}, state, {volTypeList:action.payload,target:action.type});
		case types.GET_MWNOTIF_LIST_REQUEST:
			return Object.assign({}, state, {});
		case types.GET_MWNOTIF_LIST_RESPONSE:
			return Object.assign({}, state, {mwNotiflist:action.payload,target:action.type});
		case types.GET_SMSCNOTIF_LIST_REQUEST:
			return Object.assign({}, state, {});
		case types.GET_SMSCNOTIF_LIST_RESPONSE:
			return Object.assign({}, state, {smscNotiflist:action.payload,target:action.type});
		case types.GET_MOBILENOTIF_LIST_REQUEST:
			return Object.assign({}, state, {});
		case types.GET_MOBILENOTIF_LIST_RESPONSE:
			return Object.assign({}, state, {mobileNotiflist:action.payload,target:action.type});
		case types.GET_STARTTIME_LIST_REQUEST:
			return Object.assign({}, state, {});
		case types.GET_STARTTIME_LIST_RESPONSE:
			return Object.assign({}, state, {startTimeList:action.payload,target:action.type});
		case types.GET_ENDTIME_LIST_REQUEST:
			return Object.assign({}, state, {});
		case types.GET_ENDTIME_LIST_RESPONSE:
			return Object.assign({}, state, {endTimeList:action.payload,target:action.type});
		default:
			return state;
	}
};
