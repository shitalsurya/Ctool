import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, Button, Image,Glyphicon } from 'react-bootstrap';
import Select from 'react-select';
import BrandingHeader from './../../common/components/BrandingHeader';
import Navigation from './../../common/components/Navigation';
import * as types from './../../common/commonActionTypes';
import { getUserList, getUserDetails } from './miscUsersActions';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
const ToastMessageFactory = React.createFactory(ToastMessage.animation);
import tableOptions from './../../common/Functions/commonFunctions';
require( './../../../../scss/style.scss' );

class MiscUsers extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.users = [];
    this.currentUser= {};
    this.state = {
      submenus:{
        head: types.MISCELLENEOUS,
        head_icon : "misc-icon",
        subVal:[
          types.USER_MANAGEMENT,
          types.COUNTRY_MANAGEMENT
        ]
      }
    }
  }
  componentWillMount() {
    this.props.getUserList();
    console.log( "this.props.userList==", this.props.userList );
  }

  componentWillReceiveProps( nextProps ) {
    switch (nextProps.target){
      case types.MISC_USERLIST_RESPONSE:
          this.users = nextProps.userList;
          console.log( "this.users==", this.users );
          break;
      case types.MISC_USERDETAILS_RESPONSE:
          console.log( "nextProps.userDetails==", nextProps.userDetails);
          if( nextProps.userDetails != {}){
              // this.state.showEditModal =true;
              this.currentUser =  nextProps.userDetails.details;
              var _currentUser=this.currentUser;
              this.context.router.push( {pathname:'editUser',state:{currentUser:_currentUser}} );
          }
          else{
              // this.state.showEditModal =false;
              this.refs.container.error(`Failed to get user details.`, ``, {
                  closeButton: true,
              });
          }
          break;
      // case types.MISC_UPDATE_USERDETAILS_RESPONSE:
      //     console.log("nextProps.userDetails==",nextProps.userDetails);
      //     if( nextProps.userDetails.showEditModal==false){
      //       this.refs.container.success(`User updated successfully.`, ``, {
      //           closeButton: true,
      //       });
      //         this.state.showEditModal =false;
      //       //  this.currentUser =  nextProps.userDetails.details;
      //     }
      //     else{
      //         this.state.showEditModal =true;
      //         this.refs.container.error(`Failed to update user.`, ``, {
      //             closeButton: true,
      //         });
      //     }
      //
      //     break;
        }
  }

  showDetails(row){
    this.props.getUserDetails(row.userid);
  }

  actionFormatter(cell, row,field,index) {
    switch (field) {
      case 'id':
      // return (
      //     <span className="display-icon" title="Display" onClick={this.showDetails.bind(this,row)} ></span>
      // )
        break;
      default:
        return(
          <Button bsStyle="link" onClick={this.showDetails.bind(this,row)} >{cell}</Button>
        )
        // return `${cell}`;
        break;
    }
  }

  // updateUserDetails(){
  //   console.log( "updateUserDetails this.currentUser==", this.currentUser );
  //   this.props.updateUserDetails(this.currentUser);
  // }

  render() {

    var fields = [
      {
          name:'User Name',
          dataField:'name',
      }
      // {
      //     name:'Action',
      //     dataField:'id',
      //     width:'80px',
      //       dataAlign:'center'
      // }
    ];

    var listCols = fields.map(function (field) {
          return (
              <TableHeaderColumn
                isKey={ field.dataField == 'name'?true :false }
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
                      tableHeaderClass='nested-body-class'
                      search={ true }
                      options={ tableOptions }>
                      {listCols}
                    </BootstrapTable>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>

          <ToastContainer
            toastMessageFactory={ ToastMessageFactory }
            ref="container"
            className="toast-top-right" />
        </div>
    );
  }
}

MiscUsers.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps( state ) {
  return {
    userList: state.MiscUsers.userList,
    userDetails: state.MiscUsers.userDetails,
    target: state.MiscUsers.target
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    getUserList: getUserList,
    getUserDetails: getUserDetails,
    // updateUserDetails:updateUserDetails
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( MiscUsers );
