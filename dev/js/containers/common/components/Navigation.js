import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as types from './../../common/commonActionTypes';
import { Nav,NavItem } from 'react-bootstrap';
import {Form, FormControl, InputGroup,FormGroup, Glyphicon, Modal, Button} from 'react-bootstrap';
import { handleActiveNav } from '../../account/actions/accountActions';
require('./../../../../scss/style.scss');
class Navigation extends React.Component {
    constructor(props, context) {
        super(props, context);
            this.state={
        submenus:this.props.submenus||[],
        submenuHeading:this.props.submenus[0]||"",
        innerSubmenus:this.props.submenus.slice(1)||[]
    }
    }

     render() {

       const submenusVal = function(list){
         var title;
         switch (list) {
           case types.ACCOUNT_LIST:
             title = "Accounts";
             break;
            case types.ACCOUNT_CREATE:
              title = "Create Account"
              break;
            case types.ACCOUNT_SPND:
              title = "Suspend Account";
              break;
            case types.ACCOUNT_REAC:
              title = "Reactivate Account";
              break;
            case types.ACCOUNT_CLOSE:
              title = "Close Account";
              break;
            case types.MISCELLENEOUS:
              title = "Miscelleneous";
              break;
            case types.USER_MANAGEMENT:
              title = "User Management";
              break;
            case types.COUNTRY_MANAGEMENT:
              title = "Country Management"
              break;
           default:
            title = '';
         }
         return title;
       }

       const menuMapping = function(list, index) {
         return(
           <a key={index} onClick={ this.navigateMenus.bind( this, types[list] )}
               className={this.props.navTab === list ? "list-group-item activeStyle" : "list-group-item"}>
             <i className="fa fa-comment-o"></i>
               {
                 submenusVal(list)
               }
           </a>
         );
       }.bind(this);

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
                  <a onClick={ this.navigateMenus.bind( this, types[this.state.submenuHeading] )} >
                    <span className="accounts-icon"></span>
                    <span> { submenusVal(this.state.submenuHeading) } </span>
                  </a>
                </span>
                {this.state.innerSubmenus.map(menuMapping)}
              </div>
            </div>
          </div>
        );
    }
    goToLaunchpad() {
        this.context.router.push( 'launchpad' );
    }
    navigateMenus( currentMenu ) {
      console.log("currentMenu==",currentMenu );
      this.props.handleActiveNav(currentMenu);
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
          case types.MISCELLENEOUS:
            // this.context.router.push( 'miscUsers' );
          break;
          case types.USER_MANAGEMENT:
            this.context.router.push( 'miscUsers' );
          break;
          case types.COUNTRY_MANAGEMENT:
            this.context.router.push( 'miscCountry' );
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

function mapStateToProps( state ) {
  return {
    navTab : state.Account.nav
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    handleActiveNav : handleActiveNav
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )(Navigation);
