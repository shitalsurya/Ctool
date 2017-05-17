import React from 'react';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import Select from 'react-select';
import Toggle from 'react-toggle';
require('./../../../../../scss/style.scss');
require('./../../../../../scss/react-toggle.scss');
import Countries from './../../../../../json/Countries.json';
import * as types from './../../../common/commonActionTypes';
import { initializeSelectOptions } from './../../../common/Functions/commonFunctions';
import { initializeData } from './../../actions/accountActions';
class AddContact extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state={
        modalHeading : 'Add Contact',
        AddContactInfo : this.props.AddContactInfo || {},
      }
  }
  handleModalChange(e){
    console.log("handleModalChange==",e);
    var addcontactinfo = this.state.AddContactInfo;
    addcontactinfo[e.target.name]=e.target.value;
    this.setState({ AddContactInfo: addcontactinfo});
  }

  saveAddContact(){
    console.log("new contactinfo : " , this.state.AddContactInfo);
    // this.props.handleSaveContact(this.state.AddContactInfo);
    // this.props.close();
    this.props.addContact(this.state.AddContactInfo);
    this.props.close();
  }

  componentWillMount(){
    // this.countryList = initializeData(Countries,'countryName');
    this.countryList = initializeSelectOptions(Countries.data,'countryName','countryCode')
  }

  close() {
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
                      Contact:
                    </Col>
                    <Col md={ 8 }>
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
                    <Col md={ 8 }>
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
                    <Col md={ 8 }>
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
                    <Col md={ 8 }>
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
                    <Col md={ 8 }>
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

export default (AddContact);
