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
import AccountCommDetails from '../components/AccountCommDetails';
import {handleSelectFieldsChange } from '../actions/accountActions';
import * as types from '../actions/actionTypes';
injectTapEventPlugin();  /*This is needed for SelectField popup */




require('../../scss/style.scss');



class Account extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.showTechnicalDetails = false;
        this.showCommDetails=true;
          this.accountObj = {};
    }


    render() {


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
                                        {this.showCommDetails && <AccountCommDetails accountObj={this.accountObj} />}
                                        {this.showTechnicalDetails && <AccountTechnicalDetails accountObj={this.accountObj} />}
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
        if(nextProps.showTechnicalDetails){
          this.showTechnicalDetails = nextProps.showTechnicalDetails;
              this.showCommDetails=false;
                  this.accountObj = nextProps.data;
        }
        else{
          this.showTechnicalDetails = false;
              this.showCommDetails=nextProps.showCommDetails;
                  this.accountObj = nextProps.data;
        }

      }

}

function mapStateToProps(state) {
    return { data: state.Account.accountCommInfo, showTechnicalDetails: state.Account.showTechnicalDetails,
    showCommDetails:state.Account.showCommDetails };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ handleSelectFieldsChange: handleSelectFieldsChange }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
