import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem ,Button} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { navigateMenus } from '../../containers/common/commonActions';
import * as types from '../../containers/common/commonActionTypes';
require('../../../scss/style.scss');
import Products from '../../../json/Products.json';

 class CompaniesList extends React.Component {
  renderShowsTotal(start, to, total) {
    return (
      <p style={ { color: 'blue' } }>
        From { start } to { to }, totals is { total }&nbsp;&nbsp;(its a customize text)
      </p>
    );
  }
  navigateMenus()
  {
      this.props.navigateMenus( types.ACCOUNT_MGMT );
  }
  render() {
	  this.data=Products.data;//this.props.Products || [];
    const searchoptions = {
  clearSearch: true
};
    const options = {
        clearSearch: true,
   page: 2,  // which page you want to show as default
   sizePerPageList: [ {
     text: '5', value: 5
   }, {
     text: '10', value: 10
   }, {
     text: 'All', value: this.data.length
   } ], // you can change the dropdown list for size per page
   sizePerPage: 5,  // which size per page you want to locate as default
   pageStartIndex: 0, // where to start counting the pages
   paginationSize: 3,  // the pagination bar size.
   prePage: 'Prev', // Previous page button text
   nextPage: 'Next', // Next page button text
   firstPage: 'First', // First page button text
   lastPage: 'Last', // Last page button text
   paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
   paginationPosition: 'top'  // default is bottom, top and both is all available
   // hideSizePerPage: true > You can hide the dropdown for sizePerPage
   // alwaysShowAllBtns: true // Always show next and previous button
   // withFirstAndLast: false > Hide the going to First and Last page button
 };
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
      }.bind(this));
    return (

        <div className="controls-container">
        <span>Companies List</span>
			      		{/*<BootstrapTable   tableStyle={ { border: '#ffffff 0px ' } }
                bodyStyle={ {border: '#ffffff 0px ' }} data={this.data } striped bordered
                search={ true } options={ searchoptions }>
			      		 <TableHeaderColumn dataField='name' isKey dataSort={true} isKey>Name</TableHeaderColumn>
					      {listUsers}
			      		</BootstrapTable>*/}
                  <Button onClick={this.navigateMenus.bind(this)}>Show</Button>
                <BootstrapTable data={this.data } pagination={ true }  search={ true } options={ options }>
        <TableHeaderColumn dataField='id' dataSort={true} isKey>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name' dataSort={true}>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price' dataSort={true}>Product Price</TableHeaderColumn>
    </BootstrapTable>
                </div>
    		);
  }
}
function mapStateToProps(state) {
    return { };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ navigateMenus:navigateMenus }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CompaniesList);
