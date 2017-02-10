import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
require('../../scss/style.scss');


export default class SearchResults extends React.Component {
  render() {
	  this.data=this.props.Products || [];
	  var fields = [
	               'Company',
	               'Status',
	               'TPOA',
	               'RS','Type'
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
    return (
			      		<BootstrapTable data={this.data } pagination striped hover condensed  >
			      		 <TableHeaderColumn dataField='name' isKey dataSort={true} isKey>Name</TableHeaderColumn>
					      {listUsers}
			      		</BootstrapTable>
    		);
  }
}