//Auth

export const serverIP ='10.19.4.109';
export const protocol ='http';
export const portNo ='3000';
function getServerUrl(){
	return protocol+'://'+serverIP+':'+portNo;
	// /auth/getToken';
}

export function getUrl(APIName){
	var APIUrls={
	             'UserAuth':'/auth/getToken'
				};
	return getServerUrl() + APIUrls[APIName];
}




