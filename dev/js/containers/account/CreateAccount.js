import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AccountTechnicalDetails from './AccountTechnicalDetails';
import AccountCommDetails from './AccountCommDetails';
import AccountInterfaces from './AccountInterfaces';
import AccountReviewDetails from './AccountReviewDetails';

import {handleSelectFieldsChange } from '../../containers/account/actions/accountActions';
require('../../../scss/style.scss');



class CreateAccount extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.showCommDetails=true;
          this.showTechnicalDetails = false;
      this.showInterfaceDetails=false;
      this.showReviewDetails=false;
          this.accountObj = {};
    }


    render() {
console.log("render showTechnicalDetails==",this.props.showTechnicalDetails);

        return (
               <div className="content">
                                <div className="line page-heading">
                                CTool Create Account
                                    </div>

                                        {this.showCommDetails && <AccountCommDetails accountObj={this.accountObj} />}
                                        {this.showInterfaceDetails && <AccountInterfaces accountObj={this.accountObj} />}
                                        {this.showTechnicalDetails && <AccountTechnicalDetails accountObj={this.accountObj} />}
                                        {this.showReviewDetails && <AccountReviewDetails accountObj={this.accountObj} />}
                </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.showTechnicalDetails){
          this.showTechnicalDetails = nextProps.showTechnicalDetails;
              this.showCommDetails=false;
                this.showInterfaceDetails=false;
                    this.showReviewDetails=false;
                  this.accountObj = nextProps.data;

        }
        else if(nextProps.showCommDetails){
          this.showTechnicalDetails = false;
            this.showInterfaceDetails=false;
                this.showReviewDetails=false;
              this.showCommDetails=nextProps.showCommDetails;
                  this.accountObj = nextProps.data;
        }
        else if(nextProps.showInterfaceDetails){
          this.showTechnicalDetails = false;
            this.showCommDetails=false;
                this.showReviewDetails=false;
              this.showInterfaceDetails=nextProps.showInterfaceDetails;
                  this.accountObj = nextProps.data;
        }
        else if(nextProps.showReviewDetails){
          this.showTechnicalDetails = false;
            this.showCommDetails=false;
              this.showInterfaceDetails=false;
              this.showReviewDetails=nextProps.showReviewDetails;
                  this.accountObj = nextProps.data;
        }

      }

}

function mapStateToProps(state) {
    return { data: state.Account.accountInfo,
       showTechnicalDetails: state.Account.showTechnicalDetails,
    showCommDetails:state.Account.showCommDetails,
  showInterfaceDetails:state.Account.showInterfaceDetails,
    showReviewDetails:state.Account.showReviewDetails };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ handleSelectFieldsChange: handleSelectFieldsChange }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
