import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup, Button, ButtonToolbar } from 'react-bootstrap';
import Select from 'react-select';
import { ToastContainer, ToastMessage} from "react-toastr";
import * as types from './../actions/accountActionTypes';
import { initializeData,handleSelectFieldsChange, goToTechnicalDetails } from './../actions/accountActions';
import Toggle from 'react-toggle';
require( './../../../../scss/style.scss' );
require( './../../../../scss/react-toggle.scss' );
import Users from './../../../../json/Users.json';
import Company from './../../../../json/Company.json';
import BillingLocation from './../../../../json/BillingLocation.json';
import ServiceLevel from './../../../../json/ServiceLevel.json';
import TrafficType from './../../../../json/TrafficType.json';
const ToastMessageFactory = React.createFactory( ToastMessage.animation );

class AccountCommDetails extends React.Component {
  constructor( props, context ) {
    super( props, context );
  //  this.accountCommInfo = this.props.accountObj || [];
    this.state={
        emptyFlag : true,
        toggleFlag : true,
      accountCommInfo:this.props.accountObj || []
    };
  //  this.accountCommInfo.revSharing = this.props.accountObj.revSharing || "No";
  }

  handleSelectFieldsChange( target,value ) {
    var info=this.state.accountCommInfo;
    if(!value)
       value = "";
    switch (target) {
      case types.ACCOUNT_MGR_CHANGE:
        info.acctManager=value.value;
        break;
      case types.ACCOUNT_COMPANY_CHANGE:
        info.company=value.value;
        break;
      case types.ACCOUNT_BILLING_LOCATION:
          info.billingLocation=value.value;
        break;
      case types.ACCOUNT_SERVICE_LEVEL:
          info.serviceLevel=value.value;
        break;
      case types.ACCOUNT_TRAFFIC_TYPE:
          info.trafficType=value.value;
        break;
    }
    this.setState({accountCommInfo:info});
  //  this.props.handleSelectFieldsChange( value, target );
  }

  rearrangeCols(){

  }

