import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, Button, Image,Glyphicon,Thumbnail} from 'react-bootstrap';
import CreateAccount from '../../containers/account/CreateAccount';
import HubAccountMgmt from '../../containers/account/HubAccountMgmt';
import AccountSetup from '../../containers/account/AccountSetup';
import Search from '../../containers/Toolbox/Search/Search';
import MiscUsers from '../../containers/miscellaneous/users/MiscUsers';
import { bindActionCreators } from 'redux';
import * as types from '../../containers/common/commonActionTypes';
import SuspendAccount from '../account/SuspendAccount';
import ReactivateAccount from '../account/ReactivateAccount';
import CloseAccount from '../account/CloseAccount';

require( '../../../scss/style.scss' );
var sapImg = require( "../../../images/sap-logo.png" );
var logoImg=require("../../../images/sybase-365.jpg");

class Accounts extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.state={
        currentMenus:{
          showAccountSetup :true,
          showAccountCreate:false,
          showAccountMgmt :false,
          showSuspendedAcc:false,
          showReactivateAcc:false,
          showCloseAcc:false
      },
      submenus:["Accounts","Create Account",
    "Account Setup","Suspend Account","Reactivate Account","Close Account"]
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="dashboard-navbar">
                <span> <img src={ sapImg } /></span>
                <span>Sybase 365 Configuration Tool</span></div>
            </div>
          </div>
        </nav>

        <div>
          <Grid fluid={true}>
            <Row>
              <Col md={2}>
                <div className="row">
                  <div className="sidebar">
                    <div className="mini-submenu">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </div>
                    <div className="list-group">
                      <span className="list-group-item">
                        <a onClick={ this.goToLaunchpad.bind( this )}>
                          <span className="launchpad-icon"></span>
                          <span> Launchpad </span>
                        </a>
                      </span>
                      <span className="list-group-item">
                        <a onClick={ this.navigateMenus.bind( this, types.ACCOUNT_SETUP )} >
                          <span className="accounts-icon"></span>
                          <span> { this.state.submenus[0]} </span>
                        </a>
                      </span>

                      <a onClick={ this.navigateMenus.bind( this, types.ACCOUNT_CREATE )} className="list-group-item">
                        <i className="fa fa-comment-o"></i> { this.state.submenus[1]}
                      </a>
                      <a onClick={ this.navigateMenus.bind( this, types.ACCOUNT_MGMT )}  className="list-group-item">
                        <i className="fa fa-comment-o"></i>{ this.state.submenus[2]}
                      </a>
                      <a onClick={ this.navigateMenus.bind( this, types.ACCOUNT_SPND )}  className="list-group-item">
                        <i className="fa fa-comment-o"></i>{ this.state.submenus[3]}
                      </a>
                      <a onClick={ this.navigateMenus.bind( this, types.ACCOUNT_REAC )}  className="list-group-item">
                        <i className="fa fa-comment-o"></i>{ this.state.submenus[4]}
                      </a>
                      <a onClick={ this.navigateMenus.bind( this, types.ACCOUNT_CLOSE )}  className="list-group-item">
                        <i className="fa fa-comment-o"></i>{ this.state.submenus[5]}
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={10}>
                { this.state.currentMenus.showAccountCreate && <CreateAccount /> }
                { this.state.currentMenus.showAccountSetup && <AccountSetup /> }
                { this.state.currentMenus.showAccountMgmt && <HubAccountMgmt /> }
                { this.state.currentMenus.showSuspendedAcc && <SuspendAccount/> }
                { this.state.currentMenus.showReactivateAcc && <ReactivateAccount/>}
                { this.state.currentMenus.showCloseAcc && <CloseAccount/>}
              </Col>
                 </Row>
          </Grid>
        </div>
        {/*<footer className="container-fluid text-left">
          <p>
              v1.0 © 2017 Sybase 365 Inc. All rights reserved
          </p>
        </footer>*/}
      </div>
    )
  }

  goToLaunchpad() {
      this.context.router.push( 'launchpad' );
  }
  componentWillReceiveProps( nextProps ) {
  }
  componentWillUpdate( prevProps, prevState ) {
    // console.log( "prevProps ==", prevProps );
    // if ( prevProps.token ) {
    //   var authInfo = JSON.parse( window.atob( prevProps.token.split( "." )[ 1 ] ) );
    //   this.user = authInfo.sub;
    //   this.Roles = authInfo.ROLES;
    //   console.log( "  this.user ==", this.user );
    //   console.log( "  this.Roles ==", this.Roles );
    // }
  }

  navigateMenus( currentMenu ) {
    console.log( "currentMenu ==", currentMenu );
    var menus={};
    switch (currentMenu) {
        case types.ACCOUNT_CREATE:
        menus={
        showAccountCreate:true,
          showAccountSetup:false,
         showAccountMgmt :false,
         showSuspendedAcc:false,
         showReactivateAcc :false,
         showCloseAcc :false
      };
      break;
      case types.ACCOUNT_SETUP:
      menus={
      showAccountSetup:true,
        showAccountCreate:false,
       showAccountMgmt :false,
       showSuspendedAcc:false,
       showReactivateAcc :false,
       showCloseAcc :false
    };
        break;
        case types.ACCOUNT_MGMT:
        menus={
        showAccountSetup:false,
          showAccountCreate:false,
         showAccountMgmt :true,
         showSuspendedAcc:false,
         showReactivateAcc :false,
         showCloseAcc :false
      };
          break;
        case types.ACCOUNT_SPND :
        menus={
          showAccountSetup:false,
          showAccountCreate:false,
          showAccountMgmt:false,
          showSuspendedAcc:true,
          showReactivateAcc :false,
          showCloseAcc :false
        };
          break;
          case types.ACCOUNT_REAC :
          menus={
            showAccountSetup:false,
            showAccountCreate:false,
            showAccountMgmt:false,
            showSuspendedAcc:false,
            showReactivateAcc :true,
            showCloseAcc :false
          };
            break;
          case types.ACCOUNT_CLOSE :
            menus={
              showAccountSetup:false,
              showAccountCreate:false,
              showAccountMgmt:false,
              showSuspendedAcc:false,
              showReactivateAcc :false,
              showCloseAcc : true
            };
              break;
      default:
      menus={
        showAccountSetup:true,
        showAccountCreate:false,
        showAccountMgmt :false,
        showSuspendedAcc:false,
        showCloseAcc:false
    };
        break;
    }
    this.setState({currentMenus:menus});

  }
  // navigateMenus( _menu ) {
  //  this.props.navigateMenus( _menu );
  // }
}

Accounts.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps( state ) {
  return {
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Accounts );
