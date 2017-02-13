import * as types from '../actions/actionTypes';
export function requestSelectFieldsChange(data,target){
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
		case types.ACCOUNT_COMPANY_CONTACT:
			return{
				 type: types.ACCOUNT_COMPANY_CONTACT,
				 payload:data
			}
			break;
		case types.ACCOUNT_COUNTRY_CHANGE:
			return{
				 type: types.ACCOUNT_COUNTRY_CHANGE,
				 payload:data
			}
			break;
			
	}
	
}
export function handleSelectFieldsChange(value,target){
	return function(dispatch) {
		dispatch(requestSelectFieldsChange(value,target));
		}
	
}

export function handleAccountNext(){
	return function(dispatch) {
		dispatch(requestAccountNext());
		}
	
}
export function requestAccountNext(){
			return{
				 type: types.ACCOUNT_NEXT,
			
			}
}
