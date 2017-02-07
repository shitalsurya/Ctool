/**
 * Created by Sachin on 2/5/2017.
 */
import React from 'react';
import {connect} from 'react-redux';

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


                <div className='sap-form'>
                    <section>
                        <form className="ctoolControllerForm">
                            <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>
                            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 ">
                                <div className='content'>
                                    <h3 className="page-heading">Create Account</h3>
                                    <div className="hr-extended"></div>

                                    <h4 className="breadcrumbs">Commercial Information</h4>

                                    <div>
                                        <table className="CTOOL-table table table-stripped table-condensed form-group hr-extended">
                                            <tbody>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Requester</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9"><label> json.requester</label></td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label> Account Manager</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                                <select className="form-control" id="sel1"
                                                                    ng-options="opt.name for opt in commercial.users"
                                                                    ng-model="json.acctMgr"></select>

                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label> Company</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className=" col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                                                <select className="form-control" id="sel2"
                                                                    ng-model="json.company">
                                                                    <option ng-repeat="option in commercial.company">option</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label> Billing Location</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                                <select className="form-control" id="sel3"
                                                                    ng-model="json.billingLocation">
                                                                    <option ng-repeat="option in commercial.billingLocation">option</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Service Level</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
                                                                <select className="form-control" id="sel4"
                                                                    ng-model="json.serviceLevel">
                                                                    <option ng-repeat="option in commercial.serviceLevel">option</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Traffic Type</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                                                <select className="form-control" id="sel5"
                                                                    ng-model="json.trafficType">
                                                                    <option ng-repeat="option in commercial.trafficType">option</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Revenue Sharing</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9"><label>No</label></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                        <button className="sap-btn sap-btn-primary" ng-click="showNextTables(!showNextFlag)">Next</button>
                                        <br />
                                    </div>

                                    <table className="CTOOL-table table table-stripped table-condensed form-group hr-expanded" ng-if="showNextFlag">
                                        <tbody>
                                            <tr>
                                                <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Requester</label></td>
                                                <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9"><label>json.requester</label></td>
                                            </tr>
                                            <tr>
                                                <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Account Manager</label></td>
                                                <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9"><label>json.acctMgr.name</label></td>
                                            </tr>

                                            <tr>
                                                <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Company</label></td>
                                                <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9"><label>json.company</label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Billing Location</label></td>
                                                <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9"><label>json.billingLocation</label></td>
                                            </tr>
                                            <tr>
                                                <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Service Level</label></td>
                                                <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9"><label>json.serviceLevel</label></td>
                                            </tr>
                                            <tr>
                                                <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Traffic Type</label></td>
                                                <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9"><label>json.trafficType</label></td>
                                            </tr>
                                            <tr>
                                                <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Revenue Sharing</label></td>
                                                <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9"><label>No</label></td>
                                            </tr>

                                        </tbody>
                                    </table>



                                </div>


                                <div ng-className="getTables" id="second-level">
                                    <div className='content'>

                                        <h4 className="breadcrumbs">Technical Details</h4>
                                        <table className="CTOOL-table table table-condensed table-stripped form-group hr-extended">
                                            <tbody>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Exsiting Company Contacts</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                                                <select className="form-control" id="sel6"
                                                                    ng-change="updateTechnicalDetails()">
                                                                    <option>a</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                                                <label>or  </label>
                                                                <a className="custom-anchor">
                                                                    &nbsp; create new
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Name</label><sup className="required">&nbsp;*</sup></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-10 col-xs-12">
                                                                <input className="form-control" type="text" name="name" required="Please enter name." ng-model="json.contact.name"></input>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-1 col-xs-12"><label>(NEW)</label></div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Email</label><sup className="required">&nbsp;*</sup></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <input className="form-control" type="email" name="email" ng-model="json.contact.email" required></input>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Country</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <select className="form-control" id="sel7" ng-model="json.country">
                                                                    <option>a</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Mobile Phone Number</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <input className="form-control" type="text" ng-model="json.contact.mobilePhoneNumber"></input>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>

                                    <div className='content'>

                                        <h4 className="breadcrumbs">Account Name and Interfaces</h4>
                                        <table className="CTOOL-table table table-stripped table-condensed form-group ">
                                            <tbody>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Technical Name</label><sup className="required">&nbsp;*</sup></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <input className="form-control" type="text" required=""
                                                                    ng-model="json.techName" name="technicalName"></input>
                                                                <span className="error" ng-show="ctoolControllerForm.technicalName.$touched && ctoolControllerForm.technicalName.$invalid">Please enter technical name.</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Commercial Name</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                <input className="form-control" type="text" ng-model="json.commercialName"></input>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Existing Accounts</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className=" col-lg-3 col-md-3 col-sm-9 col-xs-12">
                                                                <select className="form-control" id="sel8" ng-model="json.existingAccount">
                                                                    <option ng-repeat="option in existingAccounts"> option </option>
                                                                </select>
                                                            </div>
                                                            <div className=" col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                                <label>(for reference only)</label>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Interface</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                            <div className=" col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                                <select className="form-control" id="sel9"
                                                                    ng-model="json.interfaceType">
                                                                    <option ng-repeat="option in account.interfaceType"> option </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                    <div className='content'>
                                        <button className="sap-btn sap-btn-primary" ng-click="showNextTables(!showNextFlag)">Back</button>
                                        &nbsp;&nbsp;
                                        <button className="sap-btn sap-btn-primary" ng-click="create()">Next</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>
                        </form>
                    </section>
                </div>


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
