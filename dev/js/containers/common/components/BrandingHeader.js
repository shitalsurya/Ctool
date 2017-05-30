import React from 'react';
require('../../../../scss/style.scss');
import {Button} from 'react-bootstrap';
var sapImg = require( "../../../../images/sap-logo.png" );
export default class BrandingHeader extends React.Component {
    constructor(props, context){
      super(props, context);
    }

    handleLogout(){
      debugger;
      sessionStorage.removeItem('token');
      this.context.router.push('/');
    }

    render() {
      return (
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <div className="dashboard-navbar">
                <span> <img src={ sapImg } /></span>
                <span>Sybase 365 Configuration Tool</span>
              </div>
            </div>
            <div className="nav navbar-nav navbar-right">
                <Button bsClass="logout_style" onClick={this.handleLogout.bind(this)}>
                  Logout
                </Button>
            </div>
          </div>
        </nav>
      );
    }
}

BrandingHeader.contextTypes = {
  router: React.PropTypes.object.isRequired
};
