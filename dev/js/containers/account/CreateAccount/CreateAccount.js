import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BrandingHeader from './../../common/components/BrandingHeader';
import Navigation from './../../common/components/Navigation';
import AccountTechnicalDetails from './AccountTechnicalDetails';
import AccountCommDetails from './AccountCommDetails';
import AccountInterfaces from './AccountInterfaces';
import AccountReviewDetails from './AccountReviewDetails';
import WizardStepper from './../../common/wizardStepper';
import {handleSelectFieldsChange } from './../actions/accountActions';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
require('./../../../../scss/style.scss');
import * as types from '../../common/commonActionTypes'


class CreateAccount extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          buttonStyle : {
            commStyle : "btn btn-circle btn-primary",
            techStyle : "btn btn-circle inactive-step",
            intrStyle : "btn btn-circle inactive-step",
            revwStyle : "btn btn-circle inactive-step"
          },
          submenus:{
            head: types.ACCOUNT_LIST,
            head_icon : "accounts_icon",
            subVal:[
              types.ACCOUNT_CREATE
            ]
          }
        };
        this.showCommDetails=true;
        this.showTechnicalDetails = false;
        this.showInterfaceDetails=false;
        this.showReviewDetails=false;
        this.accountObj = {};
    }


    render() {
      console.log("render showTechnicalDetails==",this.props.showTechnicalDetails);

        return (
          <div>
            <BrandingHeader/>
            <Grid fluid={true}>
              <Row>
                <Col md={2}>
                  <Navigation submenus={this.state.submenus}></Navigation>
                </Col>
                <Col md={10}>
                  <div className="content">
                    <div className="line page-heading">
                      CTool Create Account
                    </div>
                    <div>
                      <WizardStepper buttonStyle = { this.state.buttonStyle }/>
                    </div>
                    {this.showCommDetails && <AccountCommDetails accountObj={this.accountObj} />}
                    {this.showInterfaceDetails && <AccountInterfaces accountObj={this.accountObj} />}
                    {this.showTechnicalDetails && <AccountTechnicalDetails accountObj={this.accountObj} />}
                    {this.showReviewDetails && <AccountReviewDetails accountObj={this.accountObj} />}
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        )
    }

    componentWillReceiveProps(nextProps) {
      console.log("componentWillReceiveProps==",nextProps);
        if(nextProps.showTechnicalDetails){
          this.showTechnicalDetails = nextProps.showTechnicalDetails;
          this.showCommDetails=false;
          this.showInterfaceDetails=false;
          this.showReviewDetails=false;
          this.accountObj = nextProps.data;
          this.setState({
            buttonStyle : {
              commStyle : "btn btn-circle btn-default",
              techStyle : "btn btn-circle btn-primary",
              intrStyle : "btn btn-circle inactive-step",
              revwStyle : "btn btn-circle inactive-step"
            }
          });
        }
        else if(nextProps.showCommDetails){
          this.showTechnicalDetails = false;
          this.showInterfaceDetails=false;
          this.showReviewDetails=false;
          this.showCommDetails=nextProps.showCommDetails;
          this.accountObj = nextProps.data;
          this.setState({
            buttonStyle : {
              commStyle : "btn btn-circle btn-primary",
              techStyle : "btn btn-circle inactive-step",
              intrStyle : "btn btn-circle inactive-step",
              revwStyle : "btn btn-circle inactive-step"
            }
          });
        }
        else if(nextProps.showInterfaceDetails){
          this.showTechnicalDetails = false;
          this.showCommDetails=false;
          this.showReviewDetails=false;
          this.showInterfaceDetails=nextProps.showInterfaceDetails;
          this.accountObj = nextProps.data;
          this.setState({
            buttonStyle : {
              commStyle : "btn btn-circle btn-default",
              techStyle : "btn btn-circle btn-default",
              intrStyle : "btn btn-circle btn-primary",
              revwStyle : "btn btn-circle inactive-step"
            }
          });
        }
        else if(nextProps.showReviewDetails){
          this.showTechnicalDetails = false;
          this.showCommDetails=false;
          this.showInterfaceDetails=false;
          this.showReviewDetails=nextProps.showReviewDetails;
          this.accountObj = nextProps.data;
          this.setState({
            buttonStyle : {
              commStyle : "btn btn-circle btn-default",
              techStyle : "btn btn-circle btn-default",
              intrStyle : "btn btn-circle btn-default",
              revwStyle : "btn btn-circle btn-primary"
            }
          });
        }

      }

}

function mapStateToProps(state) {
    return {
       data: state.Account.accountInfo,
       showTechnicalDetails: state.Account.showTechnicalDetails,
       showCommDetails:state.Account.showCommDetails,
       showInterfaceDetails:state.Account.showInterfaceDetails,
       showReviewDetails:state.Account.showReviewDetails
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ handleSelectFieldsChange: handleSelectFieldsChange }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
