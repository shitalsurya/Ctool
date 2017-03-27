import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";

import { initializeData,handleTechDetailsNext, getMetadata,handleTechDetailsBack } from '../../containers/account/actions/accountActions';
import * as types from '../../containers/account/actions/accountActionTypes';


require('../../../scss/style.scss');

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class AccountTechnicalDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.Countries=[];
        this.state={
          accountTechDetailsInfo:this.props.accountObj || []
        };
        console.log("this.state.accountTechDetailsInfo==",this.state.accountTechDetailsInfo);
    }
handleTextFieldsChange(e){
  switch(e.target.name){
    case "name":
        this.state.accountTechDetailsInfo.name = e.target.value;
      break;
        case "email":
            this.state.accountTechDetailsInfo.email = e.target.value;
          break;
          case "MobNo":
              this.state.accountTechDetailsInfo.MobNo = e.target.value;
            break;
          case "DirectNo":
              this.state.accountTechDetailsInfo.DirectNo = e.target.value;
            break;
  }


}
    handleSelectFieldsChange(target, value) {
      var info=this.state.accountTechDetailsInfo;
      switch (target) {
        case types.ACCOUNT_COMPANY_CONTACT:
          info.accountTechDetailsInfo.exstContacts = value;
          break;
        case types.ACCOUNT_COUNTRY_CHANGE:
          info.accountTechDetailsInfo.country = value;
          break;
      }
      this.setState({accountTechDetailsInfo:info});
    }
    handleTechDetailsBack(){
       this.StoreTextFieldsData();
        this.props.handleTechDetailsBack(this.accountInfo);
    }
    StoreTextFieldsData(){
       this.accountInfo=this.props.accountObj || [];
        this.accountInfo = Object.assign(this.accountInfo, this.state.accountTechDetailsInfo);
        console.log("Account Info=", this.accountInfo);
    }

    handleTechDetailsNext() {
     this.StoreTextFieldsData();
      this.props.handleTechDetailsNext( this.accountInfo );
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
                    <button type="button" className="btn btn-primary btn-circle" disabled="disabled">2</button>
                    <p>Technical Details</p>
                </div>
                <div className="stepwizard-step">
                    <button type="button" className="btn btn-circle inactive-step" disabled="disabled">3</button>
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
        <span>Technical Details</span>
        </div>
        <Grid fluid={true}>
              <Row className="show-grid">
                <Col
                     componentClass={ ControlLabel }
                     md={ 3 }> Existing company contacts:
                </Col>
                <Col md={ 6 }>
                  <Select
                        placeholder="Select contacts.."
                        options={this.contactsList}
                        value={this.state.accountTechDetailsInfo.exstContacts}
                        onChange={this.handleSelectFieldsChange.bind(this,types.ACCOUNT_COMPANY_CONTACT)}
                    />


                </Col>
                <Col
                     mdHidden
                     md={ 3 } />
              </Row>

                     <Row className="show-grid">
                       <Col
                            componentClass={ ControlLabel }
                            md={ 3 }> Name:
                       </Col>
                       <Col md={ 6 }>
                       <FormControl
                                    type="text"
                                    name="name"
                                    value={this.state.accountTechDetailsInfo.name}
                                   onChange={this.handleTextFieldsChange.bind(this)}
                                    placeholder="Enter your name" />
                       </Col>
                       <Col
                            mdHidden
                            md={ 3 } />
                     </Row>
                     <Row className="show-grid">
                       <Col
                            componentClass={ ControlLabel }
                            md={ 3 }> Email:
                       </Col>
                       <Col md={ 6 }>
                       <FormControl
                                    type="email"
                                    name="email"
                                    value={this.state.accountTechDetailsInfo.email}
                                   onChange={this.handleTextFieldsChange.bind(this)}
                                    placeholder="Enter your email" />
                       </Col>
                       <Col
                            mdHidden
                            md={ 3 } />
                     </Row>
                     <Row className="show-grid">
                       <Col
                            componentClass={ ControlLabel }
                            md={ 3 }> Country:
                       </Col>
                       <Col md={ 6 }>
                         <Select
                               placeholder="Select country.."
                               options={this.Countries}
                               value={this.state.accountTechDetailsInfo.country}
                               onChange={this.handleSelectFieldsChange.bind(this,types.ACCOUNT_COUNTRY_CHANGE)}
                           />
                       </Col>
                       <Col
                            mdHidden
                            md={ 3 } />
                     </Row>
                     <Row className="show-grid">
                       <Col
                            componentClass={ ControlLabel }
                            md={ 3 }> Mobile phone number:
                       </Col>
                       <Col md={ 6 }>
                       <FormControl
                                    type="text"
                                    name="MobNo"
                                    value={this.state.accountTechDetailsInfo.MobNo}
                                   onChange={this.handleTextFieldsChange.bind(this)}
                                    placeholder="Enter your mobile phone number"/>
                       </Col>
                       <Col
                            mdHidden
                            md={ 3 } />
                     </Row>
                     <Row className="show-grid">
                       <Col
                            componentClass={ ControlLabel }
                            md={ 3 }> Direct phone number:
                       </Col>
                       <Col md={ 6 }>
                       <FormControl
                                    type="text"
                                    name="DirectNo"
                                    value={this.state.accountTechDetailsInfo.DirectNo}
                                   onChange={this.handleTextFieldsChange.bind(this)}
                                    placeholder="Enter your direct phone number"/>
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
      <Button className="sap-btn btn-wizard pull-right"   onClick={ this.handleTechDetailsNext.bind( this ) }>Next</Button>
    <Button className="sap-btn btn-wizard pull-right"   onClick={ this.handleTechDetailsBack.bind( this ) }>Back</Button>
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
        // var countryList = localStorage.getItem("countryList");
        // if(countryList){
        //   console.log("get from cache");
        //     this.Countries = initializeData(JSON.parse(countryList),'code');
        //     console.log("this.Countries==",this.Countries);
        // }
        // else{
        //     console.log("get from backend");
        //     this.props.getMetadata();
        // }
    }
