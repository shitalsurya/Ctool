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

		//	'CreateAccount':'/account',
			'GetCountryList':'/countries/min',
			'getCountryById':'/countries/',
			'updateCountryName':'/countries/countryname',
			'enableCNL':'/countries/cnl',//enableCNL
				'updateCustCNL':'/countries/cnloptions',//customer,
					'updateNL':'/countries/numberlookupoptions',//updateNL
			'hub_accounts':'/hub_accounts',
			'updateUserName':'/users/username',
			'updateUserEmail':'/users/email',
			'lockUser':'/users/lock',
			'unlockUser':'/users/unlock',
			'updateHomepage':'/users/homepage',
			'updateUserRole':'/users/role',
				'reliveUser':'/users/relive',
			'getCompanyList':'/companies/min',
			'getBillingLocationList':'/billing_locations/min',
			'getCompanyContacts':'/contacts',
			'getManagerList':'/hub_accounts/managers',
			'getNumberLookupOptions':'/numberlookupoptions'
	};
	return getServerUrl() +'/ctool'+ APIUrls[APIName];
}
