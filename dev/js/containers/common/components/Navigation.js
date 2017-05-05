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
        var info = this.state.submenus;
        this.menuHeading = info.head;
        this.submenuContent = info.subVal;
        this.icon = info.head_icon
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
