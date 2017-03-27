import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";

import { initializeData, createNewAccount, getMetadata,handleInterfaceDetailsBack,handleInterfaceDetailsNext } from '../../containers/account/actions/accountActions';
import * as types from '../../containers/account/actions/accountActionTypes';


require('../../../scss/style.scss');

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class AccountInterfaces extends React.Component {
    constructor(props, context) {
        super(props, context);
      //  this.state.accountInterfacesInfo=this.props.accountObj || [];
        this.state={
          accountInterfacesInfo:this.props.accountObj || []
        };
        console.log("this.state.accountInterfacesInfo==",this.state.accountInterfacesInfo);
    }
    handleTextFieldsChange(e){
      switch(e.target.name){
        case "techName":
            this.state.accountInterfacesInfo.techName = e.target.value;
          break;
            case "commName":
                this.state.accountInterfacesInfo.commName = e.target.value;
              break;

      }
    }
    handleSelectFieldsChange(target, value) {
      var info=this.state.accountInterfacesInfo;
      console.log("handleSelectFieldsChange info==",info);
      switch (target) {

          case types.ACCOUNT_EXSTACCTS_CHANGE:
              info.accountInterfacesInfo.ExstAccts = value;
              break;
          case types.ACCOUNT_INTERFACE_CHANGE:
              info.accountInterfacesInfo.accInterface = value;
              break;
      }
      this.setState({accountInterfacesInfo:info});
    }
    handleInterfaceDetailsBack(){
       this.StoreTextFieldsData();
        this.props.handleInterfaceDetailsBack(this.accountInfo);
    }
    StoreTextFieldsData(){
       this.accountInfo=this.props.accountObj || [];

        this.accountInfo = Object.assign(this.accountInfo, this.state.accountInterfacesInfo);
        console.log("Account Info=", this.accountInfo);
    }
    handleInterfaceDetailsNext(){
     this.StoreTextFieldsData();
        this.props.handleInterfaceDetailsNext(this.accountInfo);
    }

    render() {
        return (
          <div>
          <div className="stepwizard breadcrumb-container">
            <div className="stepwizard-row">
                <div className="stepwizard-step">
                    <button type="button" className="btn btn-default btn-circle">1</button>
                    <p>Commercial Information</p>
                </div>
                <div className="stepwizard-step">
                    <button type="button" className="btn btn-default btn-circle">2</button>
                    <p>Technical Details</p>
                </div>
                <div className="stepwizard-step">
                    <button type="button" className="btn btn-primary btn-circle" disabled="disabled">3</button>
                    <p>Account Name and Interfaces</p>
                </div>
                <div className="stepwizard-step">
                    <button type="button" className="btn btn-circle inactive-step" disabled="disabled">4</button>
                    <p>Create Account</p>
                </div>
            </div>
            </div>

        <div className="controls-container">
        <div className="rec">
        <span>Account Name and Interfaces</span>
        </div>
      <Grid fluid={true}>
      <Row className="show-grid">
        <Col
             componentClass={ ControlLabel }
             md={ 3 }> Technical name:
        </Col>
        <Col md={ 6 }>
        <FormControl
                     type="text"
                     name="techName"
                     value={this.state.accountInterfacesInfo.techName}
                    onChange={this.handleTextFieldsChange.bind(this)}
                     placeholder="Enter technical name"/>
        </Col>
        <Col
             mdHidden
             md={ 3 } />
      </Row>
      <Row className="show-grid">
        <Col
             componentClass={ ControlLabel }
             md={ 3 }> Commercial name:
        </Col>
        <Col md={ 6 }>
        <FormControl
                     type="text"
                     name="commName"
                     value={this.state.accountInterfacesInfo.commName}
                    onChange={this.handleTextFieldsChange.bind(this)}
                     placeholder="Enter commercial name"/>
        </Col>
        <Col
             mdHidden
             md={ 3 } />
      </Row>
      <Row className="show-grid">
        <Col
             componentClass={ ControlLabel }
             md={ 3 }> Existing accounts :
        </Col>
        <Col md={ 6 }>
          <Select
                placeholder="Select account.."
                options={this.accountList}
                value={this.state.accountInterfacesInfo.ExstAccts}
                onChange={this.handleSelectFieldsChange.bind(this,types.ACCOUNT_EXSTACCTS_CHANGE)}
            />
        </Col>
        <Col
             mdHidden
             md={ 3 } />
      </Row>
      <Row className="show-grid">
        <Col
             componentClass={ ControlLabel }
             md={ 3 }> Interface:
        </Col>
        <Col md={ 6 }>
        <Select
              placeholder="Select interface.."
              options={this.interfaceList}
              value={this.state.accountInterfacesInfo.accInterface}
              onChange={this.handleSelectFieldsChange.bind(this,types.ACCOUNT_INTERFACE_CHANGE)}
          />
        </Col>
        <Col
             mdHidden
             md={ 3 } />
      </Row>
      <Row className="show-grid">
      <Col
           mdHidden
           md={ 3 } />

      <Col md={ 6 }>
       <Button className="sap-btn btn-wizard pull-right"   onClick={ this.handleInterfaceDetailsNext.bind( this ) }>Next</Button>
     <Button className="sap-btn btn-wizard pull-right"   onClick={ this.handleInterfaceDetailsBack.bind( this ) }>Back</Button>
      </Col>
      <Col
           mdHidden
           md={ 3 } />

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
    componentWillMount(){
      var Interfaces = {
          "data": [
                {"name": "HTTP", "value": "HTTP"},
                  {"name": "SMPP", "value": "SMPP"},
                    {"name": "SMTP", "value": "SMTP"}
          ]
      };
        this.interfaceList = initializeData(Interfaces,'value');
      var Accounts = {
          "data": [
              {"name": "Mobile 365 Inc.", "value": 1},
                {"name": "Mobile 365 South Africa.", "value": 2},
                  {"name": "Mobileway Australia", "value": 3},
                    {"name": "Mobileway China", "value": 4}
          ]
      };
        this.accountList = initializeData(Accounts,'value');
    }
    componentWillReceiveProps (nextProps) {

    }
}
function mapStateToProps(state) {
    return { data: state.Account.data };
}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({
            handleInterfaceDetailsBack:handleInterfaceDetailsBack,
            handleInterfaceDetailsNext:handleInterfaceDetailsNext
          }, dispatch);
	}

export default connect(mapStateToProps, mapDispatchToProps)(AccountInterfaces);
