import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, Button, Image,Glyphicon } from 'react-bootstrap';
import Select from 'react-select';
import * as types from './../actions/accountActionTypes';
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
  actionFormatter(cell, row,field,index) {
    switch (field) {
      case 'acctId':
      return (
          <span className="display-icon" title="Display" onClick={this.showAccountDetails.bind(this,row)} ></span>
      )
        break;
      default:
          return `${cell}`;
        break;
    }
  }

  render() {


    var fields = [
      {
          name:'Hub Account Name',
          dataField:'acctName',
      },
      {
          name:'Action',
          dataField:'acctId',
          width:'80px',
            dataAlign:'center'
      }
      ];
    var listCols = fields.map(function (field) {
          return (
              <TableHeaderColumn
                isKey={ field.dataField == 'acctId'?true :false }
                width={field.width}
                dataAlign={field.dataAlign}
                dataFormat={ this.actionFormatter.bind(this) }
                formatExtraData={ field.dataField}
                dataField={field.dataField}
              >
                {field.name}
              </TableHeaderColumn>
          );
      }.bind(this));
    return (
        <div>
          <div className="tabs-container">
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
