import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
require('../../scss/style.scss');
import Products from '../../json/Products.json';


export default class Search extends React.Component {
  render() {
    return (
      <BootstrapTable data={ Products.data } pagination striped hover condensed  >
	      <TableHeaderColumn width='150' dataField='id' isKey>ProductID</TableHeaderColumn>
	      <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
	      <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
	      <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
	      <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
	      <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
	      <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
	      <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
	      <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
	      <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
	      <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
	      <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
      </BootstrapTable>
          
    );
  }
}