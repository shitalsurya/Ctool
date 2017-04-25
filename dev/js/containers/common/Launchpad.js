import React from 'react';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, Button, Image,Glyphicon,Thumbnail} from 'react-bootstrap';
import * as types from './commonActionTypes';
require( '../../../scss/style.scss' );
var sapImg = require( "../../../images/sap-logo.png" );
var logoImg=require("../../../images/sybase-365.jpg");

export default class Launchpad extends React.Component {
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
                <span >Sybase 365 Configuration Tool</span></div>
            </div>
          </div>
        </nav>
        <Grid>
          <Row className="dashboard-menu first">
            <Col xs={6} md={3}>
              <Thumbnail>
                <a onClick={ this.navigateRoutes.bind( this, types.ACCOUNT_LIST )}>
                  <span className="accounts-icon"></span>
                  <h3>Accounts</h3>
                </a>
                <p>Accounts and Routing</p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail>
                <a onClick={ this.navigateRoutes.bind( this, types.CONNECTIONS )}>
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
                <a onClick={ this.navigateRoutes.bind( this, types.MISCELLENEOUS )}>
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
                <a onClick={ this.navigateRoutes.bind( this, types.MISC_USERS )}>
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
  //  this.checkCurrentRoute( nextProps.route );

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

  navigateRoutes( _route ) {
    console.log("_route==",_route);
  switch (_route) {
      case types.ACCOUNT_LIST:
        this.context.router.push( 'accounts' );
      break;
      case types.CONNECTIONS:
        this.context.router.push( 'connections' );
      break;
      case types.MISCELLENEOUS:
        this.context.router.push( 'miscUsers' );
      break;
    default:

  }
  }
}

Launchpad.contextTypes = {
  router: React.PropTypes.object.isRequired
};
