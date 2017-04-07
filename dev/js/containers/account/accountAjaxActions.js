import React from 'react';
import Account from '../../../json/Account.json';

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
