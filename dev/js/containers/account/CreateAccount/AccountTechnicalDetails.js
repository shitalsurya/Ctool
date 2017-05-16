import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button, ButtonToolbar } from 'react-bootstrap';
import Select from 'react-select';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
import { initializeData,handleTechDetailsNext, getMetadata,handleTechDetailsBack, getExContactDetails } from './../actions/accountActions';
import * as types from './../../common/commonActionTypes';
import {getList} from './../../common/commonActions';
import {initializeSelectOptions} from './../../common/Functions/commonFunctions';
import ModalAddContact from '../AccountDetails/General/AddContact';
require('./../../../../scss/style.scss');
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class AccountTechnicalDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
          emptyFlag:true,
          addCnct:false,
          accountTechDetailsInfo:this.props.accountObj || []
        };
        console.log("this.state.accountTechDetailsInfo==",this.state.accountTechDetailsInfo);
    }

    handleChange(e){
      console.log("handleChange==",e.target.value);
      this.props.getExContactDetails(e.target.value);
      // var info = this.state.accountTechDetailsInfo;
      // info[e.target.name] = e.target.value;
      // this.setState({accountTechDetailsInfo:info},function(){
      //   console.log("handleChange==",this.state.accountTechDetailsInfo);
      // });
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

    close() {
      this.setState({addCnct : false});
    }

    addContact(_contact){
      this.setState({emptyFlag : false});
      var info = this.state.accountTechDetailsInfo;
      info.contactDetails = _contact;
      this.setState({accountTechDetailsInfo:info});
    }

    render() {
        return (
          <div>
            <div className="controls-container">
              <div className="rec">
                <span>Customer Contacts</span>
              </div>
              <Grid fluid={true}>
                { //this.state.emptyFlag &&
                  <div>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Existing company contacts:
                      </Col>
                      <Col md={ 4 }>
                        <FormControl componentClass="select"
                          name="exstContacts"
                          value={this.state.accountTechDetailsInfo.exstContacts}
                          onChange={this.handleChange.bind(this)}>
                          {this.exContactList}
                        </FormControl>
                      </Col>
                      <Col md={2}>
                        OR
                        <Button bsStyle="link" onClick={() => this.setState({addCnct : true})}> NEW </Button>
                      </Col>
                      <Col mdHidden md={ 3 } />
                    </Row>
                  </div>
                }

                { !this.state.emptyFlag &&
                  <div>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Name:
                      </Col>
                      <Col md={ 6 }>
                        <FormControl.Static name="name">
                          {this.state.accountTechDetailsInfo.contactDetails.name}
                        </FormControl.Static>
                      </Col>
                      <Col mdHidden md={ 3 } />
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Email:
                      </Col>
                      <Col md={ 6 }>
                        <FormControl.Static name="email">
                          {this.state.accountTechDetailsInfo.contactDetails.email}
                        </FormControl.Static>
                      </Col>
                      <Col mdHidden md={ 3 } />
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Country:
                      </Col>
                      <Col md={ 6 }>
                        <FormControl.Static name="country">
                          {this.state.accountTechDetailsInfo.contactDetails.country}
                        </FormControl.Static>
                      </Col>
                      <Col mdHidden md={ 3 } />
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Mobile phone number:
                      </Col>
                      <Col md={ 6 }>
                        <FormControl.Static name="mobilenumber">
                          {this.state.accountTechDetailsInfo.contactDetails.mobilenumber}
                        </FormControl.Static>
                      </Col>
                      <Col mdHidden md={ 3 } />
                    </Row>
                    <Row className="show-grid">
                       <Col componentClass={ ControlLabel } md={ 3 }>
                         Direct phone number:
                       </Col>
                       <Col md={ 6 }>
                         <FormControl.Static name="directnumber">
                           {this.state.accountTechDetailsInfo.contactDetails.directnumber}
                         </FormControl.Static>
                       </Col>
                       <Col mdHidden md={ 3 } />
                     </Row>
                  </div>
                }

              </Grid>
            </div>

            <ModalAddContact  showContact={this.state.addCnct} addContact={this.addContact.bind(this)} close={this.close.bind(this)}/>

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
        this.props.getList("contacts");
        // var Companies = {
        //   "data":[
        //     {"name": "10 GRAD(37669)", "value": "10 GRAD(37669)"},
        //     {"name": "100 BEST(39551)", "value": "100 BEST(39551)"},
        //     {"name": "10DUKE (38660)", "value": "10DUKE (38660)"},
        //     {"name": "118811 (39258)", "value": "118811 (39258)"}
        //   ]
        // };
        // this.contactsList = initializeData(Companies,'value');
    }

    // componentDidMount(){
    //   // this.refs.name.getInputNode().value = this.props.accountObj.name||"";
    //   // this.refs.email.getInputNode().value = this.props.accountObj.email||"";
    //   // this.refs.MobNo.getInputNode().value = this.props.accountObj.MobNo||"";
    //   // this.refs.DirectNo.getInputNode().value = this.props.accountObj.DirectNo||"";
    //   // this.refs.techName.getInputNode().value = this.props.accountObj.techName||"";
    //   // this.refs.commName.getInputNode().value = this.props.accountObj.commName||"";
    // }

    componentWillReceiveProps (nextProps) {
      console.log("componentWillReceiveProps==",nextProps);
      this.Countries = initializeSelectOptions(nextProps.Countries,'countryName','countryCode');
      console.log("this.Countries==",this.Countries);
      this.exContactList = initializeSelectOptions(nextProps.exContactList,'name','contactid');
      console.log("this.exContactList==",this.exContactList);
      var info = this.state.accountTechDetailsInfo || [];
      info.contactDetails = nextProps.contactDetails || {};
      switch(nextProps.target){
        case types.GET_EX_CONTACT_DETAILS_RESPONSE:
          info.contactDetails = nextProps.contactDetails.details;
          this.setState({emptyFlag:false});
          break;
      }
      this.setState({accountTechDetailsInfo:info})
    }
}

function mapStateToProps(state) {
    return {
      // data: state.Account.data,
      target:state.Account.target,
      Countries:state.Common.countryList,
      exContactList:state.Common.exContactList,
      contactDetails:state.Account.contactDetails
    };
}

function mapDispatchToProps(dispatch) {
  	return bindActionCreators({
            getList:getList,
            handleTechDetailsNext: handleTechDetailsNext,
            handleTechDetailsBack:handleTechDetailsBack,
            getExContactDetails:getExContactDetails
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountTechnicalDetails);
