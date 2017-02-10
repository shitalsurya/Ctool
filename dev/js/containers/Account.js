import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectField from 'material-ui/SelectField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {handleAccountNext} from '../actions/actions';
injectTapEventPlugin();

const styles = {
  customWidth: {
    width: 150,
  },
};

import Users from '../../json/Users.json';
require('../../scss/style.scss');


	
class Account extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.myState = {
    		    value: null,
    		  };
    }
   
    handleAccMgrChange(event,key,value){
    	//this.setState({value});
    	this.props.handleAccountNext(value);
    //	this.mystate.value=value;
    	//console.log(this.mystate.value);
    }
    render() {
    	
    	this.accountObj={};
    	var listUsers = Users.data.map(function (user) {
            return (
            		 <MenuItem value={user.name} primaryText={user.name} />
            );
        });
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
                                                        <SelectField
                                                        value={this.myState.value}  
                                                        onChange={this.handleAccMgrChange.bind(this)}
                                                      >
                                                        {listUsers}
                                                      </SelectField>
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
    componentWillReceiveProps (nextProps) {
        console.log("test",nextProps.data);
        this.myState.value=nextProps.data;
    }
}
function mapStateToProps(state) {
	  return { data: state.Auth.data };
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({handleAccountNext: handleAccountNext}, dispatch);
	}

	export default connect(mapStateToProps, mapDispatchToProps)(Account);
