import React from 'react';
import {connect} from 'react-redux';
import Account from '../containers/Account';
import Search from '../containers/Search';
import { bindActionCreators } from 'redux';
import {navigateMenus} from '../actions/authActions';
import * as types from '../actions/actionTypes';
require('../../scss/style.scss');



class Dashboard extends React.Component {
    constructor(props, context) {
        super(props, context);
				 this.showAccount=true;
    }

    render() {

        return (

            <div className="other-than-main">
                <nav className="navbar navbar-default navbar-static-top navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            </button>
                            <a className="navbar-brand" href="#">CTOOL</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#" onClick={this.navigateMenus.bind(this,types.ACCOUNT_CREATE)} >Accounts <span className="sr-only">(current)</span></a></li>
                                <li><a href="#">Connections</a></li>
                                <li><a href="#">Operators</a></li>
                                <li><a href="#">Miscelleneous</a></li>
                                <li><a href="#" onClick={this.navigateMenus.bind(this,types.TOOLBOX_SEARCH)}>Toolbox</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a>{this.user}</a></li>
                                <li><a href="/">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                { this.showAccount && <Account /> }
                { this.showSearch && <Search /> }
                {/*<footer className="footer">
                    <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>
                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 ">
                        <label>v6.6.6 &copy; CTOOL</label>
                    </div>
                    <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>

                </footer>*/}

            </div>
        )
    }
    showAbout() {
        this.context.router.push('about');
    }
    componentWillReceiveProps (nextProps) {
        this.checkCurrentMenu(nextProps.currentMenu);
    }
    componentWillMount(){
        var token = localStorage.getItem("token");
        var authInfo = token.split(".");
        console.log(authInfo[1]);
        var authInfo = JSON.parse(window.atob(authInfo[1])) ;
        this.user = authInfo.sub;
    }
    checkCurrentMenu(currentMenu) {
    	 switch(currentMenu){
    	 case types.TOOLBOX_SEARCH:
    		 this.showSearch=true;
    		 break;
    	 case types.ACCOUNT_CREATE:
    		 this.showAccount=true;
    		 break;
    	 default:
    		 this.showAccount=true;
    		 break;
    	 }
    }
    navigateMenus(_menu){
    	 this.props.navigateMenus(_menu);
    }
}

Dashboard.contextTypes = {
    router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
	  return { currentMenu: state.Auth.menu };
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({navigateMenus: navigateMenus}, dispatch);
	}

	export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
