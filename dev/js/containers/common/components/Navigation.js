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
        }
    }

     render() {

       const menuMapping = function(list, index) {
         return(
           <a key={index} onClick={ this.navigateMenus.bind( this, list )}
               className={this.props.navTab === list ? "list-group-item activeStyle" : "list-group-item"}>
             <i className="fa fa-comment-o"></i>
               { list }
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
                  <a onClick={ this.navigateMenus.bind( this, this.menuHeading )} >
                    <span className={this.icon}></span>
                    <span> { this.menuHeading } </span>
                  </a>
                </span>
                {this.submenuContent.map(menuMapping)}
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
      let routeString = currentMenu.replace(" ","");
      this.context.router.push(routeString);
    //  this.props.navigateMenus(currentMenu)
    }

    componentWillMount() {
      if(this.state.submenus.length) {
        this.menuHeading = this.state.submenus[0];
        this.submenuContent = this.state.submenus.slice(1);
      }
      switch (this.menuHeading) {
        case types.ACCOUNT_LIST:
          this.icon="accounts-icon";
          break;
        case types.CONNECTIONS:
          this.icon="connections-icon"
          break;
        case types.OPERATORS:
          this.icon="operators-icon"
          break;
        case types.MISCELLENEOUS:
          this.icon="misc-icon";
          break;
        case types.CTOOL_USERS:
          this.icon="user-icon"
          break;
        case types.TOOLBOX:
          this.icon="toolbox-icon"
          break;
      }
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
