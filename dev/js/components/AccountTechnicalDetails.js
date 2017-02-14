import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


import { createNewAccount, handleSelectFieldsChange, getMetadata } from '../actions/accountActions';
import * as types from '../actions/actionTypes';

import Users from '../../json/Users.json';
import Countries from '../../json/Countries.json';

require('../../scss/style.scss');



class AccountTechnicalDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.accountTechDetailsInfo = {};

    }

    handleSelectFieldsChange(target, event, key, value) {
        this.props.handleSelectFieldsChange(value, target);
    }
    handleTechDetailsNext() {
        this.accountCommInfo = this.props.accountObj || [];

        this.accountTechDetailsInfo.name = this.refs.name.getValue();
        this.accountTechDetailsInfo.email = this.refs.email.getValue();
        this.accountTechDetailsInfo.MobNo = this.refs.MobNo.getValue();
        this.accountTechDetailsInfo.DirectNo = this.refs.DirectNo.getValue();

        this.accountTechDetailsInfo.techName = this.refs.techName.getValue();
        this.accountTechDetailsInfo.commName = this.refs.commName.getValue();

        this.accountInfo = Object.assign(this.accountCommInfo, this.accountTechDetailsInfo);

        console.log("Account Info=", this.accountInfo);
        this.props.createNewAccount(this.accountInfo);
    }
    initializeData(_data, valueCol) {
        var list = _data.map(function (field) {
            return (
                <MenuItem key={field[valueCol]} value={field.name} primaryText={field.name} />
            );
        });
        return list;
    }
    render() {

        var listUsers = this.initializeData(Users.data, 'id');

        this.props.getMetadata();
        var listCountries = this.initializeData(Countries.data, 'code');

        return (
            <MuiThemeProvider>
                <div>
                    <div className="section-content">
                        <div className="underline-h4">
                            <h4 className="breadcrumbs">Technical Details</h4>
                        </div>

                        <div>
                            <div className="Account-details-container">
                                <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <SelectField
                                        floatingLabelText="Select Company Contacts"
                                        value={this.accountTechDetailsInfo.ExstContacts}

                                        onChange={this.handleSelectFieldsChange.bind(this, types.ACCOUNT_COMPANY_CONTACT)}
                                    >
                                        {listUsers}
                                    </SelectField>
                                </div>
                                <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <TextField
                                        id="text-field-default"
                                        floatingLabelText="Name"
                                        hintText="Name"
                                        ref="name"
                                    />
                                </div>
                                <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <TextField
                                        id="text-field-default"
                                        floatingLabelText="Email"
                                        hintText="Email"
                                        ref="email"
                                    />
                                </div>
                                <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <SelectField
                                        floatingLabelText="Select Country"
                                        value={this.accountTechDetailsInfo.Country}

                                        onChange={this.handleSelectFieldsChange.bind(this, types.ACCOUNT_COUNTRY_CHANGE)}
                                    >
                                        {listCountries}
                                    </SelectField>
                                </div>
                                <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <TextField
                                        id="text-field-default"
                                        floatingLabelText="Mobile Phone Number"
                                        hintText="Mobile Phone Number"
                                        ref="MobNo"
                                    />
                                </div>
                                <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <TextField
                                        id="text-field-default"
                                        floatingLabelText="Direct Phone Number"
                                        hintText="Direct Phone Number"
                                        ref="DirectNo"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="section-content">
                        <div className="underline-h4">
                            <h4 className="breadcrumbs">Account Name and Interfaces</h4>
                        </div>
                        <div className="Account-details-container">
                            <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <TextField
                                    id="text-field-default"
                                    floatingLabelText="Technical Name"
                                    hintText="Technical Name"
                                    ref="techName"
                                />

                            </div>
                            <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <TextField
                                    id="text-field-default"
                                    floatingLabelText="Commercial Name"
                                    hintText="Commercial Name"
                                    ref="commName"
                                />

                            </div>
                            <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <SelectField
                                    floatingLabelText="Existing accounts"
                                    value={this.accountTechDetailsInfo.ExstAccts}

                                    onChange={this.handleSelectFieldsChange.bind(this, types.ACCOUNT_EXSTACCTS_CHANGE)}
                                >
                                    <MenuItem value="act1" primaryText=" 10 GRAD(37669)" />
                                    <MenuItem value="act2" primaryText="100 BEST(39551)" />
                                    <MenuItem value="act3" primaryText="10DUKE (38660)" />
                                    <MenuItem value="act4" primaryText="118811 (39258)" />
                                </SelectField>
                            </div>
                            <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <SelectField
                                    floatingLabelText="Interface"
                                    value={this.accountTechDetailsInfo.Interface}

                                    onChange={this.handleSelectFieldsChange.bind(this, types.ACCOUNT_INTERFACE_CHANGE)}
                                >
                                    <MenuItem value="http" primaryText="HTTP" />
                                    <MenuItem value="smtp" primaryText="SMTP" />
                                    <MenuItem value="smtp" primaryText="SMPP" />
                                </SelectField>
                            </div>
                        </div>


                        <RaisedButton label="Next" onClick={this.handleTechDetailsNext.bind(this)} className="RaisedButton sap-btn" />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
    componentWillReceiveProps(nextProps) {
        switch (nextProps.target) {
            case types.ACCOUNT_COMPANY_CONTACT:
                this.accountTechDetailsInfo.ExstContacts = nextProps.data;
                break;
            case types.ACCOUNT_COUNTRY_CHANGE:
                this.accountTechDetailsInfo.Country = nextProps.data;
                break;
            case types.ACCOUNT_EXSTACCTS_CHANGE:
                this.accountTechDetailsInfo.ExstAccts = nextProps.data;
                break;
            case types.ACCOUNT_INTERFACE_CHANGE:
                this.accountTechDetailsInfo.Interface = nextProps.data;
                break;

        }

    }
}
function mapStateToProps(state) {
    return { data: state.Account.data, target: state.Account.target };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        handleSelectFieldsChange: handleSelectFieldsChange,
        createNewAccount: createNewAccount,
        getMetadata: getMetadata
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountTechnicalDetails);
