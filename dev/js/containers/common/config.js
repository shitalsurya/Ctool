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
			'updateCountryName':'/countries/countryname',
			'enableCNL':'/countries/cnl',//enableCNL
				'updateCustCNL':'/countries/cnloptions',//customer,
					'updateNL':'/countries/numberlookupoptions',//updateNL
			'hubAccList':'/hub_accounts',
			'updateUserName':'/users/username'
	};
	return getServerUrl() +'/ctool'+ APIUrls[APIName];
}
