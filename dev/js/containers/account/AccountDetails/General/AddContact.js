import React from 'react';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
require('./../../../../../scss/style.scss');
require('./../../../../../scss/react-toggle.scss');
import * as types from './../../../common/commonActionTypes';
import { getExContactDetails } from './../../actions/accountActions';
import { addHubAccountContact } from './../../actions/accountGeneralActions';
import { initializeSelectOptions } from './../../../common/Functions/commonFunctions';
class AddContact extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state={
        modalHeading : 'Add Contact',
        AddContactInfo : {
        customerid:this.props.currentAcct,
        mandatoryFlag:false
        }
      }
  }

  handleModalChange(e){
    console.log("handleModalChange==",e.target.name);
    var addcontactinfo = this.state.AddContactInfo;
    addcontactinfo[e.target.name]=e.target.value;
    addcontactinfo.contactid = 0;
    this.setState({ AddContactInfo: addcontactinfo});
  }

  handleExContactChange(e){
    console.log("handleChange==",e.target.value);
    var addcontactinfo = this.state.AddContactInfo;
    addcontactinfo[e.target.name]=e.target.value;
    this.setState({ AddContactInfo: addcontactinfo});
    this.props.getExContactDetails(e.target.value);
  }

  saveAddContact(){
    var info = this.state.AddContactInfo;
    console.log("new contactinfo : " , this.state.AddContactInfo);
    if(info.name && info.email && info.countryid && info.mobile && info.phone){
      this.props.addHubAccountContact(this.state.AddContactInfo);
      this.props.close(this.state.AddContactInfo);
    }
    else {
      this.setState({mandatoryFlag : true});
    }
  }

  componentWillReceiveProps( nextProps ) {
    console.log("componentWillReceiveProps==",nextProps);
    this.countryList = initializeSelectOptions(nextProps.countryList,'countryname','countryid');
    console.log("this.countryList==",this.countryList);
    this.exContactList = initializeSelectOptions(nextProps.exContactList,'name','contactid');
    console.log("this.exContactList==",this.exContactList);
    switch(nextProps.target){
      case types.GET_EX_CONTACT_DETAILS_RESPONSE:
        if(nextProps.contactDetails!=null){
          var info = this.state.AddContactInfo;
          info = Object.assign(info,nextProps.contactDetails);
          // info = nextProps.contactDetails;
          console.log("GET_EX_CONTACT_DETAILS_RESPONSE info==",info);
          this.setState({AddContactInfo:info},
          function(){
            console.log("GET_EX_CONTACT_DETAILS_RESPONSE state==",this.state.AddContactInfo);
          });
        }
      break;
    }
  }

  close() {
    this.setState({mandatoryFlag : false});
    this.props.close();
  }

  render(){

        return(
          <Modal show={this.props.showContact} onHide={this.close.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>{this.state.modalHeading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <Grid fluid={true}>
                  <Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 4 }>
                        Existing company contacts:
                    </Col>
                    <Col md={ 8 }>
                    <FormControl componentClass="select"
                      name="contactid"
                      onChange={this.handleExContactChange.bind(this)}>
                      <option value="select" disabled selected>Please select...</option>
                      {this.exContactList}
                    </FormControl>
                    </Col>
                  </Row>
                  <div className="center">OR</div>
                  <Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 4 }>
                      Contact:
                    </Col>
                    <Col md={ 8 } className={!this.state.AddContactInfo.name && this.state.mandatoryFlag ? "empty" : false}>
                      <FormControl
                        type="text"
                        name="name"
                        value={this.state.AddContactInfo.name || ''}
                        onChange={this.handleModalChange.bind(this)}
                        placeholder="Enter Company name" />
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 4 }>
                      Email:
                    </Col>
                    <Col md={ 8 } className={!this.state.AddContactInfo.email && this.state.mandatoryFlag ? "empty" : false}>
                      <FormControl
                        type="text"
                        name="email"
                        value={this.state.AddContactInfo.email || ''}
                        onChange={this.handleModalChange.bind(this)}
                        placeholder="Enter Email" />
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 4 }>
                      Country:
                    </Col>
                    <Col md={ 8 } className={!this.state.AddContactInfo.countryid && this.state.mandatoryFlag ? "empty" : false}>
                      <FormControl componentClass="select"
                        name="countryid"
                        value={this.state.AddContactInfo.countryid || ''}
                        onChange={this.handleModalChange.bind(this)}>
                          <option value="select" disabled selected>Please select...</option>
                        {this.countryList}
                      </FormControl>
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 4 }>
                      Mobile Phone Number:
                    </Col>
                    <Col md={ 8 } className={!this.state.AddContactInfo.mobile && this.state.mandatoryFlag ? "empty" : false}>
                      <FormControl
                        type="text"
                        name="mobile"
                        value={this.state.AddContactInfo.mobile || ''}
                        onChange={this.handleModalChange.bind(this)}
                        placeholder ="Enter mobilenumber" />
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 4 }>
                      Direct Phone Number:
                    </Col>
                    <Col md={ 8 } className={!this.state.AddContactInfo.phone && this.state.mandatoryFlag ? "empty" : false}>
                      <FormControl
                        type="text"
                        name="phone"
                        value={this.state.AddContactInfo.phone || ''}
                        onChange={this.handleModalChange.bind(this)}
                        placeholder ="Enter directnumber" />
                    </Col>
                  </Row>
                </Grid>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.saveAddContact.bind(this)}>Save Contact</Button>
              <Button onClick={this.close.bind(this)}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

}

function mapStateToProps( state ) {
  return {
    countryList: state.MiscCntry.countryList,
    exContactList:state.Common.exContactList,
    contactDetails:state.Account.contactDetails,
    target:state.Account.target
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    addHubAccountContact:addHubAccountContact,
    getExContactDetails:getExContactDetails
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( AddContact );
