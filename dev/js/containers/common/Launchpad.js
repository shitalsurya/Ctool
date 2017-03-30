import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, Button, Image,Glyphicon,Thumbnail} from 'react-bootstrap';
import CreateAccount from '../../containers/account/CreateAccount';
import HubAccountMgmt from '../../containers/account/HubAccountMgmt';
import AccountSetup from '../../containers/account/AccountSetup';
import Search from '../../containers/Toolbox/Search/Search';
import MiscUsers from '../../containers/miscellaneous/users/MiscUsers';
import { bindActionCreators } from 'redux';
import { navigateMenus } from './commonActions';
import * as types from './commonActionTypes';
import Dashboard from './Dashboard';
require( '../../../scss/style.scss' );
var sapImg = require( "../../../images/sap-logo.png" );
var logoImg=require("../../../images/sybase-365.jpg");

class Launchpad extends React.Component {
  constructor( props, context ) {
    super( props, context );
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
        <Grid>
     <Row className="dashboard-menu first">
     <Col xs={6} md={3}>
       <Thumbnail className="notification">
       <a onClick={ this.navigateMenus.bind( this, types.ACCOUNT_MGMT )}>
         <span className="accounts-icon"></span>
         <h3>Accounts</h3>
       </a>
       <p>Accounts and Routing</p>
       </Thumbnail>
     </Col>
     <Col xs={6} md={3}>
       <Thumbnail>
       <a href="">
         <span className="connections-icon"></span>
         <h3>Connections</h3>
       </a>
       <p>SMSC Configuration</p>
       </Thumbnail>
     </Col>
     <Col xs={6} md={3}>
       <Thumbnail>
       <a href="">
         <span className="operators-icon"></span>
         <h3>Operators</h3>
       </a>
       <p>Operators and Routing preferences</p>
       </Thumbnail>
     </Col>
     <Col xs={6} md={3}>
       <Thumbnail>
       <a href="">
         <span className="misc-icon"></span>
         <h3>Miscelleneous</h3>
       </a>
       <p>Account Managers, countries etc.</p>
       </Thumbnail>
     </Col>
     </Row>
     </Grid>

     <Grid>
     <Row className="dashboard-menu">
     <Col xs={6} md={3}>
       <Thumbnail>
       <a onClick={ this.navigateMenus.bind( this, types.MISC_USERS )}>
         <span className="user-icon"></span>
         <h3>CTool Users</h3>
       </a>
       <p>Users properties</p>
       </Thumbnail>
     </Col>
     <Col xs={6} md={3}>
       <Thumbnail>
       <a href="">
         <span className="toolbox-icon"></span>

          <h3>Toolbox</h3>
       </a>
       <p>Search, SMS Extract and IP Check </p>
       </Thumbnail>
     </Col>
     </Row>
     </Grid>

      </div>
    )
  }

  componentWillReceiveProps( nextProps ) {
    console.log("componentWillReceiveProps");

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

  navigateMenus( _menu ) {
    this.context.router.push( 'dashboard' );
    this.props.navigateMenus( _menu );
  }
}

Launchpad.contextTypes = {
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

export default connect( mapStateToProps, mapDispatchToProps )( Launchpad );
