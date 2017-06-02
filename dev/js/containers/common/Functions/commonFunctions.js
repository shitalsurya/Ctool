import React from 'react';
        export const tableOptions={
          expandRowBgColor: '#f7f8fa',
          clearSearch: true,
          page: 1,  // which page you want to show as default
          sizePerPageList: [ {
            text: '5', value: 5
          }, {
            text: '10', value: 10
          }, {
            text: 'All', value: 50
          } ], // you can change the dropdown list for size per page
          sizePerPage: 5,  // which size per page you want to locate as default
          pageStartIndex: 1, // where to start counting the pages
          paginationSize: 3,  // the pagination bar size.
          prePage: '<', // Previous page button text
          nextPage: '>', // Next page button text
          firstPage: '<<', // First page button text
          lastPage: '>>', // Last page button text
          alwaysShowAllBtns: false, // Always show next and previous button
          //  withFirstAndLast: false // Hide the going to First and Last page button
        };
        export function initializeSelectOptions(_list,nameField,valField){
          console.log("initializeSelectOptions",_list);
          // var obj={};
          // if(_list[0][valField] !== ""){
          //   obj[nameField]="Please select..";
          //   obj[valField]="";
          //   _list.unshift(obj);
          // }
           if(typeof(_list)!='undefined'){
          var _options = _list.map(function (item) {
            return (
              <option key={item[valField]}
                value={item[valField]} >
                {item[nameField]}
              </option>
            );
          }.bind(this));
          return _options;
        }
        }
        export function initializeTypeAheadData(_list,valField,keyField){
          console.log("initializeTypeAheadData==",_list);
          var list = _list.map(function (item, index) {
                return (
                  {
                    "id":item[keyField],
                    "label":item[valField],
                  }
                );
            }.bind(this));
            return list;
        }
        export function formatMOData(_list){
            console.log("formatMOData _list==",JSON.stringify(_list));
          var group_to_values = _list.reduce(function(obj,item){
              obj[item.countryid] = obj[item.countryid] || [];
              obj[item.countryid].push(item);
              return obj;
          }, {});

        console.log("formatMOData group_to_values=="+JSON.stringify(group_to_values));
          var groups = Object.keys(group_to_values).map(function(key){
            console.log("group_to_values[key].countryname=",group_to_values[key][0].countryname);
              return {countryid: key,countryname: group_to_values[key][0].countryname, expand: group_to_values[key]
              };
          });
            console.log("formatMOData=="+JSON.stringify(groups));
            return groups;
          }
  export function formatMTData(_list){
      console.log("formatMTData _list==",JSON.stringify(_list));
    var group_to_values = _list.reduce(function(obj,item){
        obj[item.countryid] = obj[item.countryid] || [];
        obj[item.countryid].push(item);
        return obj;
    }, {});

  console.log("formatMTData group_to_values=="+JSON.stringify(group_to_values));
    var groups = Object.keys(group_to_values).map(function(key){
      var test = group_to_values[key].reduce(function(obj,item){
            obj[item.operatorid] = obj[item.operatorid] || [];
            obj[item.operatorid].push(item);
            return obj;
        }, {})
        var testgroups = Object.keys(test).map(function(key){
          console.log("test[key]==",test[key]);
               return {operatorid: key,operatorname: test[key][0].operatorname, expand: test[key]
              };
           });
           console.log("formatMTData testgroups=="+JSON.stringify(testgroups));
        return {countryid: key,countryname: testgroups[0].expand[0].countryname, expand: testgroups
        };
    });
      console.log("formatMTData=="+JSON.stringify(groups));
      return groups;
  }
