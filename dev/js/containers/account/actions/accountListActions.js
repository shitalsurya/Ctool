import * as types from './../../common/commonActionTypes';
import axios from 'axios';
import * as config from '../../../containers/common/config';
import {httpRequest} from '../../../containers/common/commonAjaxActions';
var accounts =[
  {
    "name": "3434444_HTTP",
    "customertype": "HTTP/HTTP",
    "rsflag": 0,
    "customerid": 31359,
    "suspenddate": "12 Oct 2006 03:54:02AM",
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 0,
    "accountmanager": {
      "contactid": 20011,
      "email": "anthony.delorme@mobile365.com",
      "name": "Anthony Delorme"
    }
  },
  {
    "name": "QWQWQWE_IN365_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 31977,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 20011,
      "email": "anthony.delorme@mobile365.com",
      "name": "Anthony Delorme"
    }
  },
  {
    "name": "STAGNG1_IN365_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 31962,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35280,
      "email": "andrea.ramponi@mobile365.com",
      "name": "Andrea Ramponi"
    }
  },
  {
    "name": "TECHEMAIL_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 31926,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35288,
      "email": "alexandre.szyda@mobile365.com",
      "name": "Alexandre Szyda"
    }
  },
  {
    "name": "T567_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 31932,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35331,
      "email": "benjamin.wood@mobile365.com",
      "name": "Benjamin Wood"
    }
  },
  {
    "name": "DEMO_HUB_1_HTTP",
    "customertype": "HTTP/HTTP",
    "rsflag": 0,
    "customerid": 32048,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35331,
      "email": "benjamin.wood@mobile365.com",
      "name": "Benjamin Wood"
    }
  },
  {
    "name": "TECHEMAIL5_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 31930,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "TECHEMAIL112_HTTP",
    "customertype": "HTTP/HTTP",
    "rsflag": 0,
    "customerid": 31936,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "TECHEMAIL16_IN365_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 31942,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "TECHIN365_IN365_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 31958,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "TECHSWIFT1_SMPP",
    "customertype": "SMPPSWIFTLET/SMPPSWIFTLET",
    "rsflag": 0,
    "customerid": 31964,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "SMTPACC1_SMTP",
    "customertype": "SMTP/SMTP",
    "rsflag": 0,
    "customerid": 31967,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "TECHIN365NEW_IN365_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 31980,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "KIRA123_IN365_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 31991,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "KIRAN124_HTTP",
    "customertype": "HTTP/HTTP",
    "rsflag": 0,
    "customerid": 31994,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "KIE1425_SMTP",
    "customertype": "SMTP/SMTP",
    "rsflag": 0,
    "customerid": 31995,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "JUKI1234_SMPP",
    "customertype": "SMPPSWIFTLET/SMPPSWIFTLET",
    "rsflag": 0,
    "customerid": 31997,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "KIRAN_HTTP",
    "customertype": "HTTP/HTTP",
    "rsflag": 0,
    "customerid": 32001,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "KIU",
    "customertype": "HTTP/HTTP",
    "rsflag": 0,
    "customerid": 32002,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "KIE253_IN365_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 32003,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "KIRAN756_IN365_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 32004,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "KIE2535_SMPP",
    "customertype": "SMPPSWIFTLET/SMPPSWIFTLET",
    "rsflag": 0,
    "customerid": 32036,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "KIEMAIL_IN365_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 32038,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "KIOU123_HTTP",
    "customertype": "HTTP/HTTP",
    "rsflag": 0,
    "customerid": 32039,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "KIE2535_SMTP",
    "customertype": "SMTP/SMTP",
    "rsflag": 0,
    "customerid": 32040,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "KIP123_SMPP",
    "customertype": "SMPP/SMPP",
    "rsflag": 0,
    "customerid": 32041,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "KIRA12_IN365_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 32051,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35368,
      "email": "Adam.brito@sybase.com",
      "name": "Adam Brito"
    }
  },
  {
    "name": "DEMO_HUB_2_HTTP",
    "customertype": "HTTP/HTTP",
    "rsflag": 0,
    "customerid": 32049,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35375,
      "email": "Andre.Moeller@sybase.com",
      "name": "Andre Moeller"
    }
  },
  {
    "name": "SAP_IN365UAT_IN365_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 31976,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35378,
      "email": "test@test.com",
      "name": "test"
    }
  },
  {
    "name": "KIRA2_IN365_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 31987,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35378,
      "email": "test@test.com",
      "name": "test"
    }
  },
  {
    "name": "APPLE_HTTP",
    "customertype": "HTTP/HTTP",
    "rsflag": 0,
    "customerid": 31354,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35394,
      "email": "35394@sybase.com",
      "name": "35394"
    }
  },
  {
    "name": "TECHEMAIL2_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 31927,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35394,
      "email": "35394@sybase.com",
      "name": "35394"
    }
  },
  {
    "name": "TECHEMAIL3_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 31928,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35394,
      "email": "35394@sybase.com",
      "name": "35394"
    }
  },
  {
    "name": "TECHEMAIL4_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 31929,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35396,
      "email": "achavez@sybase.com",
      "name": "Adrian Chavez Batta"
    }
  },
  {
    "name": "TECHEMAIL6_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 31931,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35396,
      "email": "achavez@sybase.com",
      "name": "Adrian Chavez Batta"
    }
  },
  {
    "name": "TECHEMAIL10_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 31934,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35396,
      "email": "achavez@sybase.com",
      "name": "Adrian Chavez Batta"
    }
  },
  {
    "name": "TECHEMAIL14_IN365_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 31938,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35396,
      "email": "achavez@sybase.com",
      "name": "Adrian Chavez Batta"
    }
  },
  {
    "name": "TECHEMAIL17_IN365_EMAIL",
    "customertype": "IN365_EMAIL",
    "rsflag": 0,
    "customerid": 31943,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35396,
      "email": "achavez@sybase.com",
      "name": "Adrian Chavez Batta"
    }
  },
  {
    "name": "TECHSWIFT_SMPP",
    "customertype": "SMPPSWIFTLET/SMPPSWIFTLET",
    "rsflag": 0,
    "customerid": 31959,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35396,
      "email": "achavez@sybase.com",
      "name": "Adrian Chavez Batta"
    }
  },
  {
    "name": "TECHSMPP_SMPP",
    "customertype": "SMPP/SMPP",
    "rsflag": 0,
    "customerid": 31963,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35396,
      "email": "achavez@sybase.com",
      "name": "Adrian Chavez Batta"
    }
  },
  {
    "name": "GHYU123_SMPP",
    "customertype": "SMPP/SMPP",
    "rsflag": 0,
    "customerid": 31996,
    "suspenddate": null,
    "company": {
      "companyid": 40020,
      "companyname": "$"
    },
    "liveaccount": 1,
    "accountmanager": {
      "contactid": 35396,
      "email": "achavez@sybase.com",
      "name": "Adrian Chavez Batta"
    }
  }
]

export function getHubAcctList(_reqParam) {
	return function (dispatch,getState) {
		dispatch(getHubAcctListRequest());
		if(typeof(_reqParam)!='undefined'){
			var _url = config.getUrl('hub_accounts')+_reqParam
		}
		else{
			var _url = config.getUrl('hub_accounts');
		}
		var request = {
			url:_url,
			method:'GET',
			successCallback:getHubAcctListResponse,
			failureCallback:getHubAcctListResponse
		};
		return httpRequest(dispatch,getState,request);
	}
}

export function getHubAcctListRequest() {
  return {
    type: types.MISC_ACCOUNT_LIST_REQUEST
  }
}

export function getHubAcctListResponse(response) {
  return {
    type: types.MISC_ACCOUNT_LIST_RESPONSE,
		 payload: response.data
		//  payload:accounts
  }
}
