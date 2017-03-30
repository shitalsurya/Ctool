import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, Button, Image,Glyphicon } from 'react-bootstrap';
import Select from 'react-select';
import { getUserList, getUserDetails, updateUserDetails } from './miscUsersActions';
require( '../../../../scss/style.scss' );
var userImg = require( "../../../../images/user.png" );
var showIcon = require( "../../../../images/show-icon.png" );
var editIcon = require( "../../../../images/edit-icon.png" );
var updateIcon = require( "../../../../images/update-icon.png" );
var undoIcon = require( "../../../../images/undo-icon.png" );
var refreshIcon = require( "../../../../images/refresh-icon.png" );
var lockIcon = require( "../../../../images/lock.png" );
var unlockIcon = require( "../../../../images/unlock.png" );
var errorIcon = require( "../../../../images/error-icon-32.png" );

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
  render() {
    console.log( "this.props.userList==", this.props.userList );
    const options = {
         clearSearch: true,
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
    if ( typeof( this.props.userList) != "undefined" ) {
      var listUsers = this.props.userList.map( function ( field, index ) {
        return (
        <div>
          <Row className="list-row">
            <Col
                md={ 1 }>
            <span>
              { field.id }
            </span>
              </Col>
            <Col
                 md={ 2 }>
            <span>
              { field.login }
            </span>
            </Col>
            <Col md={ 3 }>
            <img src={ userImg } /><span>{ field.name }</span>
            </Col>
            <Col md={ 2 }>
            <span>{ field.live }</span>
            </Col>
            <Col md={ 2 }>
            <span>{ field.insertdate }</span>
            </Col>
            <Col md={ 2 } className="right-align">
            { !field.showDetails && !field.editDetails &&
              <img title="Display" onClick={ this.showUserDetails.bind( this, field.id ) }
                   src={ showIcon } />
                 }
            { field.showDetails &&   <img onClick={ this.editUserDetails.bind( this, field.id ) }
                   src={ editIcon } /> }
            { field.editDetails &&   <img onClick={ this.updateUserDetails.bind( this, field.id ) }
                   src={ updateIcon } />}
                { field.editDetails &&      <img onClick={ this.updateUserDetails.bind( this, field.id ) }
                          src={ undoIcon } /> }
            </Col>
          </Row>
          { field.showDetails
            &&
            <Grid fluid={ true } className="user-details">
            <Row>
              <Col
                   className="list-col"
                   md={ 3 }>
              <div>
                Name
              </div>
              <div>
                { field.name }
              </div>
              </Col>
              <Col
                   className="list-col"
                   md={ 3 }>
              <div>
                Email
              </div>
              <div>
                { field.email }
              </div>
              </Col>
              <Col className="list-col"
              md={ 3 }>
                <div>
                  Password
                </div>
                <div>
                  { field.password }
                </div>
                  </Col>
              <Col className="list-col"
              md={ 3 }>
                <div>
                  Locked
                </div>
                <div>
                { field.locked &&
                  <img onClick={ this.showUserDetails.bind( this, field.id ) }
                       src={ lockIcon } />
                }
                { !field.locked &&
                  <img onClick={ this.showUserDetails.bind( this, field.id ) }
                       src={ unlockIcon } />
                }
                </div>
              </Col>

            </Row>
            <Row>
              <Col
                   className="list-col"
                   md={ 3 }>
              <div>
                Live
              </div>
              <div>
              {field.live}
              </div>
              </Col>
              <Col
                   className="list-col"
                   md={ 3 }>
              <div>
                User Homepage
              </div>
              <div>
                { field.homepage }
              </div>
              </Col>
              <Col className="list-col"
              md={ 3 }>
                <div>
                  Role
                </div>
                <div>
                  { field.role }
                </div>
                  </Col>
              <Col className="list-col"
              md={ 3 }>
                <div>
                Update Date
                </div>
                <div>
                  { field.updatedate }
                </div>
              </Col>

            </Row>
            </Grid> }
          { field.editDetails
            &&
            <Grid fluid={ true } className="user-details">
            <Row>
              <Col
                   className="list-col"
                   md={ 3 }>
              <div>
                Name
              </div>
              <div>
              <FormControl name="name"
                           type="text"
                           value={ this.state.currentUser.name }
                           onChange={ this.handleInputChange.bind( this ) }
                           />
              </div>
              {/*
                <Form inline>
                <FormGroup controlId="email" validationState={this.state.validation.editUser.email}>
                <FormControl name="email"
                            type="email"
                            value={ this.state.currentUser.email }
                            onChange={ this.handleInputChange.bind( this ) }
                            />

                            { field.locked &&
                 <Image onClick={ this.showUserDetails.bind( this, field.id ) } src={ errorIcon }  />
                            }
                             </FormGroup>
                             </Form>
                */}
              </Col>
              <Col
                   className="list-col"
                   md={ 3 }>
              <div>
                Email
              </div>
              <div>
              <FormControl name="email"
                           type="email"
                           value={ this.state.currentUser.email }
                           onChange={ this.handleInputChange.bind( this ) }
                           />
              </div>
              </Col>
              <Col className="list-col"
              md={ 3 }>
                <div>
                  Password
                </div>
                <div>
                <FormControl name="password"
                             type="password"
                             value={ this.state.currentUser.password }
                             onChange={ this.handleInputChange.bind( this ) }
                             />
                </div>
                  </Col>
              <Col className="list-col"
              md={ 3 }>
                <div>
                  Locked
                </div>
                <div>
                { field.locked }
                <img onClick={ this.showUserDetails.bind( this, field.id ) }
                     src={ refreshIcon } />
                </div>
              </Col>

            </Row>
            <Row>
              <Col
                   className="list-col"
                   md={ 3 }>
              <div>
              Live
              </div>
              <div>
                <span>{ field.live }</span>
              <img onClick={ this.showUserDetails.bind( this, field.id ) }
                   src={ refreshIcon } />
              </div>
              </Col>
              <Col
                   className="list-col"
                   md={ 3 }>
              <div>
                User Homepage
              </div>
              <div>
              <Select
                    name="homepage"
                    placeholder="Select User Homepage.."
                   value={ this.state.currentUser.homepage }
                    onChange={this.handleSelectChange.bind(this,'homepage')}
                     options={homepageOptions}
                />
              </div>
              </Col>
              <Col className="list-col"
              md={ 3 }>
                <div>
                  Role
                </div>
                <div>
                <Select
                      name="role"
                      placeholder="Select Role"
                       value={ this.state.currentUser.role }
                        onChange={this.handleSelectChange.bind(this,'role')}
                       options={roleOptions}
                        />
                </div>
                  </Col>
              <Col className="list-col"
              md={ 3 }>
                <div>
                  Update Date
                </div>
                <div>
                  { field.updatedate }
                </div>
              </Col>

            </Row>
            </Grid>
          }
        </div>
        );
      }.bind( this ) );
    }

    return (
      <div className="content">
        <div className="col-md-1"></div>
        <div className="col-md-10 section-content">
          <div></div>
          <Grid fluid={ true }>
            <Row>
              <Col className="line page-heading" md={ 12 }>
                CTool User Management
              </Col>
            </Row>
          </Grid>
          <div className="list-container">
            <div className="controls-container">
              <BootstrapTable data ={ this.users } pagination={ true }  search={ true } options={ options }>
                  <TableHeaderColumn dataField='id' dataSort={true} isKey>User ID</TableHeaderColumn>
                  <TableHeaderColumn dataField='login' dataSort={true} >User Login</TableHeaderColumn>
                  <TableHeaderColumn dataField='name' dataSort={true} >User Name</TableHeaderColumn>
                  <TableHeaderColumn dataField='live' dataSort={true} >User Status</TableHeaderColumn>
                  <TableHeaderColumn dataField='insertdate' dataSort={true} >Created On</TableHeaderColumn>
              </BootstrapTable>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
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
