import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, Button, Image,Glyphicon,Thumbnail} from 'react-bootstrap';
import POC from './POC';
import { bindActionCreators } from 'redux';
import * as types from '../../containers/common/commonActionTypes';
require( '../../../scss/style.scss' );
var sapImg = require( "../../../images/sap-logo.png" );
var logoImg=require("../../../images/sybase-365.jpg");

class Connections extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.state={
        currentMenus:{
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
                    <div className="list-group">
                      <span className="list-group-item">
                        <a onClick={ this.goToLaunchpad.bind( this )}>
                          <span className="glyphicon glyphicon-th-large"></span>
                          <span> Launchpad </span>
                        </a>
                      </span>
                      <span className="list-group-item">
                        <a onClick={ this.navigateMenus.bind( this, types.ACCOUNT_LIST )} >
                          <span className="glyphicon glyphicon-th-list"></span>
                          <span> Connections </span>
                        </a>
                      </span>

                      <a onClick={ this.navigateMenus.bind( this, types.ACCOUNT_CREATE )} className="list-group-item">
                        <i className="fa fa-comment-o"></i>  Revenue Share SUBSMSC
                      </a>

                    </div>
                  </div>
                </div>
              </Col>
              <Col md={10}>
                <POC/>
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

  navigateMenus( _menu ) {
    console.log( "currentMenu ==", _menu );
  }
}

Connections.contextTypes = {
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

export default connect( mapStateToProps, mapDispatchToProps )( Connections );
