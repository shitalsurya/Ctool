import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, Button, Image,Glyphicon,Thumbnail} from 'react-bootstrap';
import CreateAccount from '../../containers/account/CreateAccount';
import HubAccountMgmt from '../../containers/account/HubAccountMgmt';
import AccountSetup from '../../containers/account/AccountSetup';
import Search from '../../containers/Toolbox/Search/Search';
import MiscUsers from '../../containers/miscellaneous/users/MiscUsers';
import { bindActionCreators } from 'redux';
import { navigateMenus } from '../../containers/common/commonActions';
import * as types from '../../containers/common/commonActionTypes';
import SuspendAccount from '../account/SuspendAccount';
require( '../../../scss/style.scss' );
var sapImg = require( "../../../images/sap-logo.png" );
var logoImg=require("../../../images/sybase-365.jpg");

class Dashboard extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.state={
        currentMenus:{
          showMiscUsers:false,
          showSearch :false,
        showAccountSetup :false,
          showAccountCreate:false,
          showAccountMgmt :false,
          showSuspendedAcc:false
      },
      submenus:["Accounts","Create Account",
    "Account Setup","Suspend Account"]
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
               <div class="col-sm-4 col-md-3 sidebar">
             <div className="mini-submenu">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </div>
             <div className="list-group">
             <span className="list-group-item">
             <a onClick={ this.goToLaunchpad.bind( this )}>
                    <span className="glyphicon glyphicon-th-large"></span>
                    <span> Launchpad </span>
                 </a>
             </span>
             <span className="list-group-item">
             <a onClick={ this.navigateMenus.bind( this, types.ACCOUNT_SETUP )} >
                    <span className="glyphicon glyphicon-th-list"></span>
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
                </div>
                </div>
             	</div>
             </Col>
             <Col md={10}>
              { this.state.currentMenus.showAccountCreate && <CreateAccount /> }
             { this.state.currentMenus.showAccountSetup && <AccountSetup /> }
               { this.state.currentMenus.showAccountMgmt && <HubAccountMgmt /> }
               { this.state.currentMenus.showSuspendedAcc && <SuspendAccount/> }
             { this.state.currentMenus.showSearch && <Search /> }
             { this.state.currentMenus.showMiscUsers && <MiscUsers /> }

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
  createAccountSubmenus(){
    var AccountSubmenus = this.AccountSubmenus.map(function (field) {
          return (
            <a className="list-group-item">
                <i className="fa fa-comment-o"></i> {field}
            </a>
          );
      }.bind(this));
      return AccountSubmenus;
      //this.setState({listComp:list});
  }
  goToLaunchpad() {
      this.context.router.push( 'launchpad' );
  }
  componentWillReceiveProps( nextProps ) {
    console.log("dashboard nextProps==",nextProps);
    this.checkCurrentMenu( nextProps.currentMenu );
  }
  componentWillUpdate( prevProps, prevState ) {
    console.log( "prevProps ==", prevProps );
    if ( prevProps.token ) {
      var authInfo = JSON.parse( window.atob( prevProps.token.split( "." )[ 1 ] ) );
      this.user = authInfo.sub;
      this.Roles = authInfo.ROLES;
      console.log( "  this.user ==", this.user );
      console.log( "  this.Roles ==", this.Roles );
    }
  }

  checkCurrentMenu( currentMenu ) {
    console.log( "currentMenu ==", currentMenu );
    var menus={};
    switch (currentMenu) {
      case types.MISC_USERS:
        menus={
          showMiscUsers :true,
          showAccountSetup:false,
           showAccountMgmt :false,
        showSearch :false,
        showSuspendedAcc:false
      };
        break;
      case types.TOOLBOX_SEARCH:
        menus={
          showSearch :true,
      showMiscUsers :false,
        showAccountCreate:false,
        showAccountSetup:false,
         showAccountMgmt :false,
         showSuspendedAcc:false
      };
        break;
        case types.ACCOUNT_CREATE:
        menus={
          showSearch :false,
      showMiscUsers :false,
        showAccountCreate:true,
          showAccountSetup:false,
         showAccountMgmt :false,
         showSuspendedAcc:false
      };
      break;
      case types.ACCOUNT_SETUP:
      menus={
        showSearch :false,
    showMiscUsers :false,
      showAccountSetup:true,
        showAccountCreate:false,
       showAccountMgmt :false,
       showSuspendedAcc:false
    };
        break;
        case types.ACCOUNT_MGMT:
        menus={
          showSearch :false,
      showMiscUsers :false,
        showAccountSetup:false,
          showAccountCreate:false,
         showAccountMgmt :true,
         showSuspendedAcc:false
      };
          break;
        case types.ACCOUNT_SPND :
        menus={
          showSearch : false,
          showMiscUsers:false,
          showAccountSetup:false,
          showAccountCreate:false,
          showAccountMgmt:false,
          showSuspendedAcc:true
        };
          break;
      default:
      menus={
        showSearch :false,
    showMiscUsers :false,
      showAccountSetup:true,
        showAccountCreate:false,
       showAccountMgmt :false,
       showSuspendedAcc:false
    };
        break;
    }
    this.setState({currentMenus:menus});

  }
  navigateMenus( _menu ) {
    this.props.navigateMenus( _menu );
  }
}

Dashboard.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps( state ) {
  return {
    currentMenu: state.Menu.menu,
    token: state.Auth.token
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    navigateMenus: navigateMenus
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Dashboard );
