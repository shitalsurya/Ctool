import * as types from '../actions/actionTypes';
export function requestAccountNext(data,target){
	switch(target){
		case types.ACCOUNT_MGR_CHANAGE:
			return{
				 type: types.ACCOUNT_MGR_CHANAGE,
				 payload:data
			
			}
			break;
		case types.ACCOUNT_COMPANY_CHANAGE:
			return{
				 type: types.ACCOUNT_COMPANY_CHANAGE,
				 payload:data
			}
			break;
	}
	
}
export function handleSelectFieldsChange(value,target){
	return function(dispatch) {
		dispatch(requestAccountNext(value,target));
		}
	
}