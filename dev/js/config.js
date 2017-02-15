//Auth

export const serverIP ='10.19.4.89';
export const protocol ='http';
export const portNo ='8080';
function getServerUrl(){
	return protocol+'://'+serverIP+':'+portNo;
	// /auth/getToken';
}

export function getUrl(APIName){
	var APIUrls={
	             'UserAuth':'/auth/token',
				'CreateAccount':'/account',
				'GetCountryList':'/country/countries'
				};
	return getServerUrl() +'/ctool'+ APIUrls[APIName];
}




