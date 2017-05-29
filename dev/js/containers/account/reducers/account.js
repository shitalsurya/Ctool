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
        case types.SUSPEND_ACC_INFO_REQUEST:
          return Object.assign({}, state, {});
        case types.SUSPEND_ACC_INFO_RESPONSE:
          console.log("SUSPEND_ACC_INFO_RESPONSE==",action.payload);
          if(action.payload.status==200){
              return Object.assign({}, state, {suspendStatus:true,target:action.type});
          }
          else{
              return Object.assign({}, state, {suspendStatus:false,target:action.type});
          }
        case types.REACTIVATE_ACC_INFO_REQUEST:
          return Object.assign({}, state, {});
        case types.REACTIVATE_ACC_INFO_RESPONSE:
          console.log("REACTIVATE_ACC_INFO_RESPONSE==",action.payload);
          if(action.payload.status==200){
    					return Object.assign({}, state, {suspendStatus:true,target:action.type});
    			}
    			else{
    					return Object.assign({}, state, {suspendStatus:false,target:action.type});
    			}
        case types.CLOSE_ACC_INFO_REQUEST:
          return Object.assign({}, state, {});
        case types.CLOSE_ACC_INFO_RESPONSE:
          console.log("CLOSE_ACC_INFO_RESPONSE==",action.payload);
          if(action.payload.status==200){
              return Object.assign({}, state, {suspendStatus:true,target:action.type});
          }
          else{
              return Object.assign({}, state, {suspendStatus:false,target:action.type});
          }
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

          case types.GET_ACC_CNL_REQUEST:
          case types.GET_ACC_CONTACTS_REQUEST:
            case types.ADD_ACC_CNL_REQUEST:
              case types.UPDATE_ACC_CNL_REQUEST:
              case types.DELETE_ACC_CNL_REQUEST:
          case types.UPDATE_ACCT_MGR_REQUEST:
              case types.GET_ACCT_GENERAL_TECH_INFO_REQUEST:
            return Object.assign({}, state, {});
          case types.UPDATE_ACCT_MGR_RESPONSE:
            console.log("UPDATE_ACCT_MGR_RESPONSE==",action.payload);
            if(action.payload.status==200){
                return Object.assign({}, state, {updateStatus:true,target:action.type});
            }
            else{
                return Object.assign({}, state, {updateStatus:false,target:action.type});
            }


        case types.GET_ACCT_GENERAL_TECH_INFO_RESPONSE:
          console.log("GET_ACCT_GENERAL_TECH_INFO_RESPONSE==",action.payload);
          return Object.assign({}, state, {infoGenTech:action.payload,target:action.type});
        case types.GET_ACCT_GENERAL_VOL_INFO_REQUEST:
          return Object.assign({}, state, {});
        case types.GET_ACCT_GENERAL_VOL_INFO_RESPONSE:
          console.log("GET_ACCT_GENERAL_VOL_INFO_RESPONSE==",action.payload);
          return Object.assign({}, state, {infoGenVol:action.payload,target:action.type});
        case types.GET_ACCT_GENERAL_MT_INFO_REQUEST:
          return Object.assign({}, state, {});
        case types.GET_ACCT_GENERAL_MT_INFO_RESPONSE:
          console.log("GET_ACCT_GENERAL_MT_INFO_RESPONSE==",action.payload);
          return Object.assign({}, state, {infoGenMT:action.payload,target:action.type});
        case types.GET_ACCT_GENERAL_MO_INFO_REQUEST:
          return Object.assign({}, state, {});
        case types.GET_ACCT_GENERAL_MO_INFO_RESPONSE:
          console.log("GET_ACCT_GENERAL_MO_INFO_RESPONSE==",action.payload);
          return Object.assign({}, state, {infoGenMO:action.payload,target:action.type});
        case types.GET_ACCT_GENERAL_DELV_INFO_REQUEST:
          return Object.assign({}, state, {});
        case types.GET_ACCT_GENERAL_DELV_INFO_RESPONSE:
          console.log("GET_ACCT_GENERAL_DELV_INFO_RESPONSE==",action.payload);
          return Object.assign({}, state, {infoGenDelivery:action.payload,target:action.type});
          case types.GET_ACC_CNL_RESPONSE:
            console.log("GET_ACC_CNL_RESPONSE==",action.payload);
            if(action.payload.status==200){
                return Object.assign({}, state, {infoGenCnl:action.payload.data,target:action.type});
            }
            else{
                return Object.assign({}, state, {infoGenCnl:[],target:action.type});
            }
          case types.GET_ACC_CONTACTS_RESPONSE:
            console.log("GET_ACC_CONTACTS_RESPONSE==",action.payload);
            if(action.payload.status==200){
                return Object.assign({}, state, {infoGenContacts:action.payload.data,target:action.type});
            }
            else{
                return Object.assign({}, state, {infoGenContacts:[],target:action.type});
            }


            case types.ADD_ACC_CNL_RESPONSE:
              console.log("ADD_ACC_CNL_RESPONSE==",action.payload);
              if(action.payload.status==200){
                  return Object.assign({}, state, {addStatus:true,target:action.type});
              }
              else{
                  return Object.assign({}, state, {addStatus:false,target:action.type});
              }
              case types.ADD_ACC_CONTACT_RESPONSE:
                console.log("ADD_ACC_CONTACT_RESPONSE==",action.payload);
                if(action.payload.status==201){
                    return Object.assign({}, state, {addStatus:true,contactid:action.payload.data,target:action.type});
                }
                else{
                    return Object.assign({}, state, {addStatus:false,target:action.type});
                }
              case types.UPDATE_ACC_CNL_RESPONSE:
                console.log("UPDATE_ACC_CNL_RESPONSE==",action.payload);
                if(action.payload.status==200){
                    return Object.assign({}, state, {updateStatus:true,target:action.type});
                }
                else{
                    return Object.assign({}, state, {updateStatus:false,target:action.type});
                }
                case types.UPDATE_ACC_CONTACT_RESPONSE:
                  console.log("UPDATE_ACC_CONTACT_RESPONSE==",action.payload);
                  if(action.payload.status==200){
                      return Object.assign({}, state, {updateStatus:true,target:action.type});
                  }
                  else{
                      return Object.assign({}, state, {updateStatus:false,target:action.type});
                  }

                case types.DELETE_ACC_CNL_RESPONSE:
                  console.log("DELETE_ACC_CNL_RESPONSE==",action.payload);
                  if(action.payload.status==200){
                      return Object.assign({}, state, {deleteStatus:true,target:action.type});
                  }
                  else{
                      return Object.assign({}, state, {deleteStatus:false,target:action.type});
                  }
                  case types.DELETE_ACC_CONTACT_RESPONSE:
                    console.log("DELETE_ACC_CNL_RESPONSE==",action.payload);
                    if(action.payload.status==200){
                        return Object.assign({}, state, {deleteStatus:true,target:action.type});
                    }
                    else{
                        return Object.assign({}, state, {deleteStatus:false,target:action.type});
                    }
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
          console.log("GET_EX_CONTACT_DETAILS_RESPONSE==",action.payload);
          if(action.payload.status==200){
            return Object.assign({}, state, {contactDetails:action.payload.data,target:action.type});
          }
          else{
            return Object.assign({}, state, {contactDetails:null,target:action.type});
          }

        return state;
    }
};
