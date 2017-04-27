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
export function initializeSelectOptions(_list,valField){
  console.log("initializeSelectOptions==",_list);
  var list = _list.map(function (item) {
        return (
          {
            "label":item.name,
            "value":item[valField],
          }
        );
    }.bind(this));
    return list;
}
