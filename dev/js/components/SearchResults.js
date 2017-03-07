import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
require('../../scss/style.scss');
import Products from '../../json/Products.json';

export default class SearchResults extends React.Component {
  render() {
	  this.data=Products.data;//this.props.Products || [];
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
        <div className="controls-container">
			      		<BootstrapTable   tableStyle={ { border: '#ffffff 0px ' } }
                bodyStyle={ {border: '#ffffff 0px ' }} data={this.data } striped bordered="false" >
			      		 <TableHeaderColumn dataField='name' isKey dataSort={true} isKey>Name</TableHeaderColumn>
					      {listUsers}
			      		</BootstrapTable>
                </div>
    		);
  }
}
