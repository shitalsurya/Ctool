import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


import {handleTechDetailsNext,handleSelectFieldsChange} from '../actions/accountActions';
import * as types from '../actions/actionTypes';

import Users from '../../json/Users.json';
import Countries from '../../json/Countries.json';

require('../../scss/style.scss');


	
class AccountTechnicalDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.accountTechDetailsInfo = {
        		ExstContacts: null,
        		name:null,
        		email:null,
        		Country:null
    		  };
        
    }
   
    handleSelectFieldsChange(target,event,key,value){
    	this.props.handleSelectFieldsChange(value,target);
    }
    handleTechDetailsNext(){
     this.accountCommInfo=this.props.accountObj || [];
     
   	 this.accountTechDetailsInfo.name = this.refs.name.getValue();
   	 this.accountTechDetailsInfo.email = this.refs.email.getValue();
   	 this.accountTechDetailsInfo.MobNo = this.refs.MobNo.getValue();
   	 
   	 this.accountInfo = Object.assign(this.accountCommInfo,this.accountTechDetailsInfo);
     
   	 console.log("Account Info=", this.accountInfo);
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
    	var listCountries = this.initializeData(Countries.data,'code');
    	
        return (
        		 <MuiThemeProvider>
<div>
                                    <h4 className="breadcrumbs">Technical Details</h4>

                                    <div>
                                        <table className="CTOOL-table table table-stripped table-condensed form-group hr-extended">
                                            <tbody>
                                                <tr>
                                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label> Existing Company Contacts</label></td>
                                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                        <div className="row">
                                                        <SelectField
                                                        floatingLabelText="Select Company Contacts"
                                                        value={this.accountTechDetailsInfo.ExstContacts}  
                                                        
                                                        onChange={this.handleSelectFieldsChange.bind(this,types.ACCOUNT_COMPANY_CONTACT)}
                                                      >
                                                        {listUsers}
                                                      </SelectField>
                                                        </div>
                                                    </td>
                                                </tr>
                                             <tr>
                                                <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label> Name</label></td>
                                                <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                    <div className="row">
                                                  <TextField
		    										id="text-field-default"
		    										floatingLabelText="Name"
		    										hintText="Name"
		    										ref="name"
		    									/>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Email</label></td>
                                            <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                                <div className="row">
                                              <TextField
	    										id="text-field-default"
	    										floatingLabelText="Email"
	    										hintText="Email"
	    										ref="email"
	    									/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                        <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Country</label></td>
                                        <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                            <div className="row">
                                            <SelectField
                                            floatingLabelText="Select Country"
                                            value={this.accountTechDetailsInfo.Country}  
                                            
                                            onChange={this.handleSelectFieldsChange.bind(this,types.ACCOUNT_COUNTRY_CHANGE)}
                                          >
                                            {listCountries}
                                          </SelectField>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td className="col-md-3 col-sm-3 col-lg-3 col-xs-3"><label>Mobile Number</label></td>
                                    <td className="col-md-9 col-sm-9 col-lg-9 col-xs-9">
                                        <div className="row">
                                      <TextField
										id="text-field-default"
										floatingLabelText="Mobile Number"
										hintText="Mobile Number"
										ref="MobNo"
									/>
                                        </div>
                                    </td>
                                </tr>
                                            </tbody>
                                        </table>
                                        <RaisedButton label="Next" onClick={this.handleTechDetailsNext.bind(this)} className="sap-btn btn-block btn-login" />
                            </div>
                            </div>
       	 </MuiThemeProvider>
        )
    }
    componentWillReceiveProps (nextProps) {
        switch(nextProps.target){
        case types.ACCOUNT_COMPANY_CONTACT:
        	this.accountTechDetailsInfo.ExstContacts=nextProps.data;
        	break;
        case types.ACCOUNT_COUNTRY_CHANGE:
        	this.accountTechDetailsInfo.Country=nextProps.data;
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
