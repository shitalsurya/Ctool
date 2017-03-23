import * as types from '../../../containers/account/actions/accountActions';
export default function (state = {
	data:""
}
, action = null) {
	switch(action.type) {
		case types.ACCOUNT_MGR_CHANGE:
		case types.ACCOUNT_COMPANY_CHANGE:
		case types.ACCOUNT_COMPANY_CONTACT:
		case types.ACCOUNT_COUNTRY_CHANGE:
		case types.ACCOUNT_BILLING_LOCATION:
		case types.SERVICE_LEVEL:
		case types.TRAFFIC_TYPE:
		case types.ACCOUNT_EXSTACCTS_CHANGE:
		case types.ACCOUNT_INTERFACE_CHANGE:
        case types.ACCOUNT_CREATE_NEW:
		case types.ACCOUNT_GET_COUNTRY_LIST_SUCCESS:
		case types.ACCOUNT_GET_COUNTRY_LIST_FAILURE:
			return Object.assign({}, state, {target:action.type,data:action.payload });
		case types.ACCOUNT_GET_COUNTRY_LIST:
		case types.ACCOUNT_CREATE_NEW_SUCCESS:
		case types.ACCOUNT_CREATE_NEW_FAILURE:
			return Object.assign({}, state, {target:action.type });
		case types.ACCOUNT_COMMINFO_NEXT:
			return Object.assign({}, state, {accountCommInfo:action.payload,showTechnicalDetails:true,showCommDetails:false });
		case types.ACCOUNT_TECHDETAILS_BACK:
			return Object.assign({}, state, {accountCommInfo:action.payload,showTechnicalDetails:false,showCommDetails:true });
		default:
			return state;
	}
};
