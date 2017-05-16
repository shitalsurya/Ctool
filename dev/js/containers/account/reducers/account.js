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
            return Object.assign({}, state, {
                target: action.type,
                data: action.payload
            });
        case types.ACCOUNT_CREATE_NEW_SUCCESS:
        case types.ACCOUNT_CREATE_NEW_FAILURE:
            return Object.assign({}, state, {
                target: action.type
            });
        case types.SUSPEND_ACC_INFO :
            return Object.assign({}, state, {
                data: action.payload
            });
        case types.REACTIVATE_ACC_INFO :
            return Object.assign({}, state, {
                data: action.payload
            });
        case types.CLOSE_ACC_INFO :
            return Object.assign({}, state, {
                data: action.payload
            });
        case types.ACTIVE_NAV_ITEM:
          return Object.assign({}, state, {
              nav: action.payload
          });

    			return Object.assign({}, state, {exContactList:action.payload.data,target:action.type});
          case types.GET_ACCT_FORCED_TPOA_LIST_REQUEST:
            return Object.assign({}, state, {});
          case types.GET_ACCT_FORCED_TPOA_LIST_RESPONSE:
            console.log("GET_ACCT_FORCED_TPOA_LIST_RESPONSE==",action.payload);
            return Object.assign({}, state, {TPOAinfo:action.payload,target:action.type});
          case types.GET_ACCT_GENERAL_COMM_INFO_REQUEST:
            return Object.assign({}, state, {});
          case types.GET_ACCT_GENERAL_COMM_INFO_RESPONSE:
            console.log("GET_ACCT_GENERAL_COMM_INFO_RESPONSE==",action.payload);
            return Object.assign({}, state, {infoGenComm:action.payload,target:action.type});
        case types.CREATE_ACCOUNT_TYPE:
          return Object.assign({}, state, {
            accType: action.payload,
            accountInfo: {},
            showTechnicalDetails: false,
            showCommDetails: true,
            showInterfaceDetails: false,
            showReviewDetails: false
          });
        case types.GET_EX_CONTACT_DETAILS_REQUEST:
    			return Object.assign({}, state, {});
    		case types.GET_EX_CONTACT_DETAILS_RESPONSE:
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
    			return Object.assign({}, state, {contactDetails:_data,target:action.type});
        return state;
    }
};
