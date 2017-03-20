import React from 'react';
import { connect } from 'react-redux';
import Account from '../containers/Account';
import Search from '../containers/Search';
import MiscUsers from '../containers/MiscUsers';
import { bindActionCreators } from 'redux';
import { navigateMenus } from '../actions/authActions';
import * as types from '../actions/actionTypes';
require( '../../scss/style.scss' );
var logoImg=require("../../images/sybase-365.jpg");

class Dashboard extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.state={
        currentMenus:{
          showMiscUsers:true,
          showSearch :false,
        showAccount :false
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
               <a
                  onClick={ this.navigateMenus.bind( this, types.ACCOUNT_CREATE ) }>Accounts <span className="sr-only">(current)</span></a>
             </li>
             <li>
               <a href="#">Connections</a>
             </li>
             <li>
               <a href="#">Operators</a>
             </li>
             <li className="dropdown active">
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
            { this.state.currentMenus.showAccount && <Account /> }
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
        showAccount :false,
        showSearch :false
      };
        break;
      case types.TOOLBOX_SEARCH:
        menus={
          showSearch :true,
        showAccount :false
      };
        break;
      case types.ACCOUNT_CREATE:
      menus={
        showSearch :false,
      showAccount :true
    };
        break;
      default:
      menus={
        showSearch :false,
      showAccount :false,
        showMiscUsers :true,
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
