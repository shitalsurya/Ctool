import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AccountTechnicalDetails from './AccountTechnicalDetails';
import AccountCommDetails from './AccountCommDetails';
import {handleSelectFieldsChange } from '../../containers/account/actions/accountActions';
require('../../../scss/style.scss');



class CreateAccount extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.showTechnicalDetails = false;
        this.showCommDetails=true;
          this.accountObj = {};
    }


    render() {


        return (
               <div className="content">
                <div className="col-md-1"></div>
                                <div className="col-md-10 section-content">
                                        <span className="page-heading">Create Account</span>
                                        {this.showCommDetails && <AccountCommDetails accountObj={this.accountObj} />}
                                        {this.showTechnicalDetails && <AccountTechnicalDetails accountObj={this.accountObj} />}
                                </div>
                                  <div className="col-md-1"></div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
