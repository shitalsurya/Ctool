import React from 'react';
import Company from '../../../json/Company.json';
import * as types from './actions/accountActionTypes';

export function getSpndAccount(spndAccObj) {

  var updatedAccountList = { "data":[ ]};
  const accList = spndAccObj["accounts"].data;

  for (var key in accList) {
    if(spndAccObj["company"] == accList[key].company) {
      updatedAccountList.data.push(accList[key]);
    }
  }

  return updatedAccountList;
}

export function getDataList(listType) {
  var list = { "data":[ ]};
  switch(listType.type) {
    case types.ACCOUNT_GET_COMPANY_LIST:
      list = Company;
      break;
  }
  return list;
}
