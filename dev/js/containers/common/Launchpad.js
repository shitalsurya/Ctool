import React from 'react';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, Button, Image,Glyphicon,Thumbnail} from 'react-bootstrap';
import BrandingHeader from './components/BrandingHeader';
import * as types from './commonActionTypes';
// require( '../../../scss/style.scss' );
import style from './Launchpad.style.css';
// var sapImg = require( "../../../images/sap-logo.png" );
// var logoImg = require("../../../images/sybase-365.jpg");

export default class Launchpad extends React.Component {
  constructor( props, context ) {
    super( props, context );
  }

  render() {
    return (
      <div>
        <BrandingHeader/>
        <Grid>
          <Row className="dashboard-menu first">
            <Col xs={6} md={3}>
              <Thumbnail className={style.myThumbnail} href={"#/" + types.ACCOUNT_LIST}>
                <a>
                  <span className={style.accounts_icon}></span>
                  <h3>Accounts</h3>
                </a>
                <p>Accounts and Routing</p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
             <Thumbnail className={style.myThumbnail} href={"#/" + types.CONNECTIONS}>
                <a>
                cursor pointer change
                  <span className={style.connections_icon}></span>
                  <h3>Connections</h3>
                </a>
                <p>SMSC Configuration</p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail className={style.myThumbnail} href={"#/"}>
                <a>
                  <span className={style.operators_icon}></span>
                  <h3>Operators</h3>
                </a>
                <p>Operators and Routing preferences</p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail className={style.myThumbnail} href={"#/" + types.MISCELLENEOUS}>
                <a>
                cursor pointer change
                  <span className={style.misc_icon}></span>
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
             <Thumbnail className={style.myThumbnail} href={"#/" + types.MISC_USERS}>
                <a>
                  <span className={style.user_icon}></span>
                  <h3>CTool Users</h3>
                </a>
                <p>Users properties</p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail className={style.myThumbnail} href={"#/"}>
                <a>
                  <span className={style.toolbox_icon}></span>
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
          this.context.router.push( 'Accounts' );
        break;
        case types.CONNECTIONS:
          this.context.router.push( 'connections' );
        break;
        case types.MISCELLENEOUS:
          this.context.router.push( 'UserManagement' );
        break;
      default:
    }
  }
}

Launchpad.contextTypes = {
  router: React.PropTypes.object.isRequired
};
