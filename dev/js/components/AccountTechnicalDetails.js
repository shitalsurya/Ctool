import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectField from 'material-ui/SelectField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


import {handleTechDetailsNext,handleSelectFieldsChange} from '../actions/accountActions';
import * as types from '../actions/actionTypes';

import Users from '../../json/Users.json';
require('../../scss/style.scss');


	
class AccountTechnicalDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.accountTechDetailsObj = {
        		ExstContacts: null,
        		Country:null
    		  };
        
    }
   
    handleSelectFieldsChange(target,event,key,value){
    	this.props.handleSelectFieldsChange(value,target);
    }
    handleTechDetailsNext(){
    	this.data=this.props.commObj || [];
   	 	console.log("AccountTechnicalDetails==",this.data);
    	console.log("Account Info=", this.accountTechDetailsObj);
    }
    initializeData(_data){
    	var list = _data.map(function (field) {
            return (
            		 <MenuItem value={field.name} primaryText={field.name} />
            );
        });
    	return list;
    }
    render() {
    	
    	var listUsers = this.initializeData(Users.data);
    	
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

                                    <h4 className="breadcrumbs">Technical Details</h4>

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
                                                        floatingLabelText="Select Company Contact"
                                                        value={this.accountTechDetailsObj.ExstContacts}  
                                                        
                                                        onChange={this.handleSelectFieldsChange.bind(this,types.ACCOUNT_COMPANY_CONTACT)}
                                                      >
                                                        {listUsers}
                                                      </SelectField>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                        <RaisedButton label="Next" onClick={this.handleTechDetailsNext.bind(this)} className="sap-btn btn-block btn-login" />
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
        case types.ACCOUNT_COMPANY_CONTACT:
        	this.accountTechDetailsObj.ExstContacts=nextProps.data;
        	break;
        }
    
    }
}
function mapStateToProps(state) {
	  return { data: state.Account.data,target: state.Account.target };
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({handleSelectFieldsChange:handleSelectFieldsChange,handleTechDetailsNext: handleTechDetailsNext}, dispatch);
	}

	export default connect(mapStateToProps, mapDispatchToProps)(AccountTechnicalDetails);
