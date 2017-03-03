import React from 'react';
import { connect } from 'react-redux';
import Account from '../containers/Account';
import Search from '../containers/Search';
import { bindActionCreators } from 'redux';
import { navigateMenus } from '../actions/authActions';
import * as types from '../actions/actionTypes';
require( '../../scss/style.scss' );
var logoImg=require("../../images/sybase365logo.gif");

class Dashboard extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.state={
        currentMenus:{
          showSearch :false,
        showAccount :true
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
  							 <img src={logoImg} />
            </div>
            <div
                 className="collapse navbar-collapse"
                 id="myNavbar">
              <ul className="nav navbar-nav">
              <li className="active">
               <a
                  onClick={ this.navigateMenus.bind( this, types.ACCOUNT_CREATE ) }>Accounts <span className="sr-only">(current)</span></a>
             </li>
             <li>
               <a href="#">Connections</a>
             </li>
             <li>
               <a href="#">Operators</a>
             </li>
             <li>
               <a href="#">Miscelleneous</a>
             </li>
             <li>
               <a
                  onClick={ this.navigateMenus.bind( this, types.TOOLBOX_SEARCH ) }>Toolbox</a>
             </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                  <li className="active">
                  <a href="#"><span className="glyphicon glyphicon-log-in"></span> Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid text-center">
            { this.state.currentMenus.showAccount && <Account /> }
             { this.state.currentMenus.showSearch && <Search /> }
        </div>
        <footer className="container-fluid text-center">
          <p>
            Sybase 365 Inc. All rights reserved
          </p>
        </footer>
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
      showAccount :true
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
    currentMenu: state.Auth.menu,
    token: state.Auth.token
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    navigateMenus: navigateMenus
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Dashboard );
