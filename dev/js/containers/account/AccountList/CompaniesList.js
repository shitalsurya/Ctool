import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem ,Button} from 'react-bootstrap';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, Image,Glyphicon } from 'react-bootstrap';
import Select from 'react-select';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as types from './../../common/commonActionTypes';
import {tableOptions} from './../../common/Functions/commonFunctions';
import AdvancedSearch from './../../common/components/AdvancedSearch';
require('../../../../scss/style.scss');
import Products from '../../../../json/Products.json';

 class CompaniesList extends React.Component {
   constructor(props, context) {
       super(props, context);
         this.state = {
           listComp:{},
           selectedCols:[{ value: 'name', label: 'Product Name'},
            { value: 'price', label: 'Product Price'}],
            currentSearchCriteria:{
              showNameSearch:true,
              showAdvSearch:false
            }
         };
          this.masterCols=[{ value: 'name', label: 'Product Name'},
           { value: 'price', label: 'Product Price'}];
           this.searchFilters={};
   }

  renderShowsTotal(start, to, total) {
    return (
      <p style={ { color: 'blue' } }>
        Showing { start } to { to } records from { total }
      </p>
    );
  }
  componentWillMount(){
    // this.currentCols = this.masterCols;
      this.rearrangeCols();
  }
  handleChange(val){
    console.log("handleChange==",val);
  this.setState({selectedCols:val},function(){
      this.rearrangeCols();
  });
//this.currentCols = val.slice(0);

  }
  navigateMenus()
  {

    //  this.props.navigateMenus( types.ACCOUNT_MGMT );
  }
  rearrangeCols(){

	  var list = this.state.selectedCols.map(function (field,index) {
          return (
        		  <TableHeaderColumn
                  key={index}
                  dataField={field.value}
                  dataSort={true}>
                {field.label}
              </TableHeaderColumn>
          );
      }.bind(this));
      this.setState({listComp:list});
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

    return (

        <div>
          <Grid fluid={ true }>
            <Row className="show-grid">
              <Col componentClass={ ControlLabel } md={ 1 }>
              </Col>
              <Col md={ 5 }>

              </Col>
            </Row>
            <Row className="show-grid">
              <Col componentClass={ ControlLabel } md={ 4 }>
                Search Hub Accounts:
              </Col>
              <Col md={ 8 }>
                <AdvancedSearch/>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col md={ 12 }>
                {/*  <Button onClick={this.navigateMenus.bind(this)}>Show</Button>*/}
                <BootstrapTable data={this.data } pagination={ true }  options={ tableOptions }>
                  <TableHeaderColumn dataField='id' dataSort={true} isKey>Product ID</TableHeaderColumn>
                  {this.state.listComp}
                </BootstrapTable>
              </Col>
            </Row>
          </Grid>
        </div>
    		);
  }
}
function mapStateToProps(state) {
    return { };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CompaniesList);