componentDidMount(){
  // this.refs.name.getInputNode().value = this.props.accountObj.name||"";
  //   this.refs.email.getInputNode().value = this.props.accountObj.email||"";
  //     this.refs.MobNo.getInputNode().value = this.props.accountObj.MobNo||"";
  //       this.refs.DirectNo.getInputNode().value = this.props.accountObj.DirectNo||"";
  //         this.refs.techName.getInputNode().value = this.props.accountObj.techName||"";
  //           this.refs.commName.getInputNode().value = this.props.accountObj.commName||"";

}
    componentWillReceiveProps (nextProps) {
        switch(nextProps.target){

            case types.ACCOUNT_GET_COUNTRY_LIST_SUCCESS:
              if(JSON.stringify(nextProps.data)!=""){
                localStorage.setItem("countryList",JSON.stringify(nextProps.data));
                this.Countries = initializeData(nextProps.data,'code');
              }
                break;
            case types.ACCOUNT_GET_COUNTRY_LIST_FAILURE:
                alert("Failed to get countries");
                break;
            case types.ACCOUNT_CREATE_NEW_SUCCESS:
               //alert("Account created successfully.");
                this.refs.container.success(`Account created successfully.`, ``, {
                    closeButton: true,
                });
                break;
            case types.ACCOUNT_CREATE_NEW_FAILURE:
                this.refs.container.error(`Failed to create new account.`, ``, {
                    closeButton: true,
                });
                break;
        }

    }
}
function mapStateToProps(state) {
    return { data: state.Account.data};
}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({
            handleTechDetailsNext: handleTechDetailsNext,
            handleTechDetailsBack:handleTechDetailsBack,
            getMetadata:getMetadata}, dispatch);
	}

export default connect(mapStateToProps, mapDispatchToProps)(AccountTechnicalDetails);
