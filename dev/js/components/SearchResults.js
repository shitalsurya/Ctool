import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
require('../../scss/style.scss');
import Products from '../../json/Products.json';


export default class SearchResults extends React.Component {
	 componentWillReceiveProps (nextProps) {
		  console.log(" nextProps==", nextProps.Products);
     }
  render() {
	
	  console.log(" Products.data==", Products.data);
	  var data=Products.data;//this.props.Products;
	  var fields = [
	               'one',
	               'two'
	            ];
	  var listUsers = fields.map(function (field) {
          return (
        		  <TableHeaderColumn
                  dataField={field}
                  dataSort={true}>
                
                  {field}
              </TableHeaderColumn>
          );
      });
//	  var listUsers = fields.map(function (field) {
//          return (
//        		  <TableHeaderColumn
//                  dataField={field.id}
//                  dataSort={true}
//                  key={field.id}
//                  isKey={field.isKey || false}>
//                  {field.name}
//              </TableHeaderColumn>
/*	  <TableHeaderColumn dataField='name'  isKey>Name</TableHeaderColumn>
      <TableHeaderColumn >Company</TableHeaderColumn>
      <TableHeaderColumn >Status</TableHeaderColumn>
      <TableHeaderColumn >TPOA</TableHeaderColumn>
      <TableHeaderColumn >RS</TableHeaderColumn>
      <TableHeaderColumn >Type</TableHeaderColumn>
      <TableHeaderColumn >Interface</TableHeaderColumn>
      <TableHeaderColumn >Restr.</TableHeaderColumn>
      <TableHeaderColumn >Billing Location</TableHeaderColumn>*/
//          );
//      });
    return (
			      		<BootstrapTable data={data } pagination striped hover condensed  >
			      		 <TableHeaderColumn dataField='name'  isKey>Name</TableHeaderColumn>
					      {listUsers}
			      		</BootstrapTable>
    		);
  }
}