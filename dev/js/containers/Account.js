import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectField from 'material-ui/SelectField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AccountTechnicalDetails from '../components/AccountTechnicalDetails';

import {handleAccountNext,handleSelectFieldsChange} from '../actions/accountActions';
import * as types from '../actions/actionTypes';
injectTapEventPlugin();  /*This is needed for SelectField popup */

import Users from '../../json/Users.json';
require('../../scss/style.scss');


	
class Account extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.showTechnicalDetails=false;
        this.accountObj = {
        		AcctMgr: null,
        		Company:null
    		  };
    }
   
    handleSelectFieldsChange(target,event,key,value){
    	this.props.handleSelectFieldsChange(value,target);
    }
    handleAccountNext(){
    	this.props.handleAccountNext();
    }
    initializeData(_data,valueCol){
    	var list = _data.map(function (field) {
            return (
            		 <MenuItem key={field[valueCol]} value={field.name} primaryText={field.name} />
            );
        });
    	return list;
    }
    render() {
    	
    	var listUsers = this.initializeData(Users.data,'id');
    	
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
                                                        floatingLabelText="Select Account Manager"
                                                        value={this.accountObj.AcctMgr}  
                                                        
                                                        onChange={this.handleSelectFieldsChange.bind(this,types.ACCOUNT_MGR_CHANAGE)}
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
                                                            <SelectField
                                                            floatingLabelText="Select Company"
                                                            value={this.accountObj.Company}  
                                                            
                                                            onChange={this.handleSelectFieldsChange.bind(this,types.ACCOUNT_COMPANY_CHANAGE)}
                                                          >
                                                            {listUsers}
                                                          </SelectField>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Revenue Sharing</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9"><label>No</label></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                        <RaisedButton label="Next" onClick={this.handleAccountNext.bind(this)} className="sap-btn btn-block btn-login" />
                                        {this.showTechnicalDetails && <AccountTechnicalDetails accountObj={this.accountObj}/>}
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
        switch(nextProps.target){
        case types.ACCOUNT_MGR_CHANAGE:
        	this.accountObj.AcctMgr=nextProps.data;
        	break;
    	case types.ACCOUNT_COMPANY_CHANAGE:
            this.accountObj.Company=nextProps.data;
            break;
    	case types.ACCOUNT_NEXT:
            this.showTechnicalDetails=true;
            break;
        }
    
    }
}
function mapStateToProps(state) {
	  return { data: state.Account.data,target: state.Account.target };
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({handleSelectFieldsChange:handleSelectFieldsChange,handleAccountNext: handleAccountNext}, dispatch);
	}

	export default connect(mapStateToProps, mapDispatchToProps)(Account);
