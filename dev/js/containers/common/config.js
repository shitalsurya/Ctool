//Auth

export const serverIP ='localhost';
export const protocol ='http';
export const portNo ='8888';
function getServerUrl(){
	return protocol+'://'+serverIP+':'+portNo; //+'/ctool';
	// /auth/getToken';
}

export function getUrl(APIName){
	var APIUrls={
	        'getToken':'/auth/token',
			//Users Module
			'userList':'/users',
        	'getUserById':'/users/userid/',
			'updateUserEmail':'/users/email',
			'CreateAccount':'/account',
			'GetCountryList':'/countries/min',
			'getCountryById':'/countries/',
			'hubAccList':'/hub_accounts',
			'updateUserEmail':'/users/username'
	};
	return getServerUrl() +'/ctool'+ APIUrls[APIName];
}
