import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, ButtonGroup, Button, Modal } from 'react-bootstrap';
import { getUserList, getUserDetails, updateUserDetails } from '../actions/miscUsersActions';
require( '../../scss/style.scss' );
var userImg = require( "../../images/user.png" );

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

  handleChange( e ) {
    var _currentUser = {};
    _currentUser = this.state.currentUser;
    _currentUser.role = e.target.value;
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
    if ( this.users != "" ) {
      var listUsers = this.users.map( function ( field, index ) {
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
            <img
                 className="user-image"
                 src={ userImg } /><span>{ field.name }</span>
            </Col>
            <Col md={ 2 }>
            <span>{ field.status }</span>
            </Col>
            <Col md={ 2 }>
            <span>{ field.status }</span>
            </Col>
            <Col md={ 2 }>
            { !field.showDetails && !field.editDetails && <Button
                                                                  className="sap-btn"
                                                                  onClick={ this.showUserDetails.bind( this, field.id ) }
                                                                  type="submit">
                                                            Display
                                                          </Button> }
            { field.showDetails && <Button
                                           className="sap-btn"
                                           onClick={ this.editUserDetails.bind( this, field.id ) }
                                           type="submit">
                                     Edit
                                   </Button> }
            { field.editDetails && <Button
                                           className="sap-btn"
                                           onClick={ this.updateUserDetails.bind( this, field.id ) }
                                           type="submit">
                                     Update
                                   </Button> }
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
                { field.id }
              </div>
              </Col>
              <Col
                   className="list-col"
                   md={ 3 }>
              <div>
                Email
              </div>
              <div>
                { field.login }
              </div>
              </Col>
              <Col className="list-col"
              md={ 3 }>
                <div>
                  Password
                </div>
                <div>
                  { field.login }
                </div>
                  </Col>
              <Col className="list-col"
              md={ 3 }>
                <div>
                  Locked
                </div>
                <div>
                  { field.login }
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
                { field.id }
              </div>
              </Col>
              <Col
                   className="list-col"
                   md={ 3 }>
              <div>
                User Homepage
              </div>
              <div>
                { field.login }
              </div>
              </Col>
              <Col className="list-col"
              md={ 3 }>
                <div>
                  Role
                </div>
                <div>
                  { field.login }
                </div>
                  </Col>
              <Col className="list-col"
              md={ 3 }>
                <div>
                Update Date
                </div>
                <div>
                  { field.login }
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
                { field.id }
              </div>
              </Col>
              <Col
                   className="list-col"
                   md={ 3 }>
              <div>
                Email
              </div>
              <div>
                { field.login }
              </div>
              </Col>
              <Col className="list-col"
              md={ 3 }>
                <div>
                  Password
                </div>
                <div>
                <FormControl
                             type="text"
                             value={ this.state.currentUser.role }
                             onChange={ this.handleChange.bind( this ) }
                             placeholder="Enter your name" />
                </div>
                  </Col>
              <Col className="list-col"
              md={ 3 }>
                <div>
                  Locked
                </div>
                <div>
                  { field.login }
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
                { field.id }
              </div>
              </Col>
              <Col
                   className="list-col"
                   md={ 3 }>
              <div>
                User Homepage
              </div>
              <div>
                { field.login }
              </div>
              </Col>
              <Col className="list-col"
              md={ 3 }>
                <div>
                  User Login
                </div>
                <div>
                  { field.login }
                </div>
                  </Col>
              <Col className="list-col"
              md={ 3 }>
                <div>
                  User Login
                </div>
                <div>
                  { field.login }
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
        <span className="page-heading">CTool User Management</span>
        <div className="list-container">
        <div className="header-row">
          <Grid fluid={ true }>
        <Row >
          <Col
               className="list-col"
               md={ 1 }>
            User ID
          </Col>
          <Col
               className="list-col"
               md={ 2 }>
            User Login
          </Col>
          <Col md={ 3 }>
        User Name
          </Col>
          <Col md={ 2 }>
        User Status
          </Col>
          <Col md={ 2 }>
        Created On
          </Col>
          <Col md={ 2 }>
        Action
          </Col>
        </Row>
          </Grid>
        </div>
          <Grid fluid={ true }>
            { listUsers }
          </Grid>
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
