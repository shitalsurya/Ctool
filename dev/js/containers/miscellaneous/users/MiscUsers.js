import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, Button, Image,Glyphicon } from 'react-bootstrap';
import Select from 'react-select';
import BrandingHeader from './../../common/components/BrandingHeader';
import Navigation from './../../common/components/Navigation';
import { getUserList, getUserDetails, updateUserDetails } from './miscUsersActions';
require( './../../../../scss/style.scss' );
var userImg = require( "./../../../../images/user.png" );
var showIcon = require( "./../../../../images/show-icon.png" );
var editIcon = require( "./../../../../images/edit-icon.png" );
var updateIcon = require( "./../../../../images/update-icon.png" );
var undoIcon = require( "./../../../../images/undo-icon.png" );
var refreshIcon = require( "./../../../../images/refresh-icon.png" );
var lockIcon = require( "./../../../../images/lock.png" );
var unlockIcon = require( "./../../../../images/unlock.png" );
var errorIcon = require( "./../../../../images/error-icon-32.png" );

class MiscUsers extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.users = [];
    this.state = {
      currentUser: {}
    }
  }
  componentWillMount() {
    this.props.getUserList();
      console.log( "this.props.userList==", this.props.userList );
  }
  componentWillReceiveProps( nextProps ) {
    this.users = nextProps.userList;
    console.log( "nextProps.userDetails==", nextProps.userDetails );
    if ( typeof (nextProps.userDetails) != 'undefined' ) {
      this.users.forEach( function ( item ) {
        if ( nextProps.userDetails.id == item.id ) {
           item.editDetails = false;
          item.showDetails = true;
          Object.assign( item, nextProps.userDetails );
          console.log( "item==", item );
        } else {
          item.showDetails = false;
        }
      }.bind( this ) );
    }
  }
  showUserDetails( _id ) {
    console.log( "_id==", _id );
    this.props.getUserDetails( _id );
  }
  updateUserDetails() {
    console.log( "updateUserDetails this.currentUser==", this.state.currentUser );
    this.props.updateUserDetails(this.state.currentUser);
  }
  handleSelectChange (name,newValue) {
  		console.log('State changed to name' + name);
    //  return function(newValue) {
        console.log('State changed to ' , newValue);
       // perform change on this.state for name and newValue
       var _currentUser = {};
       _currentUser = this.state.currentUser;
       _currentUser[name] = newValue.value;
       this.setState( {
         currentUser: _currentUser
       } );
  // }.bind(this);

  	}
  handleInputChange( e ) {
    console.log("e",e.target.name);
    var _currentUser = {};
    _currentUser = this.state.currentUser;
    _currentUser[e.target.name] = e.target.value;
    this.setState( {
      currentUser: _currentUser
    } );
  }
  editUserDetails( _id ) {

    console.log( "editUserDetails _id==", _id );
    this.users.forEach( function ( item ) {
      if ( _id == item.id ) {
        item.editDetails = true;
        item.showDetails = false;
        console.log( "editUserDetails item==", item );
        this.setUserDetails( item );
      } else {
        item.editDetails = false;
      }
    }.bind( this ) );
  }
  setUserDetails( _item ) {
    console.log( "setUserDetails _item==", _item );
    this.setState( {
      currentUser: _item
    } );
}
onCellEdit  (row, fieldName, value)  {
  console.log("row==",row);
    console.log("fieldName==",fieldName);
        console.log("value==",value);
  //  const { data } = this.state;
  //  let rowIdx;
  //  const targetRow = data.find((prod, i) => {
  //    if (prod.id === row.id) {
  //      rowIdx = i;
  //      return true;
  //    }
  //    return false;
  //  });
  //  if (targetRow) {
  //    targetRow[fieldName] = value;
  //    data[rowIdx] = targetRow;
  //    this.setState({ data });
  //  }
 }
  render() {
    const cellEditProp = {
      mode: 'mousehover'
    };
    console.log( "this.props.userList==", this.props.userList );
    const options = {
    //  onCellEdit: this.onCellEdit.bind(this),
    //     clearSearch: true,
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
         paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
         paginationPosition: 'top',  // default is bottom, top and both is all available
         // hideSizePerPage: true > You can hide the dropdown for sizePerPage
         alwaysShowAllBtns: false, // Always show next and previous button
        //  withFirstAndLast: false // Hide the going to First and Last page button
    };

    var  homepageOptions= [
        { value: 'Account', label: 'Account' },
        { value: 'Connections', label: 'Connections' }
    ];
    var roleOptions= [
        { value: 'Support', label: 'Support' },
        { value: 'ServiceDesk', label: 'ServiceDesk' }
    ];

    return (
        <div>
          <BrandingHeader/>
          <Grid fluid={true}>
            <Row>
              <Col md={2}>
                <Navigation submenus={this.state.submenus}></Navigation>
              </Col>
              <Col md={10}>
                <Grid fluid={ true }>
                  <Row>
                    <Col className="line page-heading" md={ 12 }>
                      CTool User Management
                    </Col>
                  </Row>
                </Grid>
                <div className="list-container">
                  <div className="controls-container">
                    <BootstrapTable data ={ this.users } pagination={ true }
                      //search={ true }
                      //remote={ true }
                      //    cellEdit={ cellEditProp }
                      options={ options }>
                      <TableHeaderColumn   dataField='id' dataSort={true} isKey>User ID</TableHeaderColumn>
                      <TableHeaderColumn   dataField='login' dataSort={true} >User Login</TableHeaderColumn>
                      <TableHeaderColumn   dataField='name' dataSort={true} >User Name</TableHeaderColumn>
                      <TableHeaderColumn   dataField='live' dataSort={true} >User Status</TableHeaderColumn>
                      <TableHeaderColumn   dataField='insertdate' dataSort={true} >Created On</TableHeaderColumn>
                </BootstrapTable>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>

    </div>

    );
  }
}
function mapStateToProps( state ) {
  return {
    userList: state.MiscUsers.userList,
    userDetails: state.MiscUsers.userDetails
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    getUserList: getUserList,
    getUserDetails: getUserDetails,
    updateUserDetails:updateUserDetails
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( MiscUsers );
