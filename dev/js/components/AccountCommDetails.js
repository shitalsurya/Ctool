import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";

import {handleSelectFieldsChange,goToTechnicalDetails } from '../actions/accountActions';
import * as types from '../actions/actionTypes';

/* */
import Users from '../../json/Users.json';
import Company from '../../json/Company.json';
import BillingLocation from '../../json/BillingLocation.json';
import ServiceLevel from '../../json/ServiceLevel.json';
import TrafficType from '../../json/TrafficType.json';
//import Countries from '../../json/Countries.json';

require('../../scss/style.scss');

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class AccountCommDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
         this.accountCommInfo=this.props.accountObj || [];
    }
    handleSelectFieldsChange(target, event, key, value) {
        this.props.handleSelectFieldsChange(value, target);
    }
    onRequesterChanged(){
        this.accountCommInfo.requesterName = this.refs.requesterName.getValue();
    }
    initializeData(_data, valueCol) {

        var list = _data.map(function (field) {
            if (typeof (field) == 'object') {
                return (
                    <MenuItem key={field[valueCol]} value={field.name} primaryText={field.name} />
                );
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
                <div>

                                                        <div className="section-content">
                                                          <div className="underline-h4">
                                                            <h4 className="breadcrumbs">Commercial Information</h4>
                                                            </div>
                                                            <div className="Account-details-container">
                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                        <TextField className="TextField"
                                                                            id="text-requester-name"
                                                                            floatingLabelText="Requester Name"
                                                                            hintText="Requester Name"
                                                                            ref="requesterName"
                                                                            onBlur={this.onRequesterChanged.bind(this)}
                                                                        />
                                                                    </div>
                                                                    <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                        <SelectField
                                                                            floatingLabelText="Select Account Manager"
                                                                            value={this.accountCommInfo.acctManager}
                                                                            onChange={this.handleSelectFieldsChange.bind(this, types.ACCOUNT_MGR_CHANGE)}>
                                                                            {listUsers}
                                                                        </SelectField>
                                                                    </div>

                                                                </div>
                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                        <SelectField
                                                                            floatingLabelText="Select Company"
                                                                            value={this.accountCommInfo.company}
                                                                            onChange={this.handleSelectFieldsChange.bind(this, types.ACCOUNT_COMPANY_CHANGE)}>
                                                                            {listCompany}
                                                                        </SelectField>
                                                                    </div>
                                                                    <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                        <SelectField
                                                                            floatingLabelText="Billing Location"
                                                                            value={this.accountCommInfo.billingLocation}
                                                                            onChange={this.handleSelectFieldsChange.bind(this, types.ACCOUNT_BILLING_LOCATION)}>
                                                                            {listBillingLocation}
                                                                        </SelectField>
                                                                    </div>

                                                                </div>
                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                        <SelectField
                                                                            floatingLabelText="Service Level"
                                                                            value={this.accountCommInfo.serviceLevel}
                                                                            onChange={this.handleSelectFieldsChange.bind(this, types.SERVICE_LEVEL)}>
                                                                            {listServiceLevel}
                                                                        </SelectField>
                                                                    </div>
                                                                    <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                        <SelectField
                                                                            floatingLabelText="Traffic Type"
                                                                            value={this.accountCommInfo.trafficType}
                                                                            onChange={this.handleSelectFieldsChange.bind(this, types.TRAFFIC_TYPE)}>
                                                                            {listTrafficType}
                                                                        </SelectField>
                                                                    </div>

                                                                </div>
                                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bottom-margin-large">
                                                                                                                  <div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">

                                                                                                                  </div>
                                                                                                                  <div className="detail-content acc-nav-buttons col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                                                                      <RaisedButton label="Next" onClick={this.goToTechnicalDetails.bind(this)} className="RaisedButton sap-btn pull-right" />
                                                                                                                  </div>
                                                                                                              </div>
                                                            </div>



                    </div>
                    <ToastContainer
                        toastMessageFactory={ToastMessageFactory}
                        ref="container"
                        className="toast-top-right"
                    />
                </div>
            </MuiThemeProvider>
        )
    }
    goToTechnicalDetails() {

      this.props.goToTechnicalDetails(this.accountCommInfo);

    }
  		componentDidMount () {

  		this.refs.requesterName.getInputNode().value = this.props.accountObj.requesterName||"";
    }

    componentWillReceiveProps(nextProps) {
        switch (nextProps.target) {
            case types.ACCOUNT_MGR_CHANGE:
                this.accountCommInfo.acctManager = nextProps.data;
                break;
            case types.ACCOUNT_COMPANY_CHANGE:
                this.accountCommInfo.company = nextProps.data;
                break;
            case types.ACCOUNT_BILLING_LOCATION:
                this.accountCommInfo.billingLocation = nextProps.data;
                break;
            case types.SERVICE_LEVEL:
                this.accountCommInfo.serviceLevel = nextProps.data;
                break;
            case types.TRAFFIC_TYPE:
                this.accountCommInfo.trafficType = nextProps.data;
                break;
        }

    }
}
function mapStateToProps(state) {
    return { data: state.Account.data, target: state.Account.target };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({handleSelectFieldsChange:handleSelectFieldsChange,
    goToTechnicalDetails:goToTechnicalDetails
          }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountCommDetails);
