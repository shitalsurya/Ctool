import React from 'react';
import { connect } from 'react-redux';
import CreateAccount from '../../containers/account/CreateAccount';
import HubAccountMgmt from '../../containers/account/HubAccountMgmt';
import AccountSetup from '../../containers/account/AccountSetup';
import Search from '../../containers/Toolbox/Search/Search';
import MiscUsers from '../../containers/miscellaneous/users/MiscUsers';
import { bindActionCreators } from 'redux';
import { navigateMenus } from '../../containers/common/commonActions';
import * as types from '../../containers/common/commonActionTypes';
require( '../../../scss/style.scss' );
var logoImg=require("../../../images/sybase-365.jpg");

class Dashboard extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.state={
        currentMenus:{
          showMiscUsers:false,
          showSearch :false,
        showAccountSetup :false,
          showAccountMgmt :false
      }
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
  							 <div className="logo">CTOOL</div>
            </div>
            <div
                 className="collapse navbar-collapse"
                 id="myNavbar">
              <ul className="nav navbar-nav">
              <li >
              <a href="#" data-toggle="dropdown" className="dropdown-toggle">Accounts <b className="caret"></b></a>
              <ul className="dropdown-menu">
                  <li> <a
                      onClick={ this.navigateMenus.bind( this, types.ACCOUNT_CREATE ) }>Create Account<span className="sr-only">(current)</span></a></li>
                  <li><a href="#">CTool Rights</a></li>
                  <li><a href="#">Companies</a></li>
                  <li><a href="#">Countries</a></li>
                  <li className="divider"></li>
                 <li><a href="#">Account Manager</a></li>
                  <li><a href="#">Country Manager</a></li>
              </ul>

             </li>
             <li>
               <a href="#">Connections</a>
             </li>
             <li>
               <a href="#">Operators</a>
             </li>
             <li className="dropdown">
                       <a href="#" data-toggle="dropdown" className="dropdown-toggle">Miscelleneous <b className="caret"></b></a>
                       <ul className="dropdown-menu">
                           <li><a onClick={ this.navigateMenus.bind( this, types.MISC_USERS )}>CTool Users</a></li>
                           <li><a href="#">CTool Rights</a></li>
                           <li><a href="#">Companies</a></li>
                           <li><a href="#">Countries</a></li>
                           <li className="divider"></li>
                          <li><a href="#">Account Manager</a></li>
                           <li><a href="#">Country Manager</a></li>
                       </ul>
                   </li>
             <li>
               <a
                  onClick={ this.navigateMenus.bind( this, types.TOOLBOX_SEARCH ) }>Toolbox</a>
             </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                  <li className="active">
                  <a href="#"><span className="glyphicon glyphicon-log-out"></span> Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
            { this.state.currentMenus.showAccountSetup && <CreateAccount /> }
              { this.state.currentMenus.showAccountMgmt && <HubAccountMgmt /> }
            { this.state.currentMenus.showSearch && <Search /> }
            { this.state.currentMenus.showMiscUsers && <MiscUsers /> }

        </div>
        {/*<footer className="container-fluid text-left">
          <p>
              v1.0 © 2017 Sybase 365 Inc. All rights reserved
          </p>
        </footer>*/}
      </div>
    )
  }
  showAbout() {
    this.context.router.push( 'about' );
  }
  componentWillReceiveProps( nextProps ) {
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
        showSearch :false
      };
        break;
      case types.TOOLBOX_SEARCH:
        menus={
          showSearch :true,
      showMiscUsers :false,
        showAccountSetup:false,
         showAccountMgmt :false
      };
        break;
      case types.ACCOUNT_CREATE:
      menus={
        showSearch :false,
    showMiscUsers :false,
      showAccountSetup:true,
       showAccountMgmt :false
    };
        break;
        case types.ACCOUNT_MGMT:
        menus={
          showSearch :false,
      showMiscUsers :false,
        showAccountSetup:false,
         showAccountMgmt :true
      };
          break;
      default:
      menus={
        showSearch :false,
    showMiscUsers :false,
      showAccountSetup:true,
       showAccountMgmt :false
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
