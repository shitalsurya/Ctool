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
                 className="list-col"
                 md={ 4 }>
            <div>
              User Id:
              { field.id }
            </div>
            <div>
              Login Name:
              { field.login }
            </div>
            </Col>
            <Col md={ 3 }>
            <img
                 className="user-image"
                 src={ userImg } /><span>{ field.name }</span>
            </Col>
            <Col md={ 3 }>
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
            <Row className="user-details-row">
              <Row>
                <Col
                     className="list-col"
                     md={ 12 }> User Id:
                { field.id }
                </Col>
              </Row>
              <Row>
                <Col
                     className="list-col"
                     md={ 12 }> User Id:
                { field.role }
                </Col>
              </Row>
              <Row>
                <Col
                     className="list-col"
                     md={ 12 }> User Id:
                { field.status }
                </Col>
              </Row>
            </Row> }
          { field.editDetails
            &&
            <Row className="user-details-row">
              <Col
                   componentClass={ ControlLabel }
                   md={ 2 }> Name:
              </Col>
              <Col md={ 4 }>
              <FormControl
                           type="text"
                           value={ this.state.currentUser.role }
                           onChange={ this.handleChange.bind( this ) }
                           placeholder="Enter your name" />
              </Col>
              <Col
                   mdHidden
                   md={ 3 } />
            </Row> }
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
