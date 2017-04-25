import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label, OverlayTrigger, Popover, ButtonToolbar } from 'react-bootstrap';
import Toggle from 'react-toggle';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { getHubAcctList} from './../actions/accountListActions';
require('../../../../scss/style.scss');

class OpenAccountsList extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.accounts=[];
    this.test="shital";
    this.state = {
      accountList:[]
    }
      console.log("constructor this.state.accountList==",this.state.accountList);
    }

  actionFormatter(cell, row,field,index) {
    return (
        <span className="display-icon" title="Display" onClick={this.showAccountDetails.bind(this,row)}></span>
    )
  }
  showAccountDetails(_row){
    console.log("_row==",_row);
    this.context.router.push( 'accountDetails' );
  }
  componentWillMount(){
        console.log("get from backend");
        this.props.getHubAcctList();
        console.log("componentWillMount this.props.acctList ==",this.props.acctList );
    //    this.accounts = this.props.acctList || [];
    //    this.setState({accountList: _acctList});
      }
      componentWillReceiveProps( nextProps ) {
      this.accounts  =  nextProps.acctList;
      //  this.setState({accountList: nextProps.acctList});
      }

  render() {
    console.log("render this.accounts==",this.accounts);
    console.log("render this.props.acctList ==",this.props.acctList );
  //  if(this.accounts.length==0)
  //  this.accounts=this.props.acctList || [];
      console.log("render this.accounts==",this.accounts);
  //  console.log("render this.accountList==",this.state.accountList);
    const options = {
    page: 2,  // which page you want to show as default
    sizePerPageList: [ {
      text: '5', value: 5
    }, {
      text: '10', value: 10
    }, {
      text: 'All', value:50
    } ], // you can change the dropdown list for size per page
    sizePerPage: 5,  // which size per page you want to locate as default
    pageStartIndex: 0, // where to start counting the pages
    paginationSize: 3,  // the pagination bar size.
    prePage: 'Prev', // Previous page button text
    nextPage: 'Next', // Next page button text
    firstPage: 'First', // First page button text
    lastPage: 'Last', // Last page button text
    //  paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
    paginationPosition: 'top'  // default is bottom, top and both is all available
    // hideSizePerPage: true > You can hide the dropdown for sizePerPage
    // alwaysShowAllBtns: true // Always show next and previous button
    // withFirstAndLast: false > Hide the going to First and Last page button
    };


 var fields = [
   {
       name:'',
       dataField:'acctId'
   },
   {
       name:'Account Name',
       dataField:'acctName',

   }
   ];
              var listCols = fields.map(function (field) {
                    return (
                        <TableHeaderColumn
                          isKey={ field.dataField == 'acctId'?true :false }
                          hidden={ field.dataField == 'acctId'?true :false }
                          dataField={field.dataField}
                        >
                          {field.name}
                        </TableHeaderColumn>
                    );
                }.bind(this));
    return (

      <div className="tabs-container">

        <Grid fluid={true}>
          <Row className="show-grid">
            <Col
              componentClass={ ControlLabel }
              md={ 3 }> Open accounts list
            </Col>
            <Col
              mdHidden
              md={ 9 } >

            </Col>
          </Row>


          <Row className="show-grid">
            <Col md={ 12 }>
              ln= {this.test}
              <BootstrapTable data={this.accounts}
                pagination={ true }
                tableBodyClass='master-body-class'
                options={ options }>
                {listCols}
                <TableHeaderColumn dataField='' dataAlign='center' width='80px' dataFormat={ this.actionFormatter.bind(this) } >Action</TableHeaderColumn>
              </BootstrapTable>
            </Col>
          </Row>
        </Grid>



      </div>
    		);
  }
}
OpenAccountsList.contextTypes = {
  router: React.PropTypes.object.isRequired
};
function mapStateToProps(state) {
    return {acctList: state.Account.data };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getHubAcctList:getHubAcctList
 }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(OpenAccountsList);
