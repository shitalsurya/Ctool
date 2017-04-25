import React from 'react';
require('../../../../scss/style.scss');
var sapImg = require( "../../../../images/sap-logo.png" );
export default class BrandingHeader extends React.Component {

     render() {
        return (
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
        );
    }
}
