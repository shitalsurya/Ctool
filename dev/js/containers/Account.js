import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectField from 'material-ui/SelectField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AccountTechnicalDetails from '../components/AccountTechnicalDetails';

import { handleAccountNext, handleSelectFieldsChange } from '../actions/accountActions';
import * as types from '../actions/actionTypes';
injectTapEventPlugin();  /*This is needed for SelectField popup */

import Users from '../../json/Users.json';
import Company from '../../json/Company.json';
import BillingLocation from '../../json/BillingLocation.json';
import ServiceLevel from '../../json/ServiceLevel.json';
import TrafficType from '../../json/TrafficType.json';


require('../../scss/style.scss');



class Account extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.showTechnicalDetails = false;
        this.accountObj = {
            AcctMgr: null,
            Company: null
        };
    }

    handleSelectFieldsChange(target, event, key, value) {
        this.props.handleSelectFieldsChange(value, target);
    }
    handleAccountNext() {
        this.props.handleAccountNext();
    }
    initializeData(_data, valueCol) {
        var list = _data.map(function (field) {
            if (typeof (field) == 'object') {
                return (
                    <MenuItem key={field[valueCol]} value={field.name} primaryText={field.name} />
                );
                // }else if (typeof(field) == 'string'){
            } else {
                return (
                    <MenuItem key={field} value={field} primaryText={field} />
                );
            }

        });
        return list;
    }
    render() {

        var listUsers = this.initializeData(Users.data, 'id');
        var listBillingLocation = this.initializeData(BillingLocation.data, 'id');
        var listServiceLevel = this.initializeData(ServiceLevel.data, 'id');
        var listTrafficType = this.initializeData(TrafficType.data, 'id');
        var listCompany = this.initializeData(Company.data, 'id');

        return (
            <MuiThemeProvider>
                <div className="other-than-main">
                    <div className='sap-form'>
                        <section>
                            <form className="ctoolControllerForm">
                                <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>
                                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 ">
                                    <div className='content'>
                                        <h3 className="page-heading">Create Account</h3>
                                        <div className="hr-extended"></div>

                                        <div className="section-content">
                                            <h4 className="breadcrumbs">Commercial Information</h4>
                                            <div className="Account-details-container">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <TextField className="TextField"
                                                            id="text-requester-name"
                                                            floatingLabelText="Requester Name"
                                                            hintText="Requester Name"
                                                            ref="requesterName"
                                                        />
                                                    </div>
                                                    <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <SelectField
                                                            floatingLabelText="Select Account Manager"
                                                            value={this.accountObj.AcctMgr}
                                                            onChange={this.handleSelectFieldsChange.bind(this, types.ACCOUNT_MGR_CHANGE)}>
                                                            {listUsers}
                                                        </SelectField>
                                                    </div>

                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <SelectField
                                                            floatingLabelText="Select Company"
                                                            value={this.accountObj.Company}
                                                            onChange={this.handleSelectFieldsChange.bind(this, types.ACCOUNT_COMPANY_CHANGE)}>
                                                            {listCompany}
                                                        </SelectField>
                                                    </div>
                                                    <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <SelectField
                                                            floatingLabelText="Billing Location"
                                                            value={this.accountObj.BillingLocation}
                                                            onChange={this.handleSelectFieldsChange.bind(this, types.ACCOUNT_BILLING_LOCATION)}>
                                                            {listBillingLocation}
                                                        </SelectField>
                                                    </div>

                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <SelectField
                                                            floatingLabelText="Service Level"
                                                            value={this.accountObj.ServiceLevel}
                                                            onChange={this.handleSelectFieldsChange.bind(this, types.SERVICE_LEVEL)}>
                                                            {listServiceLevel}
                                                        </SelectField>
                                                    </div>
                                                    <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <SelectField
                                                            floatingLabelText="Traffic Type"
                                                            value={this.accountObj.TrafficType}
                                                            onChange={this.handleSelectFieldsChange.bind(this, types.TRAFFIC_TYPE)}>
                                                            {listTrafficType}
                                                        </SelectField>
                                                    </div>

                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bottom-margin-large">
                                                    <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">

                                                    </div>
                                                    <div className="detail-content acc-nav-buttons col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                        <RaisedButton label="Back" className="RaisedButton sap-btn pull-left" />
                                                        <RaisedButton label="Next" onClick={this.handleAccountNext.bind(this)} className="RaisedButton sap-btn pull-right" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/*<RaisedButton label="Next" onClick={this.handleAccountNext.bind(this)} className="RaisedButton sap-btn" />*/}
                                            {this.showTechnicalDetails && <AccountTechnicalDetails accountObj={this.accountObj} />}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>
                            </form>
                        </section>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
    componentWillReceiveProps(nextProps) {
        switch (nextProps.target) {
            case types.ACCOUNT_MGR_CHANGE:
                this.accountObj.AcctMgr = nextProps.data;
                break;
            case types.ACCOUNT_COMPANY_CHANGE:
                this.accountObj.Company = nextProps.data;
                break;
            case types.ACCOUNT_NEXT:
                this.showTechnicalDetails = true;
                break;
            case types.ACCOUNT_BILLING_LOCATION:
                this.accountObj.BillingLocation = nextProps.data;
                break;
            case types.SERVICE_LEVEL:
                this.accountObj.ServiceLevel = nextProps.data;
                break;
            case types.TRAFFIC_TYPE:
                this.accountObj.TrafficType = nextProps.data;
                break;
        }

    }
}
function mapStateToProps(state) {
    return { data: state.Account.data, target: state.Account.target };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ handleSelectFieldsChange: handleSelectFieldsChange, handleAccountNext: handleAccountNext }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
