import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button, ButtonToolbar } from 'react-bootstrap';
import Select from 'react-select';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
import { initializeData,handleTechDetailsNext, getMetadata,handleTechDetailsBack } from './../actions/accountActions';
import * as types from './../../common/commonActionTypes';
require('./../../../../scss/style.scss');
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
      console.log("handleSelectFieldsChange info==",info);
      switch (target) {
        case types.ACCOUNT_COMPANY_CONTACT:
          info.exstContacts = value.value;
          break;
        case types.ACCOUNT_COUNTRY_CHANGE:
          info.country = value.value;
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

            <div className="controls-container">
              <div className="rec">
                <span>Technical Details</span>
              </div>
              <Grid fluid={true}>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 3 }>
                    Existing company contacts:
                  </Col>
                  <Col md={ 6 }>
                    <Select
                        placeholder="Select contacts.."
                        options={this.contactsList}
                        value={this.state.accountTechDetailsInfo.exstContacts}
                        onChange={this.handleSelectFieldsChange.bind(this,types.ACCOUNT_COMPANY_CONTACT)} />
                  </Col>
                  <Col mdHidden md={ 3 } />
                </Row>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 3 }>
                    Name:
                  </Col>
                  <Col md={ 6 }>
                    <FormControl
                        type="text"
                        name="name"
                        value={this.state.accountTechDetailsInfo.name}
                        onChange={this.handleTextFieldsChange.bind(this)}
                        placeholder="Enter your name" />
                  </Col>
                  <Col mdHidden md={ 3 } />
                </Row>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 3 }>
                    Email:
                  </Col>
                  <Col md={ 6 }>
                    <FormControl
                        type="email"
                        name="email"
                        value={this.state.accountTechDetailsInfo.email}
                        onChange={this.handleTextFieldsChange.bind(this)}
                        placeholder="Enter your email" />
                  </Col>
                  <Col mdHidden md={ 3 } />
                </Row>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 3 }>
                    Country:
                  </Col>
                  <Col md={ 6 }>
                    <Select
                        placeholder="Select country.."
                        options={this.Countries}
                        value={this.state.accountTechDetailsInfo.country}
                        onChange={this.handleSelectFieldsChange.bind(this,types.ACCOUNT_COUNTRY_CHANGE)} />
                  </Col>
                  <Col mdHidden md={ 3 } />
                </Row>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 3 }>
                    Mobile phone number:
                  </Col>
                  <Col md={ 6 }>
                    <FormControl
                        type="text"
                        name="MobNo"
                        value={this.state.accountTechDetailsInfo.MobNo}
                        onChange={this.handleTextFieldsChange.bind(this)}
                        placeholder="Enter your mobile phone number"/>
                  </Col>
                  <Col mdHidden md={ 3 } />
                </Row>
                <Row className="show-grid">
                   <Col componentClass={ ControlLabel } md={ 3 }>
                     Direct phone number:
                   </Col>
                   <Col md={ 6 }>
                   <FormControl
                        type="text"
                        name="DirectNo"
                        value={this.state.accountTechDetailsInfo.DirectNo}
                        onChange={this.handleTextFieldsChange.bind(this)}
                        placeholder="Enter your direct phone number"/>
                   </Col>
                   <Col mdHidden md={ 3 } />
                 </Row>
              </Grid>
            </div>

            <div className="button-container">
              <Grid fluid={true}>
                <Row className="show-grid">
                  <Col md={ 12 } >
                    <ButtonToolbar>
                      <Button className="btn-primary"   onClick={ this.handleTechDetailsBack.bind( this ) }>Back</Button>
                      <Button className="btn-primary"   onClick={ this.handleTechDetailsNext.bind( this ) }>Next</Button>
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

    componentWillMount(){
        var countryList = localStorage.getItem("countryList");
        if(countryList){
          console.log("get from cache");
          this.Countries = initializeData(JSON.parse(countryList),'code');
          console.log("this.Countries==",this.Countries);
        }
        else{
          console.log("get from backend");
          this.props.getMetadata();
        }

        var Companies = {
          "data":[
            {"name": "10 GRAD(37669)", "value": "10 GRAD(37669)"},
            {"name": "100 BEST(39551)", "value": "100 BEST(39551)"},
            {"name": "10DUKE (38660)", "value": "10DUKE (38660)"},
            {"name": "118811 (39258)", "value": "118811 (39258)"}
          ]
        };
        this.contactsList = initializeData(Companies,'value');
    }

    componentDidMount(){
      // this.refs.name.getInputNode().value = this.props.accountObj.name||"";
      // this.refs.email.getInputNode().value = this.props.accountObj.email||"";
      // this.refs.MobNo.getInputNode().value = this.props.accountObj.MobNo||"";
      // this.refs.DirectNo.getInputNode().value = this.props.accountObj.DirectNo||"";
      // this.refs.techName.getInputNode().value = this.props.accountObj.techName||"";
      // this.refs.commName.getInputNode().value = this.props.accountObj.commName||"";
    }

    componentWillReceiveProps (nextProps) {
      console.log("componentWillReceiveProps==",nextProps);
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
        }
    }

}

function mapStateToProps(state) {
    return { data: state.Account.data,target:state.Account.target};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
          handleTechDetailsNext: handleTechDetailsNext,
          handleTechDetailsBack:handleTechDetailsBack,
          getMetadata:getMetadata}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountTechnicalDetails);
