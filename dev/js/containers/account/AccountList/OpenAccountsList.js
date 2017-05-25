import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, Button, Image,Glyphicon } from 'react-bootstrap';
import Select from 'react-select';
import * as types from './../../common/commonActionTypes';
import Loading from './../../common/Loading'
import { getHubAcctList} from './../actions/accountListActions';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
const ToastMessageFactory = React.createFactory(ToastMessage.animation);
import AdvancedSearch from './../../common/components/AdvancedSearch';
import CloseAccount from '../CloseAccount';
import ReactivateAccount from '../ReactivateAccount';
import SuspendAccount from '../SuspendAccount';
require( './../../../../scss/style.scss' );

class OpenAccountsList extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.accounts=[];
    this.state = {
      loadFlag:true,
      closeAction : false,
      reactivateAction : false,
      suspendAction : false
    }
  }

  componentDidMount(){
    setTimeout(function() { this.setState({loadFlag: false}); }.bind(this), 3000);
  }

  componentWillReceiveProps( nextProps ) {
    console.log("componentWillReceiveProps list",nextProps);
    switch(nextProps.target){
        case types.MISC_ACCOUNT_LIST_RESPONSE:
            this.accounts = nextProps.acctList;
            console.log( "this.accounts==", this.accounts );
            break;
          case types.REACTIVATE_ACC_INFO_RESPONSE:
            if(nextProps.suspendStatus==true){
              this.refs.container.success(`Account reactivated successfully.`, ``, {
                  closeButton: true,
              });
            }
            else if(nextProps.suspendStatus==false){
              this.refs.container.error(`Failed to reactivate account.`, ``, {
                  closeButton: true,
              });
            }
          break;
        }
  }

  showAccountDetails(_row){
    console.log("_row==",_row);
    //this.context.router.push( 'accountDetails' );
     this.context.router.push( {pathname:'accountDetails',state:{currentAcct:_row.customerid}} );
  }

  dataFormatter(cell, row,field,index) {
    switch (field) {
      case 'name':
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
      case 'status':
            var _status="";
            if(row.suspenddate!=null && row.liveaccount==0){
                _status = "Suspended";
            }
            else{
                _status = row.liveaccount==1?"Active":"Closed";
            }
          return (
            <FormControl.Static>
              {_status}
            </FormControl.Static>)
          break;
      case 'action':
        var _status="";
        if(row.suspenddate!=null && row.liveaccount==0){
            _status = "Suspended";
        }
        else{
            _status = row.liveaccount==1?"Active":"Closed";
        }
        switch(_status){
          case "Active":
            let suspend = "Suspend";
            return (
              <div>
                <span className="suspend-icon" title="Suspend" onClick={this.openModal.bind(this,row,suspend)} ></span>
              </div>

            )
            break;
          case "Suspended":
            let reactivate = "Reactivate";
            let close = "Close";
            return (
              <div>
                <span className="reactivate-icon" title="Reactivate" onClick={this.openModal.bind(this,row,reactivate)} ></span>
                <span className="close-icon" title="Close" onClick={this.openModal.bind(this,row,close)} ></span>
              </div>

            )
            break;
          case "Closed":
            return (
              <div>
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

  openModal(_row,status){
    var _info = {};
    console.log("currentAcct : ",_info," type : ",status);
      _info.accountid = _row.customerid;
    _info.accountname = _row.name;
    _info.company = _row.company.companyname;
      _info.requesterid = 0;
    switch (status) {
      case "Suspend":
        _info.accountmanager = _row.accountmanager.name;
        this.setState({suspendAction:true,info:_info});
        break;
      case "Reactivate":
        _info.newsuspenddate = _row.suspenddate;
        this.setState({reactivateAction:true,info:_info});
        break;
      case "Close":
        _info.accountmanager = _row.accountmanager.name;
        this.setState({closeAction:true,info:_info});
        break;
    }
  }

  close(){
    this.setState({closeAction:false,reactivateAction:false,suspendAction:false});
  }

  filterAccountList(_searchFilter){
    console.log("_searchFilter==",_searchFilter);
    var _accountName="",_companyId=""
    //accountName=EMA&companyId=40254&status=ACTIVE
    if(typeof(_searchFilter.selectedAccount)!=''){
       _accountName='accountName='+_searchFilter.selectedAccount;
    }
    if(_searchFilter.selectedCompany.length!=0){
       _companyId='&companyId='+_searchFilter.selectedCompany[0].id;
    }
    var reqParam='?'+_accountName+_companyId+'&status='+_searchFilter.selectedStatus;
    this.props.getHubAcctList(reqParam);
  }

  render() {
     const createCustomToolBar = function(props) {
        return (
          <div>
            <div className='col-md-3'>
              <ControlLabel>Search hub accounts:</ControlLabel>
            </div>
            <div className='col-md-9'>
              { props.components.searchPanel }
            </div>
          </div>
        );
     }

    const advancedSearch = function(props) {
      console.log(props);
      return (
        <AdvancedSearch fields={props} onSearch={this.filterAccountList.bind(this)}/>
      );
    }.bind(this);

    const options = {
    //  noDataText: this.state.loadFlag ? <Loading/> : "Please specify your search criteria to get hub accounts.",
      noDataText: "Please specify your search criteria to get hub accounts.",
      expandRowBgColor: '#f7f8fa',
      clearSearch: true,
      //searchPanel:advancedSearch(props),
      searchPanel: (props) => advancedSearch(props),
      toolBar: (props) => createCustomToolBar(props),
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

    var fields = [
      {
          name:'Id',
          dataField:'customerid',
            width:'50px',
      },
      {
          name:'Hub Account Name',
          dataField:'name',
      },
      {
          name:'Company Name',
          dataField:'company',
      },
      {
          name:'Status',
          dataField:'status',
            width:'100px',
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

    return(
        <div>
          <Grid fluid={ true }>
            <Row className="show-grid">
              <Col md={ 12 }>
                <BootstrapTable data ={ this.accounts } pagination={ true }
                  tableHeaderClass='nested-body-class'
                  search={ true }
                  options={ options }>
                    {listCols}
                </BootstrapTable>
              </Col>
            </Row>
          </Grid>
          <CloseAccount closeAction={this.state.closeAction} closeAccInfo={this.state.info} close={this.close.bind(this)}/>
        {
          this.state.reactivateAction &&
          <ReactivateAccount reactivateAction={this.state.reactivateAction} reactivateAccInfo={this.state.info} close={this.close.bind(this)}/>
        }
          <SuspendAccount suspendAction={this.state.suspendAction} susAccInfo={this.state.info} close={this.close.bind(this)}/>
          <ToastContainer
            toastMessageFactory={ ToastMessageFactory }
            ref="container"
            className="toast-top-right" />
        </div>
    );
  }
}

function mapStateToProps( state ) {
  return {
      acctList: state.Common.acctList,
      target: state.Account.target,
      suspendStatus:state.Account.suspendStatus,
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
