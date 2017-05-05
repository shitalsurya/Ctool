import * as types from './../../common/commonActionTypes';
export default function(state = {
    data: ""
}, action = null) {
    switch (action.type) {
        case types.ACCOUNT_COMMINFO_NEXT:
            return Object.assign({}, state, {
                accountInfo: action.payload,
                showTechnicalDetails: true,
                showCommDetails: false,
                showInterfaceDetails: false,
								showReviewDetails: false
            });
        case types.ACCOUNT_TECHDETAILS_BACK:
            return Object.assign({}, state, {
                accountInfo: action.payload,
                showTechnicalDetails: false,
                showCommDetails: true,
                showInterfaceDetails: false,
									showReviewDetails: false
            });
        case types.ACCOUNT_TECHDETAILS_NEXT:
            return Object.assign({}, state, {
                accountInfo: action.payload,
                showTechnicalDetails: false,
                showCommDetails: false,
                showInterfaceDetails: true,
									showReviewDetails: false
            });
        case types.ACCOUNT_INTERFACEDETAILS_BACK:
            return Object.assign({}, state, {
                accountInfo: action.payload,
                showTechnicalDetails: true,
                showCommDetails: false,
                showInterfaceDetails: false,
									showReviewDetails: false
            });
        case types.ACCOUNT_INTERFACEDETAILS_NEXT:
            return Object.assign({}, state, {
                accountInfo: action.payload,
                showTechnicalDetails: false,
                showCommDetails: false,
                showInterfaceDetails: false,
									showReviewDetails: true
            });
        case types.ACCOUNT_REVIEWDETAILS_BACK:
            return Object.assign({}, state, {
                accountInfo: action.payload,
                showTechnicalDetails: false,
                showCommDetails: false,
                showInterfaceDetails: true,
                  showReviewDetails: false
            });
        default:
        case types.ACCOUNT_CREATE_NEW:
        case types.ACCOUNT_GET_COUNTRY_LIST_SUCCESS:
        case types.ACCOUNT_GET_COUNTRY_LIST_FAILURE:
            return Object.assign({}, state, {
                target: action.type,
                data: action.payload
            });
        case types.ACCOUNT_GET_COUNTRY_LIST:
        case types.ACCOUNT_CREATE_NEW_SUCCESS:
        case types.ACCOUNT_CREATE_NEW_FAILURE:
            return Object.assign({}, state, {
                target: action.type
            });
        case types.SUSPEND_ACC_INFO :
            return Object.assign({}, state, {
                data: action.payload
            });
        case types.GET_COMPANY_LIST_REQUEST:
    			return Object.assign({}, state, {});
    		case types.GET_COMPANY_LIST_RESPONSE:
          console.log("GET_COMPANY_LIST_RESPONSE==",action.payload.data);
    			return Object.assign({}, state, {companyList:action.payload.data,target:action.type});
        case types.ACTIVE_NAV_ITEM:
          return Object.assign({}, state, {
              nav: action.payload
          });
        case types.MISC_ACCOUNT_LIST_REQUEST:
          return Object.assign({}, state, {});
        case types.MISC_ACCOUNT_LIST_RESPONSE:
          return Object.assign({}, state, {acctList:action.payload,target:action.type});
          return state;
        case types.GET_EX_CONTACT_LIST_REQUEST:
    			return Object.assign({}, state, {});
    		case types.GET_EX_CONTACT_LIST_RESPONSE:
          console.log("GET_EX_CONTACT_LIST_RESPONSE==",action.payload.data);
    			return Object.assign({}, state, {exContactList:action.payload.data,target:action.type});
    }
};
