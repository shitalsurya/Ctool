import React from 'react';
import {connect} from 'react-redux';
import Account from '../containers/Account';
import { bindActionCreators } from 'redux';
require('../../scss/style.scss');


	
export default class Dashboard extends React.Component {
    constructor(props, context) {
        super(props, context);
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
                                <li className="active"><a href="#">Accounts <span className="sr-only">(current)</span></a></li>
                                <li><a href="#">Connections</a></li>
                                <li><a href="#">Operators</a></li>
                                <li><a href="#">Miscelleneous</a></li>
                                <li><a href="#">Toolbox</a></li>
                                <li>
                                    <button className="sap-btn sap-btn-primary" onClick={this.showAbout.bind(this)}>About Us</button>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Account></Account>
                <footer className="footer">
                    <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>
                    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 ">
                        <label>v6.6.6 &copy; CTOOL</label>
                    </div>
                    <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>

                </footer>

            </div>
        )
    }
    showAbout() {
        this.context.router.push('about');
    }
}

Dashboard.contextTypes = {
    router: React.PropTypes.object.isRequired
};
