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
          var obj={};
          if(_list[0][valField] !== ""){
            obj[nameField]="Please select..";
            obj[valField]="";
            _list.unshift(obj);
          }
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
        export function initializeTypeAheadData(_list,valField,keyField){
          console.log("initializeData==",_list);
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
