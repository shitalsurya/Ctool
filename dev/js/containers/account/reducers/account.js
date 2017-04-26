import * as types from '../../../containers/account/actions/accountActionTypes';
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
        case types.ACCOUNT_GET_COMPANY_LIST:
        case types.ACCOUNT_GET_COMPANY_LIST_SUCCESS:
        case types.ACCOUNT_GET_COMPANY_LIST_FAILURE:
            return Object.assign({}, state, {
                target: action.type
            });
        case types.ACTIVE_NAV_ITEM:
        return Object.assign({}, state, {
            data: action.payload
        });

            return state;
    }
};
