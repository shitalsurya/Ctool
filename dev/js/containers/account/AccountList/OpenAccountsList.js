import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, Button, Image,Glyphicon } from 'react-bootstrap';
import Select from 'react-select';
import * as types from './../../common/commonActionTypes';
import { getHubAcctList} from './../actions/accountListActions';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
const ToastMessageFactory = React.createFactory(ToastMessage.animation);
import {tableOptions} from './../../common/Functions/commonFunctions';
require( './../../../../scss/style.scss' );

class OpenAccountsList extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.accounts=[];
    this.state = {
    }
  }
  componentWillMount() {
    this.props.getHubAcctList();
  }
  componentWillReceiveProps( nextProps ) {
    switch(nextProps.target){
      case types.MISC_ACCOUNT_LIST_RESPONSE:
          this.accounts = nextProps.acctList;
          console.log( "this.accounts==", this.accounts );
          break;
        }
  }
  showAccountDetails(_row){
    console.log("_row==",_row);
    this.context.router.push( 'accountDetails' );
  }
  dataFormatter(cell, row,field,index) {
    switch (field) {
      case 'customername':
      return (
         <Button bsStyle="link"  title="show" onClick={this.showAccountDetails.bind(this,row)} >{cell}</Button>
      )
        break;
        case 'company':
        return (
          <FormControl.Static>
            {row[field].companyname}
          </FormControl.Static>)
          break;
      case 'action':
        console.log("row==",row);
        switch(row.status){
          case "Suspended":
          return (
            <div>
              <span className="reactivate-icon" title="Reactivate" >Rea</span>
              <span className="close-icon" title="Close" >Cl</span>
            </div>

          )
          break;
        }

          break;
      default:
          return `${cell}`;
        break;
    }
  }

  render() {


    var fields = [
      {
          name:'Id',
          dataField:'customerid',
            width:'50px',
      },
      {
          name:'Hub Account Name',
          dataField:'customername',
      },
      {
          name:'Company Name',
          dataField:'company',
      },
      {
          name:'Status',
          dataField:'status',
            width:'80px',
      },
      {
          name:'Action',
          dataField:'action',
          width:'80px',
            dataAlign:'center'
      }
      ];
    var listCols = fields.map(function (field) {
          return (
              <TableHeaderColumn
                isKey={ field.dataField == 'customerid'?true :false }
                width={field.width}
                dataAlign={field.dataAlign}
                dataFormat={ this.dataFormatter.bind(this) }
                formatExtraData={ field.dataField}
                dataField={field.dataField}
              >
                {field.name}
              </TableHeaderColumn>
          );
      }.bind(this));
    return (
        <div>
          <Grid fluid={ true }>
              <Row className="show-grid">
                <Col md={ 12 }>
                  <BootstrapTable data ={ this.accounts } pagination={ true }
                    tableHeaderClass='nested-body-class'
                    search={ true }
                    options={ tableOptions }>
                    {listCols}
                  </BootstrapTable>
                </Col>
              </Row>
            </Grid>
          </div>
    );
  }
}

function mapStateToProps( state ) {
  return {
      acctList: state.Account.acctList,
     target: state.Account.target
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    getHubAcctList: getHubAcctList
  }, dispatch );
}
OpenAccountsList.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default connect( mapStateToProps, mapDispatchToProps )( OpenAccountsList );
