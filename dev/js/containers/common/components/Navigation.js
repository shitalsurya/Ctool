import React from 'react';
import * as types from './../../common/commonActionTypes';
import { Nav,NavItem } from 'react-bootstrap';
import {Form, FormControl, InputGroup,FormGroup, Glyphicon, Modal, Button} from 'react-bootstrap';
require('./../../../../scss/style.scss');
export default class Navigation extends React.Component {
    constructor(props, context) {
        super(props, context);
            this.state={
        submenus:this.props.submenus||[]
    }
    }

     render() {
        return (
          <div className="row">
            <div className="sidebar">
              <div className="mini-submenu">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </div>
              <div className="list-group">
                <span className="list-group-item">
                  <a onClick={ this.goToLaunchpad.bind( this )}>
                    <span className="launchpad-icon"></span>
                    <span> Launchpad </span>
                  </a>
                </span>
                <span className="list-group-item">
                  <a onClick={ this.navigateMenus.bind( this, types.ACCOUNT_LIST )} >
                    <span className="accounts-icon"></span>
                    <span> { this.state.submenus[0]} </span>
                  </a>
                </span>

                <a onClick={ this.navigateMenus.bind( this, types.ACCOUNT_CREATE )} className="list-group-item">
                  <i className="fa fa-comment-o"></i> { this.state.submenus[1]}
                </a>
                <a onClick={ this.navigateMenus.bind( this, types.ACCOUNT_SPND )}  className="list-group-item">
                  <i className="fa fa-comment-o"></i>{ this.state.submenus[2]}
                </a>
                <a onClick={ this.navigateMenus.bind( this, types.ACCOUNT_REAC )}  className="list-group-item">
                  <i className="fa fa-comment-o"></i>{ this.state.submenus[3]}
                </a>
                <a onClick={this.navigateMenus.bind( this, types.ACCOUNT_CLOSE )}  className="list-group-item">
                  <i className="fa fa-comment-o"></i>{ this.state.submenus[4]}
                </a>
              </div>
            </div>
          </div>
        );
    }
    goToLaunchpad() {
        this.context.router.push( 'launchpad' );
    }
    navigateMenus( currentMenu ) {
      console.log("currentMenu==",types.ACCOUNT_CLOSE );
      switch (currentMenu) {
          case types.ACCOUNT_LIST:
            this.context.router.push( 'accounts' );
          break;
          case types.ACCOUNT_DETAILS:
            this.context.router.push( 'accountDetails' );
          break;
          case types.ACCOUNT_CREATE:
            this.context.router.push( 'createAccount' );
          break;
          case types.ACCOUNT_REAC:
            this.context.router.push( 'reactivateAccount' );
          break;
          case types.ACCOUNT_SPND:
            this.context.router.push( 'suspendAccount' );
          break;
          case types.ACCOUNT_CLOSE:
            this.context.router.push( 'closeAccount' );
          break;
        }
    //  this.props.navigateMenus(currentMenu)
    }
    componentWillMount() {

    }

}
Navigation.contextTypes = {
  router: React.PropTypes.object.isRequired
};