  render() {

    return (
      <div>

        <div className="controls-container">
          <div className="rec">
            <span>Commercial Information</span>
          </div>
           <Grid fluid={true}>
              <Row className="show-grid">
               <Col componentClass={ ControlLabel } md={ 2 }>
                 Account Manager:
               </Col>
               <Col md={ 6 } className={this.state.accountCommInfo.acctManager || this.state.emptyFlag ? false : "empty"}>
                 <Select
                       placeholder="Select account manager.."
                       options={this.userList}
                       value={this.state.accountCommInfo.acctManager}
                       onChange={this.handleSelectFieldsChange.bind(this,types.ACCOUNT_MGR_CHANGE)} />
               </Col>
               <Col mdHidden md={ 4 } />
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 2 }>
                  Company:
                </Col>
                <Col md={ 6 } className={this.state.accountCommInfo.company || this.state.emptyFlag ? false : "empty"}>
                  <Select
                        placeholder="Select company.."
                        options={this.companyList}
                        value={this.state.accountCommInfo.company}
                        onChange={this.handleSelectFieldsChange.bind(this,types.ACCOUNT_COMPANY_CHANGE)} />
                </Col>
                <Col mdHidden md={ 4 } />
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 2 }>
                  Billing Location:
                </Col>
                <Col md={ 6 } className={this.state.accountCommInfo.billingLocation || this.state.emptyFlag ? false : "empty"}>
                  <Select
                        placeholder="Select billing location.."
                        options={this.BillingLocation}
                        value={this.state.accountCommInfo.billingLocation}
                        onChange={this.handleSelectFieldsChange.bind(this,types.ACCOUNT_BILLING_LOCATION)} />
                </Col>
                <Col mdHidden md={ 4 } />
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 2 }>
                  Service Level:
                </Col>
                <Col md={ 6 } className={this.state.accountCommInfo.serviceLevel || this.state.emptyFlag ? false : "empty"}>
                <Select
                      placeholder="Select service level.."
                      options={this.ServiceLevel}
                      value={this.state.accountCommInfo.serviceLevel}
                      onChange={this.handleSelectFieldsChange.bind(this,types.ACCOUNT_SERVICE_LEVEL)} />
                </Col>
                <Col mdHidden md={ 4 } />
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 2 }>
                  Traffic Type:
                </Col>
                <Col md={ 6 } className={this.state.accountCommInfo.trafficType || this.state.emptyFlag ? false : "empty"}>
                <Select
                      placeholder="Select traffic type.."
                      options={this.TrafficType}
                      value={this.state.accountCommInfo.trafficType}
                      onChange={this.handleSelectFieldsChange.bind(this,types.ACCOUNT_TRAFFIC_TYPE)} />
                </Col>
                <Col mdHidden md={ 4 } />
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 2 }>
                  Revenue Sharing:
                </Col>
                <Col md={ 6 }>
                  <label>
                      <Toggle
                          icons={{
                           checked:'on',
                           unchecked: 'off',
                          }}
                          defaultChecked={this.state.toggleFlag}
                          value={this.state.accountCommInfo.toggleFlag}
                          onChange={this.toggleOnChange.bind(this)} />
                    </label>
                </Col>
                <Col mdHidden md={ 4 } />
              </Row>
          </Grid>
        </div>

        <div className="button-container">
          <Grid fluid={true}>
            <Row className="show-grid">
              <Col md={ 12 } >
                <ButtonToolbar>
                  <Button className="btn-primary" onClick={ this.goToTechnicalDetails.bind( this ) }>Next</Button>
                </ButtonToolbar>
              </Col>
            </Row>
          </Grid>
        </div>

        <ToastContainer
            toastMessageFactory={ ToastMessageFactory }
            ref="container"
            className="toast-top-right" />
      </div>
    )
  }

  handleRevSharingChanged( event, value ) {
  //  this.accountCommInfo.revSharing = value;
  }

  toggleOnChange(){
    console.log( this.state.toggleFlag );
    this.setState({
       toggleFlag: !this.state.toggleFlag,
     });
    this.state.accountCommInfo.toggleFlag = !this.state.toggleFlag;
  }

  goToTechnicalDetails() {
    // this.props.goToTechnicalDetails( this.state.accountCommInfo );
    var accountObjCheck = this.state.accountCommInfo;
     if(accountObjCheck.acctManager && accountObjCheck.company && accountObjCheck.billingLocation
      && accountObjCheck.serviceLevel && accountObjCheck.trafficType){
        this.props.goToTechnicalDetails( this.state.accountCommInfo );
      }
      else {
        this.setState({emptyFlag:false});
    }
  }

  componentWillMount() {
    this.userList = initializeData(Users,'login');
    this.companyList = initializeData(Company,'code');

    var BillingLocation = {
      "data": [
        {"name": "Mobile 365 Inc.", "value": 1},
        {"name": "Mobile 365 South Africa.", "value": 2},
        {"name": "Mobileway Australia", "value": 3},
        {"name": "Mobileway China", "value": 4}
      ]
    };
    this.BillingLocation = initializeData(BillingLocation,'value');

    var ServiceLevel = {
      "data": [
        {"name": "Standard", "value": "Standard"},
        {"name": "Premium", "value": "Premium"}
      ]
    };
    this.ServiceLevel = initializeData(ServiceLevel,'value');

    var TrafficType = {
      "data": [
        {"name": "General", "value": "General"},
        {"name": "Campaign", "value": "Campaign"},
        {"name": "Low Latency", "value": "Low Latency"},
        {"name": "Time Sensitive", "value": "Time Sensitive"}
      ]
    };
   this.TrafficType = initializeData(TrafficType,'value');
    //this.refs.requesterName.getInputNode().value = sessionStorage.getItem( "Username" ) || "";
  }

  componentWillReceiveProps( nextProps ) {

  }

}

function mapStateToProps( state ) {
  return {
    data: state.Account.data,
    target: state.Account.target
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    handleSelectFieldsChange: handleSelectFieldsChange,
    goToTechnicalDetails: goToTechnicalDetails
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( AccountCommDetails );
